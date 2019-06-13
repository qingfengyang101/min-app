import './asset/style/common.scss';
import './asset/style/index.scss';
import headerComponent from "./src/commonCompoent/headerComponent";
import ProxyModel from "./plugin/ProxyModel";

const ProxyModelCommon = new ProxyModel();
headerComponent().then( (data) => {
    ProxyModelCommon.appendTemplate(ProxyModelCommon.changeDOMNode(data));
} );