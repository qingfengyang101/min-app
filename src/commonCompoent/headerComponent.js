/**
 * common header to project for huawei
 * author: xyh
 * date: 2019/6/10 9:48
 * @type {{}}
 */
import ProxyModel from "../../plugin/ProxyModel";

/**
 *  init commonProxy instance to proxy model
 * @type {ProxyModel}
 * @return null
 */
function headerComponent (dataTemplate) {
    let str =
            `<header>
                <ul>
                    ${dataTemplate}
                </ul>
            </header>`;

    return str;
};

let headerStr = '';
const commonProxy = new ProxyModel();

function getHeaderData () {
    return new Promise( (resolve => {
        commonProxy.getAxios().getHttp(commonProxy.getUrl().headerUrlApi, (data) => {
            data.data.data.map( ( v, k) => {
                headerStr += `<li> ${ v.dataText }</li>`
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