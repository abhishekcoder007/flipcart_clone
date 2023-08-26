

const initialstate={product:{}}

export const productDetail=(state=initialstate,action)=>{

    switch(action.type){
        case "PRODUCTDETAILsuccess": return {loading:true,product:action.payload};
        case "PRODUCTDETAILfail"   : return {loading:false,product:action.payload};
        default:return state;
    }
}