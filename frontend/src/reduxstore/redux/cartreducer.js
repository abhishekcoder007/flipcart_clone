

export const Cartreducer=(state={cartItems:[]},action)=>{

    switch(action.type){
        case "cartdataaddsucess":
            // return {...state,cartItems:[action.payload]}
            const item = action.payload;

            const existItem = state.cartItems.find(product => product.id === item.id);
            
            if(existItem){
                return {
                    ...state, cartItems: state.cartItems.map(x => x.product === existItem.product? item : x)
                }
            } else {
                return  { ...state, cartItems: [...state.cartItems, item]}
            }

            case "cartdataaddfail":
                return {
                    ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
                }
                case "cartremoveitem":
                    return {
                        ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
                    }
            default:
                return state;
        }

    }
