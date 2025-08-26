import Modal1 from '../../components/Modal1';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";

import logo from '../../assets/logoleo1.png'
import logo1 from '../../assets/logoleo2.png'
import logo2 from '../../assets/logoleo3.png'
import logo3 from '../../assets/logoleo4.png'
import logo4 from '../../assets/logoleo5.png'




import { Link, NavLink } from "react-router-dom";
import "./Home.css"

import excel from './CATALOGO BIBLIOMOBIL.xlsx'

import React, { useEffect, useState } from 'react'
import { getCategories, getCountries} from '../../services/registerService';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesAction } from '../../stateManagement/actions/categoriesAction';
// import { getOferts } from '../../services/ofertsCategoriesServices';
import { getOfertsByCity } from '../../services/ofertsCategoriesServices';
import { ofertsAction, ofertsActionByCity } from '../../stateManagement/actions/ofertsCategoriesActions';
import { getCountry } from '../../stateManagement/actions/getCities';
import { getAuthors, getCountriesBooks, getGenresBooks } from "../../services/dataByLanguage";
import { booksAuthors, booksCountries, booksGenres } from "../../stateManagement/actions/stateActions";
import { getBooks } from "../../services/bookServices";
import { recomendedAction } from "../../stateManagement/actions/recommendedAction";
import { allBooks, allBooksEnglish, allBooksFranch, allBooksItalian, allBooksPortugues, allBooksSpanish, booksCatalogoAction, booksCopyAction, booksInfo } from "../../stateManagement/actions/booksInfoAction";
import { mercadoPagoBack } from '../../services/ventaService';
import { changeLanguageAction } from '../../stateManagement/actions/changeLanguageAction';


const languages =[
  {
      name:"ES", 
      id: 1
  }, 
  {
      name:"EN",
      id:2
  }, 
  {
      name:"FR",
      id:3
  },
  {
      name:"PT",
      id:4
  },
  {
      name:"IT",
      id:5
  }
]

