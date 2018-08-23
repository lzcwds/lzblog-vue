/**
 * Created by dy on 2018/8/17.
 *
 */

import axios from 'axios'
import url from './url'

let axiosIns=axios.create({});
axiosIns.defaults.baseURL =url.server;

let ajaxMethod = ['get', 'post','delete','put'];
let api={};

ajaxMethod.forEach((method)=> {
  //数组取值的两种方式
  api[method] = function (uri, data) {
    return new Promise(function (resolve, reject) {
      axiosIns[method](uri, data).then((response)=> {
        if(response.data.msg=="success"){
          resolve(response.data.data);
        }else{
          reject(response.data.returnMsg);
        }

      }).catch((e)=> {
        reject(e);
      })
    })
  }
});

export default api;