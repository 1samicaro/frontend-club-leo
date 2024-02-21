import Modal1 from '../../components/Modal1';

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import logo from '../../assets/logoleo.png'
import { Link } from "react-router-dom";
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
import { booksCatalogoAction, booksCopyAction, booksInfo } from "../../stateManagement/actions/booksInfoAction";


export default function Home() {

  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);

  const dispatch = useDispatch()
  // const id= useSelector(state=>state.IDCityReducer?.id)

  const userInfo = useSelector(state=>state.infoUserReducer.user)
  // const [demo, setDemo] = useState(true)
  let demo = true

  if(userInfo.isSuscribed){
    demo = false
  }


  async function countries (){
      // const [categories, ofertas,country, authors, countryBooks, genresBooks, books] = await Promise.all([
      const [country, authors, countryBooks, genresBooks, books] = await Promise.all([
          // getCategories(),
          // getOfertsByCity(id),
          getCountries(),
          getAuthors(1),
          getCountriesBooks(1),
          getGenresBooks(1),
          getBooks(1)
      ]
      )
      dispatch(booksGenres(genresBooks))
      dispatch(booksCountries(countryBooks))
      dispatch(booksAuthors(authors))
      // dispatch(categoriesAction(categories))
      // dispatch(ofertsActionByCity(ofertas))
      dispatch(getCountry(country))
      if(books?.length>0){
        if(demo){
            books.sort((x, y) => x.name.localeCompare(y.name))
            const demoBooks = books.slice(0,100)
            const recommend = demoBooks.filter(r => r.isFree===true)
            const filterCountry = demoBooks.filter(g => g.CountryId===17)
            const filterAuthor = filterCountry.filter(g => g.GenreId===15)
            dispatch(recomendedAction(recommend))
            dispatch(booksInfo(filterAuthor))
            dispatch(booksCatalogoAction(demoBooks))
            dispatch(booksCopyAction(demoBooks))
        }
        else {
            const filterCountry = books.filter(g => g.CountryId===17)
            const filterAuthor = filterCountry.filter(g => g.GenreId===29)
            const recommend = books.filter(r => r.isFree===true)
            dispatch(recomendedAction(recommend))
            dispatch(booksInfo(filterAuthor))
            dispatch(booksCatalogoAction(books))
            dispatch(booksCopyAction(books))
        }
    }

  }
  useEffect(()=> {// eslint-disable-next-line react-hooks/exhaustive-deps
      countries();}, [])
    
    return (

      <div className="container_home" id='paginaprincipal'>
      <div>

      <div className="container-fluid">
        <br />

        <div className="row">
          <div className="col-lg-6 col-md-6">
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
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="social-links mt-3" align="right">
                <Link 
                  onClick={()=> cambiarEstadoModal1(!estadoModal1)}
                >
                  <svg  id="color"
                  xmlns="http://www.w3.org/2000/svg" 
                  width="35" height="35" fill="currentColor" class="bi bi-envelope-fill" 
                  viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                </Link>
                <Modal1 
                  estado={estadoModal1}
                  cambiarEstado={cambiarEstadoModal1}
                  >
                  <h4>Contacto</h4>
                  <p>Avenida Jiménez 9-43 Oficina 206 <br/>
                  Edificio Federación <br/>
                  Bogotá, Colombia <br/>

                  Télefono: 6014327879  +57 300 4727644 <br />
                  Email: contacto@clubleo.net</p>
                  <h4>Redes sociales</h4>

                  <p>
                  Conoce a CLUBLEO, mantente actualizado <br />
                  de las oportunidades en todo el mundo.
                  </p>
                  <br />
                  <Link to="https://twitter.com/mingga_rmb">
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
                  &nbsp;&nbsp;

                  <Link to="https://www.facebook.com/profile.php?id=100093289494718">
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
                  &nbsp;&nbsp;


                  <Link to="https://www.instagram.com/mingga_rmb/">
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
                  &nbsp;&nbsp;


                  <Link to="https://www.linkedin.com/in/mingga-rmb/">
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
                  &nbsp;&nbsp;

                  <Link to="https://www.tiktok.com/@mingga_rmb">
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
                  &nbsp;&nbsp;

                  <Link to="">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  className="bi bi-youtube" 
                  viewBox="0 0 16 16"
                  >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg>
                  </Link>
                </Modal1>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                {userInfo?<></> : <Link to="/SignIn">
                <svg id="color"
                xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" 
                class="bi bi-lock" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                </svg>
                </Link>}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                

                <a href={excel} download>
                <svg id="color"
                xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" 
                class="bi bi-file-earmark-fill" viewBox="0 0 16 16">
                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"/>
                </svg>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Link 
                  onClick={()=> cambiarEstadoModal2(!estadoModal2)}
                >
                <svg id="color"
                xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" 
                class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </Link>
                <Modal1 
                  estado={estadoModal2}
                  cambiarEstado={cambiarEstadoModal2}
                >
                <h4>Politica y Seguridad de Usuarios</h4>
                <ul align="right"> 
                  <li align="right">
                  •  <Link to="/Privacydata"><u id="titteblue">Privacidad de Datos</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/Terms" ><u id="titteblue">Términos y Condiciones</u></Link>
                  </li>
                  <li align="right">
                  •  <Link to="/Regulation" ><u id="titteblue">Reglamento Plan Amigos</u></Link>
                  </li>

                </ul>
                <br /> 
              </Modal1>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            
          </div>

          </div>
          
              
              
    </div >
    
    


    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" >
          <Link to="https://www.vamosaleer.co/" className="navbar-brand">
          <h4> <b>   Vamos a leer </b></h4>
          </Link>
          <Link to="/" className="navbar-brand">
          <h4><b> Librería </b></h4>
          </Link>
          <Link to="/" className="navbar-brand">
          <h4> <b>   Aliados </b></h4>
          </Link>
          <Link to="/" className="navbar-brand">
          <h4><b> Educación </b></h4>
          </Link>
          {/* <Link to="/" className="navbar-brand">
          <h4> <b>   Bibliotecas </b></h4>
          </Link> */}
          {userInfo.isSuscribed? <Link to="/books" className="navbar-brand">
          <h4> <b>   Biblioteca </b></h4>
          </Link> :<Link to="/books" className="navbar-brand">
          <h4> <b>   Demo </b></h4>
          </Link>}
          <Link to="/" className="navbar-brand">
          <h4> <b>   Videos </b></h4>
          </Link>
        </div>
      </nav>
      </div>

    <div className="row" id="margin">
      
    <div className="col-sm-12 col-md-4 col-lg-4 col-sm-4 col-xl-4 col-xxl-4" id="margin"> 
     
      <Link to="/AboutUs">
      <img id="photo"
            className="img-fluid"
            src={banner1}
            alt="First slide"
          
          />
        </Link>
       
    </div>

    <div className="col-sm-12 col-md-4 col-lg-4 col-sm-4 col-xl-4 col-xxl-4" id="margin">
      <div className="card" id="photo">
      <Link to="/JoinUs">
      <img id="photo"
                    src={banner2}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoMingga'
                    />
          </Link>

          
      
      </div>
    </div>

    <div className="col-sm-12 col-md-4 col-lg-4 col-sm-4 col-xl-4 col-xxl-4" id="margin">
      <div className="card" id="photo">
      {userInfo? <Link to="/Profile">
        <img
          className="img-fluid"
          src={banner3}
          alt="First slide"
          id="photo"
        />
      </Link>:
      <Link to="/SignUp">
        <img
          className="img-fluid"
          src={banner3}
          alt="First slide"
          id="photo"
        />
      </Link>}
        
      </div>
    </div>

</div>

          <br />
          <h4 id="titulo"> <b> <h2><b>ClubLeo</b></h2>
            Somos una comunidad mundial en acción <br />
          <h4>Promovemos la lectura, la escritura y el multilingüismo, para construir <br />
          entre todos un mundo más educado y culto, progresista y pacífico</h4> <br />
          </b> 
          </h4>


      </div>
      
    </div>
        
    );
}