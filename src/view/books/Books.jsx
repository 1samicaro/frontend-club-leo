import React, { useState } from 'react'
import Carousel from "react-elastic-carousel";
import { changeLanguageAction } from '../../stateManagement/actions/changeLanguageAction'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../services/bookServices'
import DataTable from '../../components/table/DataTable'
import { booksCopyAction, booksInfo, booksCatalogoAction } from '../../stateManagement/actions/booksInfoAction'
import { ProgressBar } from 'react-loader-spinner'
import { getAuthors, getCountriesBooks, getGenresBooks } from '../../services/dataByLanguage'
import { booksAuthors, booksCountries, booksGenres } from '../../stateManagement/actions/stateActions'
import { recomendedAction } from '../../stateManagement/actions/recommendedAction'
import { Link } from 'react-router-dom'
import "./Books.css"
import logo from '../../assets/logoleo.png'
import DataTableFilter from '../../components/table/DataTableFilter';


const breakPoints = [
    { width: 480, itemsToShow: 3 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 6 },
    { width: 1200, itemsToShow: 8 },
];

const languages =[
    {
        name:"Español", 
        id: 1
    }, 
    {
        name:"English",
        id:2
    }, 
    {
        name:"Française",
        id:3
    },
    {
        name:"Português",
        id:5
    },
    {
        name:"Italaiana",
        id:4
    }
]

// let didInit = true

