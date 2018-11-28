/*包含n个接口请求函数的模块*/
import ajax from './ajax'
const BASE='/api'
/*根据经纬度获取位置*/
export const reqAdress=(longitude,latitude)=>ajax(BASE+`/position/${latitude},${longitude}`)
/*获取食品列表*/
export const reqFoodCategorys=()=> ajax(BASE+'/index_category')

/*获取商家列表*/
export const reqShops=(longitude,latitude)=>ajax(BASE+'/shops',{latitude,longitude})