export default function Home() {

  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);

  const languageChange = useSelector(state=> state.changeLanguageReducer?.id)
  const [language, setLanguage] = useState("2")
  const [isloading, setIsLoading] = useState(false)


  const dispatch = useDispatch()
  // const id= useSelector(state=>state.IDCityReducer?.id)

  const userInfo = useSelector(state=>state.infoUserReducer.user)
  // const [demo, setDemo] = useState(true)
  let demo = true

  const booksSpanish = useSelector(state=> state.booksInfoReducer?.allBooksSpanish)
  const booksEnglish = useSelector(state=> state.booksInfoReducer?.allBooksEnglish)
  const booksFranch = useSelector(state=> state.booksInfoReducer?.allBooksFranch)
  const booksItalian = useSelector(state=> state.booksInfoReducer?.allBooksItalian)
  const booksPortugues = useSelector(state=> state.booksInfoReducer?.allBooksPortugues)

  if(userInfo.isSuscribed){
    demo = false
  }


  async function countries (){
      // const [categories, ofertas,country, authors, countryBooks, genresBooks, books] = await Promise.all([
      const [authors, countryBooks, genresBooks, books, booksEnglish, booksFranch, booksItalian, booksPortugues] = await Promise.all([
          // getCategories(),
          // getOfertsByCity(id),
          getAuthors(languageChange),
          getCountriesBooks(languageChange),
          getGenresBooks(languageChange),
          getBooks(languageChange), ///como esta en english, por el valor 2, se deja entendido desde ahora que es spanish es english y solo books es english
          getBooks(2),
          getBooks(3),
          getBooks(4),
          getBooks(5),
          mercadoPagoBack()
      ])
      dispatch(booksGenres(genresBooks))
      dispatch(booksCountries(countryBooks))
      dispatch(booksAuthors(authors))
      dispatch(allBooks(books))
      // dispatch(categoriesAction(categories))
      // dispatch(ofertsActionByCity(ofertas))
      // country.unshift({id:46, name:'Colombia', code: 57})
      // dispatch(getCountry(country))
      if(books?.length>0){
        if(demo){
            const spanish = books.slice(0,100)
            dispatch(allBooksSpanish(spanish))
            const english = booksEnglish.slice(0,100)
            dispatch(allBooksEnglish(english))
            const franch = booksFranch.slice(0,100)
            dispatch(allBooksFranch(franch))
            const italian = booksItalian.slice(0,100)
            dispatch(allBooksItalian(italian))
            const portuguese = booksPortugues.slice(0,100)
            dispatch(allBooksPortugues(portuguese))
            const image = books.filter(r => r.image!=="")
            dispatch(recomendedAction(image))
            books.sort((x, y) => x.name.localeCompare(y.name))
            const demoBooks = books.slice(0,100)
            // const recommend = demoBooks.filter(r => r.isFree===true)
            const filterCountry = demoBooks.filter(g => g.CountryId===17)
            const filterAuthor = filterCountry.filter(g => g.GenreId===15)
            // dispatch(recomendedAction(recommend))
            dispatch(booksInfo(filterAuthor))
            dispatch(booksCatalogoAction(demoBooks))
            dispatch(booksCopyAction(demoBooks))
        }
        else {
            const image = books.filter(r => r.image!=="")
            dispatch(recomendedAction(image))
            const filterCountry = books.filter(g => g.CountryId===17)
            const filterAuthor = filterCountry.filter(g => g.GenreId===29)
            // const recommend = books.filter(r => r.isFree===true)
            // dispatch(recomendedAction(recommend))
            dispatch(allBooksSpanish(books))
            dispatch(allBooksEnglish(booksEnglish))
            dispatch(allBooksFranch(booksFranch))
            dispatch(allBooksItalian(booksItalian))
            dispatch(allBooksPortugues(booksPortugues))
            dispatch(booksInfo(filterAuthor))
            dispatch(booksCatalogoAction(books))
            dispatch(booksCopyAction(books))
        }
    }
  }

  const [fantasma, setFantasma] = useState(0)
  useEffect(()=>{}, [languageChange])

  const changeLanguage = async (e)=>{
    setFantasma(fantasma+1)
    // console.log(e.target.value);
    setIsLoading(true)
    setLanguage(e.target.value)
    dispatch(changeLanguageAction(Number(e.target.value)))
    if(Number(e.target.value)===1){
      if(demo){
            const image = booksSpanish.filter(r => r.image!=="")
            dispatch(recomendedAction(image))
            booksSpanish.sort((x, y) => x.name.localeCompare(y.name))
            const demoBooks = booksSpanish.slice(0,100)
            setIsLoading(false)
            const demoBooks1 = demoBooks.slice(0,40)
            dispatch(booksInfo(demoBooks1))
            dispatch(booksCatalogoAction(demoBooks))
            dispatch(booksCopyAction(demoBooks))
        }
        else {
            const image = booksSpanish.filter(r => r.image!=="")
            dispatch(recomendedAction(image))
            setIsLoading(false)
            const demoBooks = booksSpanish.slice(0,40)
            dispatch(booksInfo(demoBooks))
            dispatch(booksCatalogoAction(booksSpanish))
            dispatch(booksCopyAction(booksSpanish))
        }
    }
    if(Number(e.target.value)===2){
      if(demo){
            const image = booksEnglish.filter(r => r.image!=="")
            dispatch(recomendedAction(image))
            booksEnglish.sort((x, y) => x.name.localeCompare(y.name))
            const demoBooks = booksEnglish.slice(0,100)
            setIsLoading(false)
            const demoBooks1 = demoBooks.slice(0,40)
            dispatch(booksInfo(demoBooks1))
            dispatch(booksCatalogoAction(demoBooks))
            dispatch(booksCopyAction(demoBooks))
        }
        else {
            const image = booksEnglish.filter(r => r.image!=="")
            dispatch(recomendedAction(image))
            setIsLoading(false)
            const demoBooks = booksEnglish.slice(0,40)
            dispatch(booksInfo(demoBooks))
            dispatch(booksCatalogoAction(booksEnglish))
            dispatch(booksCopyAction(booksEnglish))
        }
    }
    if(Number(e.target.value)===3){
      if(demo){
            const image = booksFranch.filter(r => r.image!=="")
            dispatch(recomendedAction(image))
            booksFranch.sort((x, y) => x.name.localeCompare(y.name))
            const demoBooks = booksFranch.slice(0,100)
            setIsLoading(false)
            const demoBooks1 = demoBooks.slice(0,40)
            dispatch(booksInfo(demoBooks1))
            dispatch(booksCatalogoAction(demoBooks))
            dispatch(booksCopyAction(demoBooks))
        }
        else {
            const image = booksFranch.filter(r => r.image!=="")
            dispatch(recomendedAction(image))
            setIsLoading(false)
            const demoBooks = booksFranch.slice(0,40)
            dispatch(booksInfo(demoBooks))
            dispatch(booksCatalogoAction(booksFranch))
            dispatch(booksCopyAction(booksFranch))
        }
    }
    if(Number(e.target.value)===4){
      if(demo){
            const image = booksItalian.filter(r => r.image!=="")
            dispatch(recomendedAction(image))
            booksItalian.sort((x, y) => x.name.localeCompare(y.name))
            const demoBooks = booksItalian.slice(0,100)
            setIsLoading(false)
            const demoBooks1 = demoBooks.slice(0,40)
            dispatch(booksInfo(demoBooks1))
            dispatch(booksCatalogoAction(demoBooks))
            dispatch(booksCopyAction(demoBooks))
        }
        else {
            const image = booksItalian.filter(r => r.image!=="")
            dispatch(recomendedAction(image))
            setIsLoading(false)
            const demoBooks = booksItalian.slice(0,40)
            dispatch(booksInfo(demoBooks))
            dispatch(booksCatalogoAction(booksItalian))
            dispatch(booksCopyAction(booksItalian))
        }
    }
    if(Number(e.target.value)===5){
      if(demo){
            const image = booksPortugues.filter(r => r.image!=="")
            dispatch(recomendedAction(image))
            booksPortugues.sort((x, y) => x.name.localeCompare(y.name))
            const demoBooks = booksPortugues.slice(0,100)
            setIsLoading(false)
            const demoBooks1 = demoBooks.slice(0,40)
            dispatch(booksInfo(demoBooks1))
            dispatch(booksCatalogoAction(demoBooks))
            dispatch(booksCopyAction(demoBooks))
        }
        else {
            const image = booksPortugues.filter(r => r.image!=="")
            dispatch(recomendedAction(image))
            setIsLoading(false)
            const demoBooks = booksPortugues.slice(0,40)
            dispatch(booksInfo(demoBooks))
            dispatch(booksCatalogoAction(booksPortugues))
            dispatch(booksCopyAction(booksPortugues))
        }
    }
    // const books = await getBooks(Number(e.target.value))
    // if(books?.length>0){
    //     if(demo){
    //         const image = books.filter(r => r.image!=="")
    //         dispatch(recomendedAction(image))
    //         books.sort((x, y) => x.name.localeCompare(y.name))
    //         const demoBooks = books.slice(0,100)
    //         // const recommend = demoBooks.filter(r => r.isFree===true)
    //         // dispatch(recomendedAction(recommend))
    //         setIsLoading(false)
    //         // dispatch(booksInfo(demoBooks))
    //         const demoBooks1 = demoBooks.slice(0,40)
    //         dispatch(booksInfo(demoBooks1))
    //         dispatch(booksCatalogoAction(demoBooks))
    //         dispatch(booksCopyAction(demoBooks))
    //         // dispatch(recomendedAction(recommend))
    //     }
    //     else {
    //         const image = books.filter(r => r.image!=="")
    //         dispatch(recomendedAction(image))
    //         setIsLoading(false)
    //         // dispatch(booksInfo(books))
    //         // const recommend = books.filter(r => r.isFree===true)
    //         const demoBooks = books.slice(0,40)
    //         dispatch(booksInfo(demoBooks))
    //         dispatch(booksCatalogoAction(books))
    //         dispatch(booksCopyAction(books))
    //         // dispatch(recomendedAction(recommend))
    //     }
    // }
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

  useEffect(()=> {// eslint-disable-next-line react-hooks/exhaustive-deps
      countries();}, [])
    
    return (

      <div className="container_home" id='paginaprincipal'>
      <div>
      <br />

      <div className="container-fluid">
        
        <div className="row">
          <div className="col-lg-6 col-md-6">
          <div>
                  {(language===1 || languageChange===1)&&
                  <div className="container-fluid" >
                    <Link to="/" className="container-fluid">
                  <img
                  align="left"
                  src={logo}
                  width="340"
                  height="600"
                  className="img-fluid d-block mx-auto"
                  alt='logo'
                 />
                 </Link>
                 <br />
        
                  </div>}

                  {(language===2 || languageChange===2)&&
                  <div className="container-fluid" >
                 <Link to="/" className="container-fluid">
                  <img
                  align="left"
                  src={logo1}
                  width="340"
                  height="600"
                  className="img-fluid d-block mx-auto"
                  alt='logo'
                 />
                 </Link>
                 <br />
                  </div>}

                  {(language===3 || languageChange===3)&&
                  <div className="container-fluid" >
                  <Link to="/" className="container-fluid">
                  <img
                  align="left"
                  src={logo2}
                  width="340"
                  height="600"
                  className="img-fluid d-block mx-auto"
                  alt='logo'
                 />
                 </Link>
                 <br />
                  </div>}

                  {(language===4 || languageChange===4)&&
                  <div className="container-fluid" >
                <Link to="/" className="container-fluid">
                  <img
                  align="left"
                  src={logo3}
                  width="340"
                  height="600"
                  className="img-fluid d-block mx-auto"
                  alt='logo'
                 />
                 </Link>
                 <br />
                  </div>}

                  {(language===5 || languageChange===5)&&
                  <div className="container-fluid" >
                  <Link to="/" className="container-fluid">
                  <img
                  align="left"
                  src={logo4}
                  width="340"
                  height="600"
                  className="img-fluid d-block mx-auto"
                  alt='logo'
                 />
                 </Link>
                 <br />
                  </div>}

                  </div>
          </div>


          <div className="col-lg-6 col-md-6">
          <div className="social-links mt-4" >

          <div className="row">
                <div className="col">
                {(language===1 || languageChange===1)&&
                    
                    <div className="col">
                        <div className="form-floating">
                            <select name='select'
                            className="form-control" id="inputlanguage"
                            onChange={(e)=>changeLanguage(e)}>
                                <option value='0'> ---- 
                                <img
              align="left"
              src={logo}
              width="340"
              height="600"
              className="img-fluid d-block mx-auto"
              alt='logo'
              />
                                </option>
                                {languages?.map((language, index)=> 
                                <option value={language.id} key={index}>{language.name}</option>)} 
                                {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                            </select>
                            <label htmlFor="floatingInput">language</label>
                        </div>
                    </div>
                }

                {(language===2 || languageChange===2) &&
                
                <div className="col">
                    <div className="form-floating">
                        <select name='select'  
                        className="form-control" id="inputlanguage"
                        onChange={(e)=>changeLanguage(e)}>
                            <option value='0'> ---- </option>
                            {languages?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                        </select>
                        <label htmlFor="floatingInput">language</label>
                    </div>
                </div>}

                {(language===3 || languageChange===3)&&
                
                <div className="col">
                    <div className="form-floating" id="selectlanguage">
                        <select name='select'  id="inputlanguage"
                        className="form-control"
                        onChange={(e)=>changeLanguage(e)}>
                            <option value='0'> ---- </option>
                            {languages?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                        </select>
                        <label htmlFor="floatingInput">languagee</label>
                    </div>
                </div>}

                {(language===4 || languageChange===4)&&
                
                <div className="col">
                    <div className="form-floating" id="selectlanguage">
                        <select name='select' id="inputlanguage"
                        className="form-control"
                        onChange={(e)=>changeLanguage(e)}>
                            <option value='0'> ---- </option>
                            {languages?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                        </select>
                        <label htmlFor="floatingInput">language</label>
                    </div>
                </div>}

                {(language===5 || languageChange===5) &&
                
                <div className="col">
                    <div className="form-floating" id="selectlanguage">
                        <select name='select'  id="inputlanguage"
                        className="form-control"
                        onChange={(e)=>changeLanguage(e)}>
                            <option value='0'> ---- </option>
                            {languages?.map((language, index)=> <option value={language.id} key={index}>{language.name}</option>)} 
                            {/* {languages?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}  */}
                        </select>
                        <label htmlFor="floatingInput">Lingua</label>
                    </div>
                </div>}
                </div>

                <div className="col" align="center">
                <Link 
                  onClick={()=> cambiarEstadoModal1(!estadoModal1)}
                >
                  <svg  id="color"
                  xmlns="http://www.w3.org/2000/svg" 
                  width="35" height="35" fill="currentColor" className="bi bi-envelope-fill" 
                  viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                </Link>
                <p>Contacto</p>
                </div>

                <Modal1 
                  estado={estadoModal1}
                  cambiarEstado={cambiarEstadoModal1}
                  >

                  <div>
                  {(language===1 || languageChange===1)&&
                  <div className="container-fluid" >
                  <h4 align="right">Contacto</h4>
                  <p align="right">Avenida Jiménez 9-43 Oficina 206 <br/>
                  Edificio Federación <br/>
                  Bogotá, Colombia <br/>

                  Télefono: +57 319 529 7287  +57 300 4727644 <br />
                  Email: contacto@clubleo.net</p>
                  <h4 align="right">Redes sociales</h4>

                  <p align="right">
                  Conoce a CLUBLEO, mantente actualizado <br />
                  de las oportunidades en todo el mundo.
                  </p>
        
                  </div>}


                  {(language===2 || languageChange===2)&&
                  <div className="container-fluid" >
                  <h4 align="right">Contact</h4>
                  <p align="right">Avenue Jiménez 9-43 Office 206 <br/>
                  Federation <br/> Building
                  Bogota, Colombia <br/>

P                 hone: 6014327879 +57 300 4727644 <br />
                  Email: contacto@clubleo.net</p>
                  <h4 align="right">Social Media</h4>

                  <p align="right">
                  Meet CLUBLEO, stay updated <br />
                  of the opportunities
                  </p>
                  </div>}


                  {(language===3 || languageChange===3)&&
                  <div className="container-fluid" >
                  <h4 align="right">Contact</h4>
                  <p align="right"> Avenue Jiménez 9-43 Bureau 206 <br/>
                  Édifice de la Fédération <br/>
                  Bogota, Colombie <br/>

                  Téléphone : 6014327879 +57 300 4727644 <br />
                  Courriel : contacto@clubleo.net</p>
                  <h4 align="right">Médias sociaux</h4>

                  <p align="right">
                  Rencontrez CLUBLEO, restez à jour <br />
                  des opportunités
                  </p>
                  </div>}


                  {(language===4 || languageChange===4)&&
                  <div className="container-fluid" >
                <h4 align="right">Contato</h4>
                  <p align="direita">Avenida Jiménez 9-43 Escritório 206 <br/>
                  Edifício da Federação <br/>
                  Bogotá, Colômbia <br/>

                  Fone: 6014327879 +57 300 4727644 <br />
                  E-mail: contacto@clubleo.net</p>
                  <h4 align="direita">Mídias Sociais</h4>

                  <p align="direita">
                  Conheça o CLUBLEO, fique atualizado <br/>
                  das oportunidades
                  </p>
                  </div>}

                  {(language===5 || languageChange===5)&&
                  <div className="container-fluid" >
                  <h4 align="right">Contatto</h4>
                  <p align="right">Avenida Jiménez 9-43 Ufficio 206 <br/>
                  Edificio della Federazione <br/>
                  Bogotà, Colombia <br/>

                  Telefono: 6014327879 +57 300 4727644 <br />
                  Indirizzo e-mail: contacto@clubleo.net</p>
                  <h4 align="right">Social Media</h4>

                  <p align="right">
                  Incontra CLUBLEO, rimani aggiornato <br />
                  delle opportunità
                  </p>
                  </div>}




                  </div>

                 


                  <br />

                  <div className="columnnas">
                    <div>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </Link>
                  </div>
                  &nbsp;&nbsp;

                  <div>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </Link>
                  </div>
                  &nbsp;&nbsp;

                  <div>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </Link>
                  </div>
                  &nbsp;&nbsp;

                  <div>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </Link>
                  </div>
                  &nbsp;&nbsp;

                  <div>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-tiktok"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                    </svg>
                  </Link>
                  </div>
                  &nbsp;&nbsp;
                  
                  <div>
                  <Link to="/">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="30" 
                  height="45" 
                  fill="currentColor" 
                  className="bi bi-youtube" 
                  viewBox="0 0 16 16"
                  >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg>
                  </Link>
                  </div>
                  </div>
                </Modal1>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <div className="col" align="center">
                {userInfo?<></> : (<Link to="/SignIn">
                <svg id="color"
                xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" 
                className="bi bi-lock" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                </svg>
                </Link>)}
                {userInfo?<></> :<p>Ingresar</p>}
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                
                <div className="col" align="center">
                <a href={excel} download>
                <svg id="color"
                xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" 
                className="bi bi-file-earmark-fill" viewBox="0 0 16 16">
                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"/>
                </svg>
                </a>
                <p>Cátalogo</p>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;




                <div className="col" align="center">
                <Link 
                  onClick={()=> cambiarEstadoModal2(!estadoModal2)}
                >
                <svg id="color"
                xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" 
                className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </Link>
                <p>Legal</p>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Modal1 
                  estado={estadoModal2}
                  cambiarEstado={cambiarEstadoModal2}
                >


                  {(language===1 || languageChange===1)&&
                  <div className="container-fluid" >
                   <h4 align="right">Politica y Seguridad de Usuarios</h4>
                <ul align="right"> 
                  <li align="right">
                  •  <Link to="/Privacydata"><u id="titteblue">Política Tratamiento de datos</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/Terms" ><u id="titteblue">Términos y Condiciones</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/Regulation" ><u id="titteblue">Reglamento general Club Leo</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/RegulationsPlanFriends"><u id="titteblue">Reglamento plan amigos Leo</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/ReglamentoEscritores"><u id="titteblue">Reglamento Escritores Leo</u></Link>
                  </li>

                </ul>
                <br /> 
                  </div>}

                  {(language===2 || languageChange===2)&&
                  <div className="container-fluid" >
                   <h4 align="right">User and security policy</h4>
                <ul align="right"> 
                  <li align="right">
                  •  <Link to="/Privacydata"><u id="titteblue">Data processing</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/Terms" ><u id="titteblue">General terms and conditions</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/Regulation" ><u id="titteblue">General Terms and Conditions</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/RegulationsPlanFriends"><u id="titteblue">Plan Amigos Rules and Regulations</u></Link>
                  </li>

                  </ul>
                  <br /> 
                  </div>}





                  {(language===3 || languageChange===3)&&
                  <div className="container-fluid" >
                   <h4 align="right">Politique de l'utilisateur et sécurité</h4>
                <ul align="right"> 
                  <li align="right">
                  •  <Link to="/Privacydata"><u id="titteblue">Traitement des données</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/Terms" ><u id="titteblue">Conditions générales</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/Regulation" ><u id="titteblue">Règles générales</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/RegulationsPlanFriends"><u id="titteblue">Règlement du plan d'amis</u></Link>
                  </li>

                </ul>
                <br /> 
                  </div>}


                  

                  {(language===4 || languageChange===4)&&
                  <div className="container-fluid" >
                   <h4 align="right">Política de utilizador e segurança</h4>
                <ul align="right"> 
                  <li align="right">
                  •  <Link to="/Privacydata"><u id="titteblue">Processamento de dados</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/Terms" ><u id="titteblue">Termos e condições</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/Regulation" ><u id="titteblue">Regras gerais</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/RegulationsPlanFriends"><u id="titteblue">Regulamento do Plano de Amigos</u></Link>
                  </li>

                </ul>
                <br /> 
                  </div>}


                  
                  {(language===5 || languageChange===5)&&
                  <div className="container-fluid" >
                   <h4 align="right">Politica degli utenti e sicurezza</h4>
                  <ul align="right"> 
                  <li align="right">
                  •  <Link to="/Privacydata"><u id="titteblue">Trattamento dei dati</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/Terms" ><u id="titteblue">Termini e condizioni</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/Regulation" ><u id="titteblue">Regolamento generale</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/RegulationsPlanFriends"><u id="titteblue">Regolamento del Piano Amici
                  </u></Link>
                  </li>

                </ul>
                <br /> 
                  </div>}
               
              </Modal1>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            </div>
            </div>
          </div>
               
    </div >
  
    <br />
    <br />
    
    


    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        
      {(language===1 || languageChange===1)&&
        <div className="container-fluid" >
          <NavDropdown title="Inglés" id="navbarScrollingDropdown">
            <NavDropdown.Item as={NavLink} to="/organizedBooks/2/1">Título</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/2/2">País</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/2/3">Autor/Escritor</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/2/4">Género literario</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Español" id="navbarScrollingDropdown">
            <NavDropdown.Item as={NavLink} to="/organizedBooks/1/1">Título</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/1/2">País</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/1/3">Autor/Escritor</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/1/4">Género literario</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Portugués" id="navbarScrollingDropdown">
            <NavDropdown.Item as={NavLink} to="/organizedBooks/5/1">Título</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/5/2">País</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/5/3">Autor/Escritor</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/5/4">Género literario</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Francés" id="navbarScrollingDropdown">
            <NavDropdown.Item as={NavLink} to="/organizedBooks/3/1">Título</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/3/2">País</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/3/3">Autor/Escritor</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/3/4">Género literario</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Italiano" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/4/1">Título</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/4/2">País</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/4/3">Autor/Escritor</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/4/4">Género literario</NavDropdown.Item>
              </NavDropdown>
           <Nav.Link href="https://escritoresleo.com/" target="_blank">Escritores LEO</Nav.Link>
            <Nav.Link href="https://www.vamosaleer.co/" target="_blank">Vamos a leer</Nav.Link> ////// aquí puede ver el ejemplo de como se abre otra pestaña con href y target="_blank"

            {userInfo.isSuscribed? <Link to="/books" >
           Biblioteca 
          </Link> :<Link to="/books">
          Demo Biblioteca 
          </Link>}
          <Nav.Link href="#action2">Videos</Nav.Link>
           </div>}




           {(language===2 || languageChange===2)&&
        <div className="container-fluid" >
  <NavDropdown title="English" id="navbarScrollingDropdown">
            <NavDropdown.Item as={NavLink} to="/organizedBooks/2/1">Title</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/2/2">Country</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/2/3">Author/Writer</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/2/4">Literary genre</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Spanish" id="navbarScrollingDropdown">
            <NavDropdown.Item as={NavLink} to="/organizedBooks/1/1">Title</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/1/2">Country</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/1/3">Author/Writer</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/1/4">Literary genre</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Portuguese" id="navbarScrollingDropdown">
            <NavDropdown.Item as={NavLink} to="/organizedBooks/5/1">Title</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/5/2">Country</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/5/3">Author/Writer</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/5/4">Literary genre</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="French" id="navbarScrollingDropdown">
            <NavDropdown.Item as={NavLink} to="/organizedBooks/3/1">Title</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/3/2">Country</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/3/3">Author/Writer</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/3/4">Literary genre</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Italian" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/4/1">Title</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/4/2">Country</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/4/3">Author/Writer</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/organizedBooks/4/4">Literary genre</NavDropdown.Item>
              </NavDropdown>
           <Nav.Link href="https://escritoresleo.com/">LEO Writers</Nav.Link>
            <Nav.Link href="https://www.vamosaleer.co/">Let's read</Nav.Link>
            {userInfo.isSuscribed? <Link to="/books" >
           Library 
          </Link> :<Link to="/books">
          Demo library 
          </Link>}
          <Nav.Link href="#action2">Videos</Nav.Link>
           </div>}



           {(language===3 || languageChange===3)&&
        <div className="container-fluid" >
          <NavDropdown title="Anglais" id="navbarScrollingDropdown">
			          <NavDropdown.Item as={NavLink} to="/organizedBooks/2/1">Titre</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/2/2">Pays</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/2/3">Auteur/rédacteur</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/2/4">Genre littéraire</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Espagnol " id="navbarScrollingDropdown">
			    <NavDropdown.Item as={NavLink} to="/organizedBooks/1/1">Titre</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/1/2">Pays</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/1/3">Auteur/rédacteur</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/1/4">Genre littéraire</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Portugais" id="navbarScrollingDropdown">
			    <NavDropdown.Item as={NavLink} to="/organizedBooks/5/1">Titre</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/5/2">Pays</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/5/3">Auteur/rédacteur</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/5/4">Genre littéraire</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Français" id="navbarScrollingDropdown">
			    <NavDropdown.Item as={NavLink} to="/organizedBooks/3/1">Titre</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/3/2">Pays</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/3/3">Auteur/rédacteur</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/3/4">Genre littéraire</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Italien" id="navbarScrollingDropdown">
                <NavDropdown.Item as={NavLink} to="/organizedBooks/4/1">Titre</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/4/2">Pays</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/4/3">Auteur/rédacteur</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/4/4">Genre littéraire</NavDropdown.Item>
            </NavDropdown>
           <Nav.Link href="https://escritoresleo.com/">Rédacteurs LEO</Nav.Link>
            <Nav.Link href="https://www.vamosaleer.co/">Lisons</Nav.Link>
            {userInfo.isSuscribed? <Link to="/books" >
           Library 
          </Link> :<Link to="/books">
          Demo library 
          </Link>}
          <Nav.Link href="#action2">Vidéos</Nav.Link>
           </div>}

           {(language===4 || languageChange===4)&&
        <div className="container-fluid" >
<NavDropdown title="Inglês" id="navbarScrollingDropdown">
			    <NavDropdown.Item as={NavLink} to="/organizedBooks/2/1">Título</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/2/2">País</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/2/3">Autor/Escritor</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/2/4">Gênero literário</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Espanhol" id="navbarScrollingDropdown">
			    <NavDropdown.Item as={NavLink} to="/organizedBooks/1/1">Título</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/1/2">País</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/1/3">Autor/Escritor</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/1/4">Gênero literário</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Português" id="navbarScrollingDropdown">
			    <NavDropdown.Item as={NavLink} to="/organizedBooks/5/1">Título</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/5/2">País</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/5/3">Autor/Escritor</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/5/4">Gênero literário</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Francês" id="navbarScrollingDropdown">
			    <NavDropdown.Item as={NavLink} to="/organizedBooks/3/1">Título</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/3/2">País</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/3/3">Autor/Escritor</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/3/4">Género literario</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Italiano" id="navbarScrollingDropdown">
                <NavDropdown.Item as={NavLink} to="/organizedBooks/4/1">Título</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/4/2">País</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/4/3">Autor/Escritor</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/4/4">Género literario</NavDropdown.Item>
            </NavDropdown>
           <Nav.Link href="https://escritoresleo.com/">Escritores LEO</Nav.Link>
            <Nav.Link href="https://www.vamosaleer.co/">Vamos ler</Nav.Link>
            {userInfo.isSuscribed? <Link to="/books" >
           Library 
          </Link> :<Link to="/books">
          Demo library 
          </Link>}
          <Nav.Link href="#action2">Vídeos</Nav.Link>
           </div>}

           {(language===5 || languageChange===5)&&
        <div className="container-fluid" >
<NavDropdown title="Inglese " id="navbarScrollingDropdown">
			    <NavDropdown.Item as={NavLink} to="/organizedBooks/2/1">Titolo</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/2/2">Paese </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/2/3">Autore/Scrittrice</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/2/4">Género literario</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Spagnolo " id="navbarScrollingDropdown">
			    <NavDropdown.Item as={NavLink} to="/organizedBooks/1/1">Titolo </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/1/2">Paese </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/1/3">Autore/Scrittrice</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/1/4">Género literario</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Portoghese" id="navbarScrollingDropdown">
			    <NavDropdown.Item as={NavLink} to="/organizedBooks/5/1">Titolo </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/5/2">Paese </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/5/3">Autore/Scrittrice</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/5/4">Género literario</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Francese" id="navbarScrollingDropdown">
			    <NavDropdown.Item as={NavLink} to="/organizedBooks/3/1">Titolo </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/3/2">Paese </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/3/3">Autore/Scrittrice</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/3/4">Género literario</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Italiano" id="navbarScrollingDropdown">
                <NavDropdown.Item as={NavLink} to="/organizedBooks/4/1">Titolo </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/4/2">Paese </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/4/3">Autore/Scrittrice</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/organizedBooks/4/4">Género literario</NavDropdown.Item>
            </NavDropdown>
           <Nav.Link href="https://escritoresleo.com/">Scrittori LEO</Nav.Link>
            <Nav.Link href="https://www.vamosaleer.co/">Leggiamo</Nav.Link>
            {userInfo.isSuscribed? <Link to="/books" >
           Library 
          </Link> :<Link to="/books">
          Demo library 
          </Link>}
          <Nav.Link href="#action2">Video</Nav.Link>
           </div>}
     
        </Navbar>
      </div>

    <div className="row" id="margin">
      
    <div className="col-md-4 col-lg-4 col-sm-12 col-xl-4 col-xxl-4" id="margin"> 
    <div className="container_banner">
      {(language===1 || languageChange===1)&&
      
      <Link to="/AcercaDe">
        <img
          className="img-fluid"
          src={banner1}
          alt="First slide"
        
        />
        <p> <b>Nosotros</b></p>
      </Link>
      }
     

      
      {(language===2 || languageChange===2)&&<Link to="/AboutUs">
        <img
          className="img-fluid"
          src={banner1}
          alt="First slide"
        
        />
        <p> <b>About us</b></p>
      </Link>}
      

      
      {(language===3 || languageChange===3)&&<Link to="/AProposDeNous">
        <img
          className="img-fluid"
          src={banner1}
          alt="First slide"
        
        />
        <p> <b>Nous</b></p>
      </Link>}
      

      
      {(language===4 || languageChange===4)&&<Link to="/SobreNos">
        <img
          className="img-fluid"
          src={banner1}
          alt="First slide"
        
        />
        <p>
          <b>Nós</b>
        </p>
      </Link>}
      

      
      {(language===5 || languageChange===5)&&<Link to="/ChiSiamo">
        <img
          className="img-fluid"
          src={banner1}
          alt="First slide"
        
        />
        <p><b>Noi</b></p>
      </Link>}
    

    </div>
  </div>  

    <div className="col-md-4 col-lg-4 col-sm-12 col-xl-4 col-xxl-4" id="margin">
      
       <div className="container_banner">
      {(language===1 || languageChange===1)&&<Link to="/Unetenos">
      <img
                    src={banner2}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoMingga'
                    />
                    <p><b>Plan amigos</b></p>

          </Link>}

      {(language===2 || languageChange===2)&&<Link to="/Joinus">
      <img
                    src={banner2}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoMingga'
                    />
                    <p><b>Friends plan</b></p>
          </Link>}

      {(language===3 || languageChange===3)&&<Link to="/RejoignezNous">
      <img 
                    src={banner2}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoMingga'
                    />
                    <p><b>Plan des amis</b></p>
          </Link>}

      {(language===4 || languageChange===4)&&<Link to="/JunteSeANos">
      <img 
                    src={banner2}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoMingga'
                    />
                    <p><b>Plano de amigos</b></p>
          </Link>}

      {(language===5 || languageChange===5)&&<Link to="/UniscitiANoi">
      <img 
                    src={banner2}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoMingga'
                    />
                    <p><b>Piano Amici</b></p>
          </Link>}

          
      
          </div>
    </div>

    <div className="col-md-4 col-lg-4 col-sm-12 col-xl-4 col-xxl-4" id="margin">

    {(language===1 || languageChange===1)&&
        <div className="container_banner" >
        {userInfo? <Link to="/Profile">
        <img
          className="img-fluid"
          src={banner4}
          alt="First slide"
        />
        <p><b>Mi cuenta</b></p>
        
        </Link>:
         <Link to="/SignUp">
        <img
          className="img-fluid"
          src={banner3}
          alt="First slide"
          
        />
        <p><b>Vincúlate</b></p>

      </Link>}
       </div>}


       {(language===2 || languageChange===2)&&
        <div className="container_banner" >
        {userInfo? <Link to="/Profile">
        <img
          className="img-fluid"
          src={banner4}
          alt="First slide"
        />
        <p><b>My account</b></p>
        
        </Link>:
         <Link to="/SignupEnglish">
        <img
          className="img-fluid"
          src={banner3}
          alt="First slide"
          
        />
        <p><b>Join us</b></p>

      </Link>}
       </div>}


       {(language===3 || languageChange===3)&&
        <div className="container_banner" >
        {userInfo? <Link to="/Profile">
        <img
          className="img-fluid"
          src={banner4}
          alt="First slide"
        />
        <p><b>Mon compte</b></p>
        
        </Link>:
         <Link to="/SignUpFranch">
        <img
          className="img-fluid"
          src={banner3}
          alt="First slide"
          
        />
        <p><b>Rejoignez-nous</b></p>

      </Link>}
       </div>}


       {(language===5 || languageChange===5)&&
        <div className="container_banner" >
        {userInfo? <Link to="/Profile">
        <img
          className="img-fluid"
          src={banner4}
          alt="First slide"
        />
        <p><b>Minha conta</b></p>
        
        </Link>:
         <Link to="/SignUpPortuguese">
        <img
          className="img-fluid"
          src={banner3}
          alt="First slide"
          
        />
        <p><b>Una-se a nós</b></p>

      </Link>}
       </div>}



       {(language===4 || languageChange===4)&&
        <div className="container_banner" >
        {userInfo? <Link to="/Profile">
        <img
          className="img-fluid"
          src={banner4}
          alt="First slide"
        />
        <p><b>Il mio profilo</b></p>
        
        </Link>:
         <Link to="/SignUpItalian">
        <img
          className="img-fluid"
          src={banner3}
          alt="First slide"
          
        />
        <p><b>Unitevi a noi</b></p>

      </Link>}
       </div>}       
    </div>

</div>
          {(language===1 || languageChange===1)&&
            <div>
              <br />
                <h4 id="titulo"> <b> <h2><b>ClubLeo</b></h2>
                
                Somos una comunidad mundial educativa y de negocios <br />
                Promovemos la lectura para mejorar el nivel académico y cultural <br />
                y generar oportunidades de ingreso para nuestros socios  <br />

                </b> 
                <br />
                </h4>
                <br />
                <br />
            </div>
            
            
          }
          {(language===2 || languageChange===2)&&
            <div>
              <br />
                <h4 id="titulo"> <b> <h2><b>ClubLeo</b></h2>

                
                We are a global educational and business community <br />
                We promote reading to improve the academic and cultural level <br />
                and generate income opportunities for our members <br />

                </b> 
                </h4>
                <br />
                <br />
            </div>
          }
          {(language===3 || languageChange===3)&&
            <div>
              <br />
                <h4 id="titulo"> <b> <h2><b>ClubLeo</b></h2>
                
                Nous sommes une communauté mondiale d’éducation et d’affaires <br />
                Nous promouvons la lecture pour améliorer le niveau académique et culturel <br />
                et générer des opportunités de revenus pour nos partenaires <br />
                </b>
                </h4>
                <br />
                <br />
            </div>
          }
          {(language===4 || languageChange===4)&&
            <div>
              <br />
                <h4 id="titulo"> <b> <h2><b>ClubLeo</b></h2>

              Somos uma comunidade educativa e empresarial global <br />
              Promovemos a leitura para melhorar o nível acadêmico e cultural <br /> 
              e gerar oportunidades de renda para nossos parceiros <br />
                </b> 
                </h4>
                <br />
                <br />
            </div>
          }
          {(language===5 || languageChange===5)&&
            <div>
              <br />
                <h4 id="titulo"> <b> <h2><b>ClubLeo</b></h2>

                Siamo una comunità educativa e imprenditoriale globale<br />
                Promuoviamo la lettura per migliorare il livello accademico e culturale<br />
                e generare opportunità di reddito per i nostri partner<br />
                </b> 
                <br />
                </h4>
                <br />
                <br />
            </div>
          }


      </div>
      
    </div>
        
    );
}
