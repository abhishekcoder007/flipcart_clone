import { combineReducers } from "redux";
import { productReducer} from "./productReducer";
import {productDetail} from "./productDetailreducer"
import {Cartreducer}  from "./cartreducer"


export const allReducer =combineReducers({
      productReducer:productReducer,
      productDetail:productDetail,
      cart:Cartreducer
})