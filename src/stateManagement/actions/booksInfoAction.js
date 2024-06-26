export const BOOKS_INFO = "BOOKS_INFO"
export const BOOKS_COPY = "BOOKS_COPY"
export const BOOKS_CATALOGO = "BOOKS_CATALOGO"
export const All_BOOKS = "All_BOOKS"

export function booksInfo (books){
    return {
        type: BOOKS_INFO,
        payload: books
    }
}

export function booksCopyAction(books){
    return {
        type: BOOKS_COPY,
        payload: books
    }
}

export function booksCatalogoAction(books){
    return {
        type: BOOKS_CATALOGO,
        payload: books
    }
}
export function allBooks(books){
    return {
        type: All_BOOKS,
        payload: books
    }
}