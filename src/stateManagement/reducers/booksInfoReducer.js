import { BOOKS_COPY, BOOKS_INFO, BOOKS_CATALOGO, All_BOOKS, allBooks, All_BOOKS_SPANISH, All_BOOKS_ENGLISH, All_BOOKS_FRANCH, All_BOOKS_ITALIAN, All_BOOKS_PORTUGUES } from "../actions/booksInfoAction"

const initialState = {
    books:[],
    booksCatalogo : [],
    booksCopy:[],
    allBooks:[],
    allBooksSpanish:[],
    allBooksEnglish:[],
    allBooksFranch:[],
    allBooksItalian:[],
    allBooksPortugues:[]
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
        case All_BOOKS_SPANISH:
            return {
                ...state,
                allBooksSpanish:action.payload,
            }
        case All_BOOKS_ENGLISH:
            let allEnglish = [...state.allBooks]
            allEnglish = allEnglish.concat(action.payload)
            return {
                ...state,
                allBooksEnglish:action.payload,
                allBooks: allEnglish
            }
        case All_BOOKS_FRANCH:
            let allFrance = [...state.allBooks]
            allFrance = allFrance.concat(action.payload)
            return {
                ...state,
                allBooksFranch:action.payload,
                allBooks: allFrance
            }
        case All_BOOKS_ITALIAN:
            let allItalian = [...state.allBooks]
            allItalian = allItalian.concat(action.payload)
            return {
                ...state,
                allBooksItalian:action.payload,
                allBooks: allItalian
            }
        case All_BOOKS_PORTUGUES:
            let allPortugues = [...state.allBooks]
            allPortugues = allPortugues.concat(action.payload)
            return {
                ...state,
                allBooksPortugues:action.payload,
                allBooks: allPortugues
            }
        default:
            return state
    }
}