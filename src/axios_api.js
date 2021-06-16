import axios from "axios";

const link = 'https://common.erpplugins.com/';

const axiosApi = {
    getConnection: function () {
        return axios.create({
            baseURL: '/',
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    },
    saveSign: function (sign) {
        const data = {
            storecode: sessionStorage.getItem("code"),
            sign: sign
        };
        const url = link + 'api/sign/saveSign';
        return this.getConnection().post(url, data);
    },
    savePicture: function (pic) {
        const data = {
            storecode: sessionStorage.getItem("code"),
            pic: pic
        };
        const url = link + 'api/sign/savePicture';
        return this.getConnection().post(url, data);
    }
}

export default axiosApi;
