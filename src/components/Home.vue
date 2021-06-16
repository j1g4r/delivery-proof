<template>
  <q-layout class="fullscreen">
    <div class="row">
      <q-input v-model="number" label="Number" style="width: 70%"/>
      <q-btn color="primary" @click="getSalesDocuments" label="Primary" style="width: 30%"/>
    </div>
    <div v-if="record!== null">
      <div class="no-margin" style=" max-width: 100%">
        <q-item-section>Invoice details</q-item-section>
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
            <q-item-label>Type:</q-item-label>
          </div>
          <div class="col">
            <q-item-label>{{ record.type }}</q-item-label>
          </div>
        </div>
        <div class='row'>
          <div class="col">
            <q-item-label>Client Name:</q-item-label>
          </div>
          <div class="col">
            <q-item-label>{{ record.clientName }}</q-item-label>
          </div>
        </div>
        <div class='row'>
          <div class="col">
            <q-item-label>Delivery Date:</q-item-label>
          </div>
          <div class="col">
            <q-item-label>{{ record.deliveryDate }}</q-item-label>
          </div>
        </div>
        <div class='row'>
          <div class="col">
            <q-item-label>Note:</q-item-label>
          </div>
          <div class="col">
            <q-item-label>{{ record.notes }}</q-item-label>
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
            <q-item-label>Warehouse:</q-item-label>
          </div>
          <div class="col">
            <q-item-label>{{ record.warehouseName }}</q-item-label>
          </div>
        </div>
        <div class='row'>
          <div class="col">
            <q-item-label>Shipping Name:</q-item-label>
          </div>
          <div class="col">
            <q-item-label>{{ record.shipToName }}</q-item-label>
          </div>
        </div>
        <div class='row'>
          <div class="col">
            <q-item-label>Shipping Address:</q-item-label>
          </div>
          <div class="col">
            <q-item-label>{{ record.shipToAddress }}</q-item-label>
          </div>
        </div>
        <div class='row'>
          <div class="col">
            <q-item-label>Total:</q-item-label>
          </div>
          <div class="col">
            <q-item-label> {{ record.total }} {{ record.currencyCode }}</q-item-label>
          </div>
        </div>
      </div>
      <q-footer bordered class="bg-white text-primary" elevated>
        <q-btn color="primary" @click="openInvoice" label="Open"></q-btn>
      </q-footer>
    </div>
  </q-layout>
</template>

<script>
import erplyApi from "@/erply_api";
import router from '@/router';

export default {
  name: "Home",
  data() {
    return {
      isDisabled: false,
      record: null,
      number: 819876545764
    }
  },
  methods: {
    openInvoice() {
      if (this.number !== null && this.record !== null) {
        sessionStorage.setItem('invoice', JSON.stringify(this.record));
        router.push('/delivery');
      }
    },
    getSalesDocuments() {
      if (this.number !== null) {
        erplyApi.getSalesDocuments(this.number).then((response) => {
          if (response.data.status.responseStatus === "ok") {
            if (response.data.status.recordsInResponse > 0) {
              this.record = response.data.records[0];
            }
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    }
  }
}
</script>

<style scoped>

</style>