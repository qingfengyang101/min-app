import './asset/style/common.scss';
import './asset/style/index.scss';
import ProxyModel from  './plugin/ProxyModel/index';

/**
 *  init commonProxy instance to proxy model
 * @type {ProxyModel}
 * @return null
 */
const commonProxy = new ProxyModel();
commonProxy.getAxios().getHttp(commonProxy.getUrl().headerUrlApi, (data) => {
});