export const BOOKS_INFO = "BOOKS_INFO"
export const BOOKS_COPY = "BOOKS_COPY"
export const BOOKS_CATALOGO = "BOOKS_CATALOGO"
export const All_BOOKS = "All_BOOKS"
export const All_BOOKS_SPANISH = "All_BOOKS_SPANISH"
export const All_BOOKS_ENGLISH = "All_BOOKS_ENGLISH"
export const All_BOOKS_FRANCH = "All_BOOKS_FRANCH"
export const All_BOOKS_ITALIAN = "All_BOOKS_ITALIAN"
export const All_BOOKS_PORTUGUES = "All_BOOKS_PORTUGUES"

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
export function allBooksSpanish(books){
    return {
        type: All_BOOKS_SPANISH,
        payload: books
    }
}
export function allBooksEnglish(books){
    return {
        type: All_BOOKS_ENGLISH,
        payload: books
    }
}
export function allBooksFranch(books){
    return {
        type: All_BOOKS_FRANCH,
        payload: books
    }
}
export function allBooksItalian(books){
    return {
        type: All_BOOKS_ITALIAN,
        payload: books
    }
}
export function allBooksPortugues(books){
    return {
        type: All_BOOKS_PORTUGUES,
        payload: books
    }
}