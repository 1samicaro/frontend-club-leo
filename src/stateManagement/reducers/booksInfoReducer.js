import { BOOKS_COPY, BOOKS_INFO, BOOKS_CATALOGO, All_BOOKS } from "../actions/booksInfoAction"

const initialState = {
    books:[],
    booksCatalogo : [],
    booksCopy:[],
    allBooks:[]
}

export default function booksInfoReducer (state = initialState, action){
    switch(action.type){
        case BOOKS_INFO:
            return {
                ...state,
                books:action.payload,
            }
        case BOOKS_COPY:
            return {
                ...state,
                booksCopy:action.payload,
            }
        case BOOKS_CATALOGO:
            return {
                ...state,
                booksCatalogo:action.payload,
            }
        case All_BOOKS:
            return {
                ...state,
                allBooks:action.payload,
            }
        default:
            return state
    }
}