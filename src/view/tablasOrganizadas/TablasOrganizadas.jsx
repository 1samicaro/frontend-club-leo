import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useParams } from 'react-router-dom'
import "./TablasOrganizadas.css"
import logo from '../../assets/logoleo.png'

export default function TablasOrganizadas() {

	let params =useParams()
    
    const [language, setLanguage] = useState("1")
    
    const languageChange = useSelector(state=> state.changeLanguageReducer?.id)

    const [catalogo, setCatalogo] = useState([])
    const [search, setSearch] = useState("")
	const allBooksSpanish = useSelector(state=> state.booksInfoReducer?.allBooksSpanish)
	const allBooksEnglish = useSelector(state=> state.booksInfoReducer?.allBooksEnglish)
	const allBooksFranch = useSelector(state=> state.booksInfoReducer?.allBooksFranch)
	const allBooksItalian = useSelector(state=> state.booksInfoReducer?.allBooksItalian)
	const allBooksPortugues = useSelector(state=> state.booksInfoReducer?.allBooksPortugues)

    const userInfo = useSelector(state=>state.infoUserReducer.user)

    let demo = true
    let temp = 0
    if(userInfo.isSuscribed){
		demo = false
    }

	///Solución a renderización de estados aka David
	const [fantasma, setFantasma] = useState(0)

	useEffect(()=>{busqueda()}, [search, catalogo])
	useEffect(()=>{renderPage()}, [params])

	const renderPage = () =>{
		setFantasma(fantasma+1)
		if(Number(params.language)===1){
			//autores
			if(Number(params.select)===3){
				temp= allBooksSpanish.sort(function (a, b) {
						if (a.Author.name > b.Author.name) {
							return 1;
						}
						if (a.Author.name < b.Author.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//países
			else if(Number(params.select)===2){
				temp= allBooksSpanish.sort(function (a, b) {
						if (a.Country.name > b.Country.name) {
							return 1;
						}
						if (a.Country.name < b.Country.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//libros
			else if(Number(params.select)===1){
				temp= allBooksSpanish.sort(function (a, b) {
						if (a.name > b.name) {
							return 1;
						}
						if (a.name < b.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//géneros
			else if(Number(params.select)===4){
				temp= allBooksSpanish.sort(function (a, b) {
						if (a.Genre.name > b.Genre.name) {
							return 1;
						}
						if (a.Genre.name < b.Genre.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
		}
		if(Number(params.language)===2){
			//autores
			if(Number(params.select)===3){
				temp= allBooksEnglish.sort(function (a, b) {
						if (a.Author.name > b.Author.name) {
							return 1;
						}
						if (a.Author.name < b.Author.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//países
			else if(Number(params.select)===2){
				temp= allBooksEnglish.sort(function (a, b) {
						if (a.Country.name > b.Country.name) {
							return 1;
						}
						if (a.Country.name < b.Country.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//libros
			else if(Number(params.select)===1){
				temp= allBooksEnglish.sort(function (a, b) {
						if (a.name > b.name) {
							return 1;
						}
						if (a.name < b.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//géneros
			else if(Number(params.select)===4){
				temp= allBooksEnglish.sort(function (a, b) {
						if (a.Genre.name > b.Genre.name) {
							return 1;
						}
						if (a.Genre.name < b.Genre.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
		}
		if(Number(params.language)===3){
			//autores
			if(Number(params.select)===3){
				temp= allBooksFranch.sort(function (a, b) {
						if (a.Author.name > b.Author.name) {
							return 1;
						}
						if (a.Author.name < b.Author.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//países
			else if(Number(params.select)===2){
				temp= allBooksFranch.sort(function (a, b) {
						if (a.Country.name > b.Country.name) {
							return 1;
						}
						if (a.Country.name < b.Country.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//libros
			else if(Number(params.select)===1){
				temp= allBooksFranch.sort(function (a, b) {
						if (a.name > b.name) {
							return 1;
						}
						if (a.name < b.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//géneros
			else if(Number(params.select)===4){
				temp= allBooksFranch.sort(function (a, b) {
						if (a.Genre.name > b.Genre.name) {
							return 1;
						}
						if (a.Genre.name < b.Genre.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
		}
		if(Number(params.language)===4){
			//autores
			if(Number(params.select)===3){
				temp= allBooksItalian.sort(function (a, b) {
						if (a.Author.name > b.Author.name) {
							return 1;
						}
						if (a.Author.name < b.Author.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//países
			else if(Number(params.select)===2){
				temp= allBooksItalian.sort(function (a, b) {
						if (a.Country.name > b.Country.name) {
							return 1;
						}
						if (a.Country.name < b.Country.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//libros
			else if(Number(params.select)===1){
				temp= allBooksItalian.sort(function (a, b) {
						if (a.name > b.name) {
							return 1;
						}
						if (a.name < b.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//géneros
			else if(Number(params.select)===4){
				temp= allBooksItalian.sort(function (a, b) {
						if (a.Genre.name > b.Genre.name) {
							return 1;
						}
						if (a.Genre.name < b.Genre.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
		}
		if(Number(params.language)===5){
			//autores
			if(Number(params.select)===3){
				temp= allBooksPortugues.sort(function (a, b) {
						if (a.Author.name > b.Author.name) {
							return 1;
						}
						if (a.Author.name < b.Author.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//países
			else if(Number(params.select)===2){
				temp= allBooksPortugues.sort(function (a, b) {
						if (a.Country.name > b.Country.name) {
							return 1;
						}
						if (a.Country.name < b.Country.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//libros
			else if(Number(params.select)===1){
				temp= allBooksPortugues.sort(function (a, b) {
						if (a.name > b.name) {
							return 1;
						}
						if (a.name < b.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
			//géneros
			else if(Number(params.select)===4){
				temp= allBooksPortugues.sort(function (a, b) {
						if (a.Genre.name > b.Genre.name) {
							return 1;
						}
						if (a.Genre.name < b.Genre.name) {
							return -1;
						}
							return 0;
						});
				setCatalogo(temp)
			}
		}
	}

    const searcher = (e) =>{
        setSearch(e.target.value)
    }

	const [result, setResult] = useState([])

	const busqueda = () =>{
		console.log("1");
		if(!search){
			// results=catalogo	
			setResult(catalogo)
		}
		else{
			if(Number(params.select)===1){
				const results = catalogo.filter((dato)=>
				dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
				setResult(results)
			}
			if(Number(params.select)===2){
				const results = catalogo.filter((dato)=>
				dato.Country.name.toLowerCase().includes(search.toLocaleLowerCase()))
				setResult(results)
			}
			if(Number(params.select)===3){
				const results = catalogo.filter((dato)=>
				dato.Author.name.toLowerCase().includes(search.toLocaleLowerCase()))
				setResult(results)
			}
			if(Number(params.select)===4){
				const results = catalogo.filter((dato)=>
				dato.Genre.name.toLowerCase().includes(search.toLocaleLowerCase()))
				setResult(results)
			}
		}
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
            </div>
            </div>

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
            <NavDropdown title="Potugués" id="navbarScrollingDropdown">
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
            <Nav.Link href="https://escritoresleo.com/">Escritores LEO</Nav.Link>
                <Nav.Link href="https://www.vamosaleer.co/">Vamos a leer</Nav.Link>

                {userInfo.isSuscribed? <Link to="/books" >
            Biblioteca 
            </Link> :<Link to="/books">
            Demo Biblioteca 
            </Link>}
            <Nav.Link href="#action2">Videos</Nav.Link>
            </div>}




            {(language===2 || languageChange===2)&&
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
            <NavDropdown title="Potugués" id="navbarScrollingDropdown">
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
            <Nav.Link href="https://escritoresleo.com/">Escritores LEO</Nav.Link>
                <Nav.Link href="https://www.vamosaleer.co/">Vamos a leer</Nav.Link>

                {userInfo.isSuscribed? <Link to="/books" >
            Library 
            </Link> :<Link to="/books">
            Demo library 
            </Link>}
            <Nav.Link href="#action2">Videos</Nav.Link>
            </div>}



            {(language===3 || languageChange===3)&&
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
            <NavDropdown title="Potugués" id="navbarScrollingDropdown">
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
            <Nav.Link href="https://escritoresleo.com/">Escritores LEO</Nav.Link>
                <Nav.Link href="https://www.vamosaleer.co/">Vamos a leer</Nav.Link>

                {userInfo.isSuscribed? <Link to="/books" >
            Library 
            </Link> :<Link to="/books">
            Demo library 
            </Link>}
            <Nav.Link href="#action2">Videos</Nav.Link>
            </div>}

            {(language===4 || languageChange===4)&&
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
            <NavDropdown title="Potugués" id="navbarScrollingDropdown">
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
            <Nav.Link href="https://escritoresleo.com/">Escritores LEO</Nav.Link>
                <Nav.Link href="https://www.vamosaleer.co/">Vamos a leer</Nav.Link>

                {userInfo.isSuscribed? <Link to="/books" >
            Library 
            </Link> :<Link to="/books">
            Demo library 
            </Link>}
            <Nav.Link href="#action2">Videos</Nav.Link>
            </div>}

            {(language===5 || languageChange===5)&&
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
            <NavDropdown title="Potugués" id="navbarScrollingDropdown">
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
            <Nav.Link href="https://escritoresleo.com/">Escritores LEO</Nav.Link>
                <Nav.Link href="https://www.vamosaleer.co/">Vamos a leer</Nav.Link>

                {userInfo.isSuscribed? <Link to="/books" >
            Library 
            </Link> :<Link to="/books">
            Demo library 
            </Link>}
            <Nav.Link href="#action2">Videos</Nav.Link>
            </div>}
        
            </Navbar>
        </div>
        
        <div className='text-center'>
            <input type="text" value={search} onChange={searcher} placeholder='Search' className='form-control' />
            {/* {wait?<></>:<Table data={results} rowsPerPage={9000} />} */}
			<table className='table table-striped table-hover mt-5 shadow-lg'>
				<thead>
					<tr className='bg-curso text-white'>
					    <th>Autores</th>
                        <th>Países</th>
                        <th>Géneros</th>
                        <th>Libros</th>
					</tr>
				</thead>
				<tbody>
					{result.map(data =>(
					<tr>
					    <th>{data.Author.name}</th>
                        <th>{data.Country.name}</th>
                        <th>{data.Genre.name}</th>
                        <th><Link to={`/viewWord/${data.name}`}><p id="titulo7">{data.name}</p></Link></th>
					</tr>
					))}
				</tbody>			
			</table>
        </div>
    </div>
    )
}