export default function Books() {
    
    const dispatch = useDispatch()
    
    const languageChange = useSelector(state=> state.changeLanguageReducer?.id)
    
    // const charge = async () =>{
    //     setIsLoading(true)
    //     dispatch(changeLanguageAction(1))
    //     const [genres, countries, authors, books] = await Promise.all([
    //         getGenresBooks(languageChange),
    //         getCountriesBooks(languageChange),
    //         getAuthors(languageChange),
    //         getBooks(languageChange)
    //     ]
    //     )
    //     dispatch(booksGenres(genres))
    //     dispatch(booksCountries(countries))
    //     dispatch(booksAuthors(authors))
    //     if(books?.length>0){
    //         if(demo){
    //             books.sort((x, y) => x.name.localeCompare(y.name))
    //             setIsLoading(false)
    //             const demoBooks = books.slice(0,100)
    //             const recommend = demoBooks.filter(r => r.isFree===true)
    //             const filterCountry = demoBooks.filter(g => g.CountryId===17)
    //             const filterAuthor = filterCountry.filter(g => g.GenreId===15)
    //             dispatch(recomendedAction(recommend))
    //             dispatch(booksInfo(filterAuthor))
    //             dispatch(booksCatalogoAction(demoBooks))
    //             dispatch(booksCopyAction(demoBooks))
    //         }
    //         else {
    //             setIsLoading(false)
    //             const filterCountry = books.filter(g => g.CountryId===17)
    //             const filterAuthor = filterCountry.filter(g => g.GenreId===29)
    //             const recommend = books.filter(r => r.isFree===true)
    //             dispatch(recomendedAction(recommend))
    //             dispatch(booksInfo(filterAuthor))
    //             dispatch(booksCatalogoAction(books))
    //             dispatch(booksCopyAction(books))
    //         }
    //     }
    // }
    // useEffect(()=> {
    //     if(!didInit){
    //         didInit=true        
    //         charge();}
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // , [])
    
    ///aquí en false se muestran todos los libros, en true solo los 100 primeros
    
    ////////////

    const [language, setLanguage] = useState("1")
    // const language = useSelector(state=> state.changeLanguageReducer.id)
    const [isloading, setIsLoading] = useState(false)
    // const [predeterminado, setPredeterminado] = useState(false)

    // const [genres, setGenres] = useState([])
    // const [countries, setCountries] = useState([])
    // const [authors, setAuthors] = useState([])
    const [genre, setGenre] = useState(0)
    const [country, setCountry] = useState(0)
    const [author, setAuthor] = useState(0)

    ////para el filtro de la segunda tabla
    // const [genre2, setGenre2] = useState(0)
    // const [country2, setCountry2] = useState(0)
    // const [author2, setAuthor2] = useState(0)

    const [busquedaAvanzada, setBusquedaAvanzada] = useState(true)
    const [catalogo, setCatalogo] = useState(true)
    // const [random, setRandom] = useState([])

    const userInfo = useSelector(state=>state.infoUserReducer.user)

    // const books = useSelector(state=> state.booksInfoReducer?.books)
    const booksCopy = useSelector(state=> state.booksInfoReducer?.booksCopy)
    const booksCatalogo = useSelector(state=> state.booksInfoReducer?.booksCatalogo)
    const genres = useSelector(state=> state.stateReducers?.genres)
    const countries = useSelector(state=> state.stateReducers?.countries)
    const authors = useSelector(state=> state.stateReducers?.authors)
    const recommended = useSelector(state=>state.recommendedReducer?.recommended)

    let demo = true
    if(userInfo.isSuscribed){
        demo = false
    }

    const changeLanguage = async (e)=>{
        setIsLoading(true)
        setLanguage(e.target.value)
        dispatch(changeLanguageAction(Number(e.target.value)))
        const books = await getBooks(Number(e.target.value))
        if(books?.length>0){
            if(demo){
                const image = books.filter(r => r.image!=="")
                dispatch(recomendedAction(image))
                books.sort((x, y) => x.name.localeCompare(y.name))
                const demoBooks = books.slice(0,100)
                const recommend = demoBooks.filter(r => r.isFree===true)
                // dispatch(recomendedAction(image))
                // dispatch(booksInfo(demoBooks))
                const demoBooks1 = demoBooks.slice(0,40)
                dispatch(booksInfo(demoBooks1))
                dispatch(booksCatalogoAction(demoBooks))
                dispatch(booksCopyAction(demoBooks))
                setIsLoading(false)
                // dispatch(recomendedAction(recommend))
            }
            else {
                setIsLoading(false)
                // dispatch(booksInfo(books))
                const recommend = books.filter(r => r.isFree===true)
                const demoBooks = books.slice(0,40)
                const image = books.filter(r => r.image!=="")
                dispatch(recomendedAction(image))
                dispatch(booksInfo(demoBooks))
                dispatch(booksCatalogoAction(books))
                dispatch(booksCopyAction(books))
            }
        }
        const [genres, countries, authors] = await Promise.all([
            getGenresBooks(e.target.value),
            getCountriesBooks(e.target.value),
            getAuthors(e.target.value),
        ]
        )
        dispatch(booksGenres(genres))
        dispatch(booksCountries(countries))
        dispatch(booksAuthors(authors))
    }

    const send = async () => {
        if(genre===0 && author===0 && country===0){
            dispatch(booksInfo(booksCopy))
        }
        if(genre!==0 && author===0 && country===0){
            const filterGenre = booksCopy.filter(g => g.GenreId===genre)
            dispatch(booksInfo(filterGenre))
        }
        if(genre===0 && author!==0 && country===0){
            const filterAuthor = booksCopy.filter(g => g.AuthorId===author)
            dispatch(booksInfo(filterAuthor))
        }
        if(genre===0 && author===0 && country!==0){
            const filterCountry = booksCopy.filter(g => g.CountryId===country)
            dispatch(booksInfo(filterCountry))
        }
        if(genre!==0 && author!==0 && country===0){
            const filterAuthor = booksCopy.filter(g => g.AuthorId===author)
            const filterGenre = filterAuthor.filter(g => g.GenreId===genre)
            dispatch(booksInfo(filterGenre))
        }
        if(genre!==0 && author===0 && country!==0){
            const filterCountry = booksCopy.filter(g => g.CountryId===country)
            const filterGenre = filterCountry.filter(g => g.GenreId===genre)
            dispatch(booksInfo(filterGenre))
        }
        if(genre===0 && author!==0 && country!==0){
            const filterCountry = booksCopy.filter(g => g.CountryId===country)
            const filterAuthor = filterCountry.filter(g => g.AuthorId===author)
            dispatch(booksInfo(filterAuthor))
        }
        if(genre!==0 && author!==0 && country!==0){
            const filterCountry = booksCopy.filter(g => g.CountryId===country)
            const filterAuthor = filterCountry.filter(g => g.AuthorId===author)
            const filterGenre = filterAuthor.filter(g => g.GenreId===genre)
            dispatch(booksInfo(filterGenre))
        }
    }
    const restart = () =>{
        setAuthor(0)
        setCountry(0)
        setGenre(0)
        // setPredeterminado(false)
        const filterCountry = booksCopy.filter(g => g.CountryId===17)
        const filterAuthor = filterCountry.filter(g => g.GenreId===29)
        dispatch(booksInfo(filterAuthor))
    }

    return (
        <div className="container_books">
            <br />

            <div>
            <div className="grid3">

                <div className="col">
                {/* Imagen  */}
                    <Link to="/" className="navbar-brand">
                        <img
                            src={logo}
                            width="250"
                            height="70"
                            alt='prolem'
                            />
                    </Link>
                </div>

                {/* {(language===1 || languageChange===1)&&
                    
                    <div className="col">
                        <h3 id="titulo12">Selecciona el idioma</h3>
                        <div className="form-floating">
                            <select name='select'  
                            className="form-control"
                            onChange={(e)=>changeLanguage(e)}>
                                <option value='0'> ---- 
                                </option>
                                {languages?.map((language, index)=> 
                                <option value={language.id} key={index}>{language.name}</option>)} 
                                {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)} 
                            </select>
                            <label htmlFor="floatingInput">Idioma</label>
                        </div>
                    </div>
                } */}

                {/* {(language===2 || languageChange===2) &&
                
                <div className="col">
                    <h3 id="titulo12">Select the language</h3> <div className="form-floating" id="selectidioma">
                        <select name='select' 
                        className="form-control"
                        onChange={(e)=>changeLanguage(e)}>
                            <option value='0'> ---- </option>
                            {languages?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)} 
                        </select>
                        <label htmlFor="floatingInput">Language</label>
                    </div>
                </div>} */}

                {/* {(language===3 || languageChange===3)&&
                
                <div className="col">
                    <h3 id="titulo12">Sélection del'idiome </h3>
                    <div className="form-floating" id="selectidioma">
                        <select name='select' 
                        className="form-control"
                        onChange={(e)=>changeLanguage(e)}>
                            <option value='0'> ---- </option>
                            {languages?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)} 
                        </select>
                        <label htmlFor="floatingInput">Idiome</label>
                    </div>
                </div>} */}

                {/* {(language===4 || languageChange===4)&&
                
                <div className="col">
                    <h3 id="titulo12">Seleciona o idioma</h3>
                    <div className="form-floating" id="selectidioma">
                        <select name='select' 
                        className="form-control"
                        onChange={(e)=>changeLanguage(e)}>
                            <option value='0'> ---- </option>
                            {languages?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)} 
                        </select>
                        <label htmlFor="floatingInput">Idioma</label>
                    </div>
                </div>} */}

                {/* {(language===5 || languageChange===5) &&
                
                <div className="col">
                    <h3 id="titulo12">Selezionare la lingua</h3>
                    <div className="form-floating" id="selectidioma">
                        <select name='select' 
                        className="form-control"
                        onChange={(e)=>changeLanguage(e)}>
                            <option value='0'> ---- </option>
                            {languages?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)} 
                        </select>
                        <label htmlFor="floatingInput">Lingua</label>
                    </div>
                </div>} */}
            </div>
            </div>

            {userInfo.isSuscribed? <></> : <div className="container-fluid"  id="perfilForm">
                        <div className='perfil-usuario-footer'
                            id="containerPerfil">
                            <div className='lista-datos' >
                                <p>Si deseas disfrutar de los mas de diez mil libros que se encuentran en nuestro sistema no te olvides registrarte por una modica suma anual</p>
                            </div>
                            {
                                userInfo? <Link id="boton_loggin" className="btn btn-primary btn-lg" to="/paid" type="submit">Centro de pagos</Link>
                                : <Link id="boton_loggin" className="btn btn-primary btn-lg" to="/SignUp" type="submit">Registrate</Link>
                            }
                        </div>
            </div>}

            <div>
                {language===1 &&<h3 id="titulo1">Te recomendamos leer</h3>}
                {language===2 &&<h3 id="titulo1">We recommend you read</h3>}
                {language===3 &&<h3 id="titulo1">Nous vous recommandons de lire</h3>}
                {language===4 &&<h3 id="titulo1">Recomendamos que você leia</h3>}
                {language===5 &&<h3 id="titulo1">Ti consigliamo di leggere</h3>}
                {recommended.length>0? <div className="AppC">
                    <Carousel breakPoints={breakPoints} >
                    {recommended.map(link =>
                        <div className='recommend tamano-2'>
                            <Link to={`/viewWord/${link.name}`}>
                                <figure>

                                    <img src={`https://lh3.google.com/u/0/d/${link.image}`} alt={link.name} />
                                    <figcaption>
                                        <p className='mostrar'>{link.name}</p>
                                    </figcaption>
                                    <p className='mostrar'><string>{link.name}</string></p>
                                </figure>
                                {/* <iframe src={`https://drive.google.com/file/d/${link.URL}/preview`} title={link.name} width="170" height="200" seamless="seamless"></iframe> */}
                            </Link>
                            {/* <p className='mostrar'>{link.name}</p> */}
                        </div>)}
                    </Carousel>
                </div>:<></>}
            </div>
            <br />
            

            {busquedaAvanzada?<div>

                <div>
                    {(language===1 || languageChange===1)&&
                    
                    <div>

                        <h2 id="titulo1">BUSQUEDA AVANZADA</h2>
                        <p id="titulo5">Utiliza uno o más criterios de búsqueda</p>
                        <br />
                        <br />
                        <div className="grid1">
                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4">País</label>
                            <select name='select' 
                            className="form-control"
                            value={country}
                            onChange={(e)=>setCountry(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {countries?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                                {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                            </select>
                        </div>

                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4">Autor</label>
                            <select name='select' 
                            className="form-control"
                            value={author}
                            onChange={(e)=>setAuthor(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {authors?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                                {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                            </select>
                        </div>

                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4">Género</label>
                            <select name='select' 
                            className="form-control"
                            value={genre}
                            onChange={(e)=>setGenre(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {genres?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                                {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                            </select>
                        </div>
            
                        <div className="col">
                        <button  className="btn btn-success" id="botones"  to="/pageFilters"
                            onClick={send}>Aplicar Filtros</button>
                            <br />
                            <br />
                        <button className="btn btn-success" id="botones"  to="/pageFilters"
                            onClick={restart}>Restaurar Filtros</button>
                        </div>
                        </div>

                    </div>}
                </div>

                <div>
                    {(language===2 || languageChange===2) &&
                    
                    
                    <div>

                        <h3 id="titulo1">ADVANCED SEARCH</h3>
                        <p id="titulo5">Use one or more search criteria</p>
                        <br />
                        <br />
                        <div className="grid1">
                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4">Country</label>
                            <select name='select' 
                            className="form-control"
                            value={country}
                            onChange={(e)=>setCountry(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {countries?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                                {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="floatingInput" id="titulo4">Author</label>
                            <select name='select' 
                            className="form-control"
                            value={author}
                            onChange={(e)=>setAuthor(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {authors?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                                {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                            </select>
                        </div>

                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4">Genre</label>
                            <select name='select' 
                            className="form-control"
                            value={genre}
                            onChange={(e)=>setGenre(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {genres?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                                {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                            </select>
                        </div>

                        <div className="col" id="selectores">
                        <button className="btn btn-success" id="botones" to="/pageFilters"
                            onClick={send}>Apply Filters</button>
                            <br />
                            <br />
                        <button className="btn btn-success" id="botones" to="/pageFilters"
                            onClick={restart}>Restart Filters</button>
                        </div>    

                        </div>
                    </div>}
                </div>

                <div>
                    {(language===3 || languageChange===3) &&
                    
                    <div>

                        <h3 id="titulo1">RECHERCHE AVANCÉE</h3>
                        <p id="titulo5">Utiliser un ou plusieurs critères de recherche</p>
                        <br />
                        <br />
                        <div className="grid1">
                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4">Pays</label>
                            <select name='select' 
                            className="form-control"
                            value={country}
                            onChange={(e)=>setCountry(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {countries?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                                {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                            </select>
                        </div>
                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4">Auteur</label>
                            <select name='select' 
                            className="form-control"
                            value={author}
                            onChange={(e)=>setAuthor(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {authors?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                                {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                            </select>
                        </div>
                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4">Genre</label>
                            <select name='select' 
                            className="form-control"
                            value={genre}
                            onChange={(e)=>setGenre(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {genres?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                                {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                            </select>
                        </div>

                        <div className="col">
                        <button className="btn btn-success" id="botones" to="/pageFilters"
                            onClick={send}>Appliquer des filtres</button>
                            <br />
                            <br />
                        <button className="btn btn-success" id="botones" to="/pageFilters"
                            onClick={restart}>Redémarrer les filtres</button>
                        </div>    

                        </div>  
                    </div>}
                </div>

                <div>
                    {(language===4 || languageChange===4) &&   
                    <div>
                        <h3 id="titulo1">PESQUISA AVANÇADA</h3>
                        <p id="titulo5">Use um ou mais critérios de pesquisa</p>
                        <br />
                        <br />
                        <div className="grid1">
                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4"> País</label>
                            <select name='select' 
                            className="form-control"
                            value={country}
                            onChange={(e)=>setCountry(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {countries?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            </select>
                        </div>
                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4">Autor</label>
                            <select name='select' 
                            className="form-control"
                            value={author}
                            onChange={(e)=>setAuthor(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {authors?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            </select>
                        </div>
                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4">Gênero</label>
                            <select name='select' 
                            className="form-control"
                            value={genre}
                            onChange={(e)=>setGenre(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {genres?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            </select>
                        </div>

                        <div className="col">
                        <button className="btn btn-success" id="botones" to="/pageFilters"
                            onClick={send}>Aplicar Filtros</button>
                            <br />
                            <br />
                        <button className="btn btn-success" id="botones" to="/pageFilters"
                            onClick={restart}>Reiniciar Filtros</button>
                        </div>    

                        </div>    
                    </div>}
                </div>
                
                <div>
                    {(language===5 || languageChange===5) &&
                    
                    <div>
                        <h3 id="titulo1">RICERCA AVANZATA</h3>
                        <p id="titulo5">Utilizza uno o più criteri di ricerca</p>
                        <br />
                        <br />
                        <div className="grid1">
                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4">Paese</label>
                            <select name='select' 
                            className="form-control"
                            value={country}
                            onChange={(e)=>setCountry(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {countries?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            </select>
                        </div>

                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4">Autore</label>
                            <select name='select' 
                            className="form-control"
                            value={author}
                            onChange={(e)=>setAuthor(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {authors?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            </select>
                        </div>

                        <div className="col" id="selectores">
                            <label htmlFor="floatingInput" id="titulo4"> Genere</label>
                            <select name='select' 
                            className="form-control"
                            value={genre}
                            onChange={(e)=>setGenre(Number(e.target.value))}>
                                <option value='0'> ---- </option>
                                {genres?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            </select>
                        </div>

                        <div className="col">
                        <button className="btn btn-success" id="botones" to="/pageFilters"
                            onClick={send}>Applica filtri</button>
                            <br />
                            <br />
                        <button className="btn btn-success" id="botones" to="/pageFilters"
                            onClick={restart}>Riavvia i filtri</button>
                        </div>
                        </div>
                    </div>}
                </div>
            </div>:<></>}

            <div className='row justify-content-center '>
                {isloading===true? <ProgressBar
                    height="250"
                    width="250"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperclassName="progress-bar-wrapper"
                    borderColor = '#F4442E'
                    barColor = '#51E5FF'
                />:<></>}
            </div>

            {(booksCatalogo?.length>0 && isloading===false)?<DataTableFilter />:<></>}
            

            {catalogo?
            <div >
                <div>
                    {(language===1 || languageChange===1)&&
                    
                    <div>

                        <h2 id="titulo1">Catálogo</h2>
                        <p id="titulo5">Para organizar por orden alfabético dar clic en el título de la tabla de la columna que desee ver en orden</p>
                        <br />
                        <br />

                    </div>}
                </div>

                <div>
                    {(language===2 || languageChange===2) &&
                    
                    
                    <div>

                        <h3 id="titulo1">Catalogue</h3>
                        <p id="titulo5">Use one or more search criteria</p>
                        <br />
                        <br />

                    </div>}
                </div>

                <div>
                    {(language===3 || languageChange===3) &&
                    
                    <div>

                        <h3 id="titulo1">Catalogue</h3>
                        <p id="titulo5">Utiliser un ou plusieurs critères de recherche</p>
                        <br />
                        <br />

                    </div>}
                </div>

                <div>
                    {(language===4 || languageChange===4) &&   
                    <div>
                        <h3 id="titulo1">Catálogo</h3>
                        <p id="titulo5">Use um ou mais critérios de pesquisa</p>
                        <br />
                        <br />

                    </div>}
                </div>
                
                <div>
                    {(language===5 || languageChange===5) &&
                    
                    <div>
                        <h3 id="titulo1">Catalogare</h3>
                        <p id="titulo5">Utilizza uno o più criteri di ricerca</p>
                        <br />
                        <br />

                    </div>}
                </div>
            
                <div>
                    {(booksCatalogo?.length>0 && isloading===false)?<DataTable />:<></>}
                </div>
            </div>:<></>}
        </div>
    )
}