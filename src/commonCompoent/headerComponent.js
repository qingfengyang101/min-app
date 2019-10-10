/**
 * common header to project for huawei
 * author: xyh
 * date: 2019/6/10 9:48
 * @type {{}}
 */
import commonProxyModel  from "../../plugin/ProxyModel";

/**
 *  init commonProxy instance to proxy model
 * @type {ProxyModel}
 * @return null
 */
function headerComponent (dataTemplate) {
    let template =
            `<header class="hua-wei-header">
                <ul>
                    ${dataTemplate}
                </ul>
            </header>`;

    return template;
};

let headerStr = '';

function getHeaderData () {
    return new Promise( (resolve => {
        commonProxyModel.getAxios().getHttp(commonProxyModel.getUrl().headerUrlApi, (data) => {
            data.data.data.map( ( v, k) => {
                if (v.iphoneUrl) {
                    headerStr += `<li class="${ v.id }"> <span><img class="nav-header-iphone" src="${ v.iphoneUrl }"> ${ v.dataText } <img src="${ v.iconUrl}"></span></li>`
                } else {
                    headerStr += `<li class="${ v.id }"> <span>${ v.dataText } <img src="${ v.iconUrl}"></span></li>`
                }
                
            });
            resolve( headerComponent(headerStr) );
        });
    }));

}

async function getHeaderTemplate () {
    let result = await getHeaderData();
    return result;
}

export default  getHeaderTemplate;