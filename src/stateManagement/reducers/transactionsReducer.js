import { GET_TRANSACTIONS, GET_PAYPAL } from "../actions/getTrasactions";

const initialState = {
    history:{},
    payPalAnswer: false,
    loading:false
}

export default function transactionsReducer (state = initialState, action){
    switch(action.type){
        case GET_TRANSACTIONS:
            return {
                ...state,
                history:action.payload,
                loading:false
            }
        case GET_PAYPAL:
            return{
                ...state,
                payPalAnswer: action.payload,
                loading:false

            }
        default:
            return state
    }
}