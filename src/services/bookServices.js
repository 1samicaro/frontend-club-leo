import { create } from "apisauce";
import environment from "../environments/environment"

const api = create({
    baseURL: environment.baseBooksUrl,
    headers: {
        Accept: "/",
        Version:"0.0.1"
    },
    timeout: 15000
});

export const getBooks = async(id) =>{
    try {
        const books = await api.get(`/resources/books?languageId=${id}`)
        return books.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}