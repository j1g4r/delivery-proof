import axios from "axios";
import querystring from 'querystring';

const link = 'https://erply.wtappz.com/api/';
//const link = 'https://' + '.erply.com/api/';

const erplyApi = {
    getConnection: function () {
        return axios.create({
            baseURL: '/',
            withCredentials: false,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },
    verifyUser: function (code, name, pass) {
        const url = link + code;
        const data = {
            clientCode: code,
            request: "verifyUser",
            username: name,
            password: pass,
            version: '1.0',
            sessionLength: 86400
        };
        return this.getConnection().post(url, querystring.stringify(data));
    },
    getSalesDocuments: function (number) {
        const code = sessionStorage.getItem('code');
        const url = link + code;
        const data = {
            sessionKey: sessionStorage.getItem('sessionKey'),
            clientCode: code,
            request: "getSalesDocuments",
            number:number
        };
        return this.getConnection().post(url, querystring.stringify(data));
    }
}
export default erplyApi;