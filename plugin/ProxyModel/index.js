/**
 *  proxy model to proxy about function
 *  author: xyh
 *  date: 2019/6/10 11:33
 */
import  BaseModelClass  from  '../Unit/CommonModelClass';

/**
 * import about model function
 * for some about children to use
 * @param model { Object }
 * @param modelMap { Array }
 * @return null
 */

// you want to proxy who , you can be who send inter.
class ProxyModel extends BaseModelClass{
    constructor (subject) {
        super(subject);
    }

}
export  default ProxyModel;

