/**
 *  use ES6.0 to create model
 *  common model for resole project
 *  Base Model Class to use base abstract object
 *  author: xyh
 *  date: 2019-5-29 17:15
 **/
import URL from "../../API/Url";
import axiosHttpModel from "../../API";
import CODE_SERVER from "../../API/Code";

 class BaseModelClass {
     constructor (data) {
        this.data = data;
     }

     changeDOMNode (templateStr) {
        if (!templateStr) return null; 
        let warp = document.createElement('div');
        warp.innerHTML = templateStr;
        return warp.childNodes;
     }

     appendTemplate (dom) {
         if (dom && typeof dom === 'object') {
             Array.from(dom).map ( (v, k) => {
                 document.getElementById('app').appendChild(v);
             });
         }

         return null;
     }

     getUrl () {
        return URL;
     }

     getAxios () {
        return axiosHttpModel;
     }

     getServerCode () {
         return CODE_SERVER;
     }
}

export default BaseModelClass;