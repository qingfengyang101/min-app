import './asset/style/index.scss';
import  commonProxyModel from './plugin/ProxyModel/index';
import headerComponent from "./src/commonCompoent/headerComponent";
import navComponent from "./src/navTemplate";


headerComponent().then( (data) => {
    commonProxyModel.appendTemplate(commonProxyModel.changeDOMNode(data));
} );

navComponent().then( (data) => {
    commonProxyModel.appendTemplate(commonProxyModel.changeDOMNode(data));
})