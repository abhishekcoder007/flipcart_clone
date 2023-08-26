import { combineReducers } from "redux";
import { productReducer} from "./productReducer";
import {productDetail} from "./productDetailreducer"


export const allReducer =combineReducers({
      productReducer:productReducer,
      productDetail:productDetail,
})