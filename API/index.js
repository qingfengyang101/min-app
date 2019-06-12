/**
 *  API about get or post use axios lib
 *  axios about before inter
 *  author: xyh
 *  date: 2019/6/10 16:22
 **/
import qs from 'qs';
import axios from 'axios';

// 添加请求登录之前的拦截 request 请求
axios.interceptors.request.use( (config) => {
    if (config.method === "post") {
        // 利用qs库来进行转化为url参数
        config.data = qs.stringify(config.data)
    }
    return config;
}, (error) => {
    console.log(error);
    return Promise.reject(error)
});

// 添加响应拦截器： response响应拦截器
axios.interceptors.response.use( (response) => {
    // 返回成功请求的响应数据
    return response;
}, (error) => {
    return Promise.reject(error);
});


/**
 *  encapsulation about axios for get and post
 *  post or get success callback emit to event
 */
 const axiosHttpModel = {
     getHttp: (url, callback) => {
         return axios.get(url).then( ( data ) => {
             if (parseInt( data.status) === 200) {
                  if ( callback && typeof callback === 'function' ) {
                      callback(data);
                  }
             }
         })
     },
    postHttp: (url, param, callback) => {
         return axios.post(url, param).then( ( data ) => {
             if (data && parseInt(data.status) === 200) {
                 if (callback && typeof callback === 'function') {
                     callback(data);
                 }
             }
         })
    }
};

 export default axiosHttpModel;
