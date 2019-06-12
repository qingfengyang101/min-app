/**
 *  use ES6.0 to create model
 *  common model for resole project
 *  Base Model Class to use base abstract object
 *  author: xyh
 *  date: 2019-5-29 17:15
 **/
import URL from "../../API/Url";
import axiosHttpModel from "../../API";

 class BaseModelClass {
     constructor (data) {
        this.data = data;
     }

     getUrl () {
        return URL;
     }

     getAxios () {
        return axiosHttpModel;
     }


}

export default BaseModelClass;