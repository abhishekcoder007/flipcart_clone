
let initialstate={product:[]}

export const productReducer=(state=initialstate,action)=>{
console.log(action.payload)
    switch(action.type){
        case("success"):return{product:action.payload};
        case("error") : return {product:[]};
        default:return state;
    }

}