import { create } from 'apisauce';
import environment from "../environments/environment"

const api = create({
    baseURL: environment.baseApiUrl,
    headers: {
        Accept: "/",
        Version:"0.0.1"
    },
    timeout: 15000
});

export const getCountries = async() =>{
    try {
        const countries = await api.get('/resources/countries')
        return countries.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}
export const getCities = async(id) =>{
    try {
        const cities = await api.get(`/resources/cities?CountryId=${id}`)
        return cities.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}

export const getPersonType = async () =>{
    try {
        const personType = await api.get(`/resources/personTypes`)
        return personType.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}

export const getAdditionalType = async(id) =>{
    try {
        const additionalType = await api.get(`/resources/additionalTypes?PersonTypeId=${id}`)
        console.log(additionalType);
        return additionalType.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}

export const getCategories = async()=>{
    try {
        const categories = await api.get(`/resources/categories`)
        return categories.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}

export const getDocumentType = async(country, type) =>{
    console.log(country, type);
    try {
        const documentType = await api.get(`/resources/documentTypes?CountryId=${country}&PersonTypeId=${type}`)
        console.log(documentType);
        return documentType.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}

export const register = async(input) =>{
    console.log("Esto es en servicio register", input);
    const user = await api.post(`/auth/users/`, input)
    console.log(user.data);
    try {
        return user.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}
