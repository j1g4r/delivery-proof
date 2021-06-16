<template>
  <q-layout>
    <div v-if="record!== null">
      <div class="no-margin" style=" max-width: 100%">
        <q-item-section>Invoice details</q-item-section>
        <div class='row'>
          <div class="col">
            <q-item-label>Name:</q-item-label>
          </div>
          <div class="col">
            <q-item-label>{{ record.clientName }}</q-item-label>
          </div>
        </div>
        <div class='row'>
          <div class="col">
            <q-item-label>Number:</q-item-label>
          </div>
          <div class="col">
            <q-item-label>{{ record.number }}</q-item-label>
          </div>
        </div>
        <div class='row'>
          <div class="col">
            <q-item-label>Reference:</q-item-label>
          </div>
          <div class="col">
            <q-item-label>{{ record.referenceNumber }}</q-item-label>
          </div>
        </div>
        <div class='row'>
          <div class="col">
            <q-item-label>Ship Address:</q-item-label>
          </div>
          <div class="col">
            <q-item-label>{{ record.shipToAddress }}</q-item-label>
          </div>
        </div>
      </div>
      <q-card class="no-margin" style="width: 100%">
        <div class="row" v-for="item in itemRows" v-bind:key="item.rowID">
          <div class="col" style="width: 80%">
            {{ item.itemName }}
          </div>
          <div class="col" style="width: 20%">
            {{ item.amount }}
          </div>
        </div>
      </q-card>
    </div>
    <q-footer bordered class="bg-white text-primary">
      <div class="row">
        <div class="col">
          <q-badge outline color="red" v-if="signId===null" type="info">Not Added</q-badge>
          <q-badge outline color="secondary" v-else type="success">Added</q-badge>
          <q-btn color="primary" @click="gotToSign" label="Sign"></q-btn>
        </div>
        <div class="col">
          <q-badge outline color="red" size="mini" v-if="picId===null" type="info">Not Added</q-badge>
          <q-badge outline color="secondary" size="mini" v-else type="success">Added</q-badge>
          <q-btn color="primary" size="mini" @click="goToCamera" label="Picture"></q-btn>
        </div>
        <div class="col">
          <q-btn color="primary" @click="submitDelivery">Confirm</q-btn>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import router from '@/router';

export default {
  name: "Delivery",
  data() {
    return {
      record: null,
      itemRows: [],
      signId: sessionStorage.getItem('sign'),
      picId: sessionStorage.getItem('pic'),
      signVisible: false,
      picVisible: false,
      columns: [
        {name: 'itemName', label: 'Name', field: 'itemName'},
        {name: 'amount', label: 'Qty', field: 'amount'}
      ],
    }
  },
  methods: {
    gotToSign() {
      router.push('camera');
    },
    goToCamera() {
      router.push('sign');
    },
    submitDelivery() {
      if (this.signId !== null) {
        if (this.picId !== null) {
          console.log(this.signId, this.picId);
        }
      }
    },
  },
  mounted() {
    this.record = JSON.parse(sessionStorage.getItem('invoice'));
    this.itemRows = this.record.rows;
    console.log(this.itemRows);
    //sessionStorage.setItem('invoice', null);

  }
}
</script>

<style scoped>

</style>