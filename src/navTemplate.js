/**
 *  nav template for index
 *  author: xyh
 *  date: 2019/8/30 16:55
 */
import commonProxyModel from "../plugin/ProxyModel/index";

const handleNavStrTemplate = (data) => {
    if (!data) return null;
    const navStrTemplateLeft = 
                        `
                            <div class="first-shop-logo">
                                <img src="${data.data.imgLogin.url}" alt="login 图片">
                            </div>
                        `;


    let navStrTemplateMiddleBottom = '';

    data.data.data.map ( (data) => {
        if (data.decribe === "search") {
            data.hotTextGather.map( (value) => {
                navStrTemplateMiddleBottom += `<li>${ value.hostText }</li>` 
             });
        }
    }) 

    let navStrTemplateMiddle = 
                        `
                            <div class="first-shop-middle">
                                <input type="text">
                                <ul> ${navStrTemplateMiddleBottom} </ul>
                            </div>     
                            
                        `;

    let navStrTemplateRight = 

                        `   
                            <div class="nav-template-right">
                                <a href="##"> 
                                    <img src="${ data.data.carShop.carShopIcon }">
                                    <span>${ data.data.carShop.carShopText }</span>
                                 </a>
                            </div>
                          
                        `;
                        
    let navBox =  
                        `
                            <div class="first-shop-nav">
                                ${navStrTemplateLeft + '' +  navStrTemplateMiddle + '' + navStrTemplateRight}
                            </div>
                        `
    return navBox;    

}

// async request nav need to data 
function getNavData () {
    return new Promise((resolve) => {
        commonProxyModel.getAxios().getHttp(commonProxyModel.getUrl().navUrlApi, (data) => {
            handleNavStrTemplate(data); 
            resolve(handleNavStrTemplate(data))
        });
    })
}


async function getNavTemplate() {
    let result = await getNavData();
    return result;
} 

export default getNavTemplate;