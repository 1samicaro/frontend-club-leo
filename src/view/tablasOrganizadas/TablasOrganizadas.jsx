import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useParams } from 'react-router-dom'
import "./TablasOrganizadas.css"
import logo from '../../assets/logoleo.png'


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

export default function TablasOrganizadas() {

	let params =useParams()
	console.log(params.language);
	console.log(params.select);
    
    const [language, setLanguage] = useState("1")
    
    const languageChange = useSelector(state=> state.changeLanguageReducer?.id)

    const [catalogo, setCatalogo] = useState([])
    const [wait, setWait] =useState(true)
    const [search, setSearch] = useState("")
    // const [random, setRandom] = useState([])
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
	useEffect(()=>{update()},[catalogo])
    
	if(Number(params.language)===1){
		//autores
		if(Number(params.select)===3){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//países
		else if(Number(params.select)===2){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//libros
		else if(Number(params.select)===1){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//géneros
		else if(Number(params.select)===4){
			console.log("generos");
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
	}
	if(Number(params.language)===2){
		//autores
		if(Number(params.select)===3){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//países
		else if(Number(params.select)===2){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//libros
		else if(Number(params.select)===1){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//géneros
		else if(Number(params.select)===4){
			console.log("generos");
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
	}
	if(Number(params.language)===3){
		//autores
		if(Number(params.select)===3){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//países
		else if(Number(params.select)===2){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//libros
		else if(Number(params.select)===1){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//géneros
		else if(Number(params.select)===4){
			console.log("generos");
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
	}
	if(Number(params.language)===4){
		//autores
		if(Number(params.select)===3){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//países
		else if(Number(params.select)===2){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//libros
		else if(Number(params.select)===1){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//géneros
		else if(Number(params.select)===4){
			console.log("generos");
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
	}
	if(Number(params.language)===5){
		//autores
		if(Number(params.select)===3){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//países
		else if(Number(params.select)===2){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//libros
		else if(Number(params.select)===1){
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
		//géneros
		else if(Number(params.select)===4){
			console.log("generos");
			setTimeout(() => {
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
				setWait(false)
			}, "10");
		}
	}

    const searcher = (e) =>{
        setSearch(e.target.value)
    }

	let results = catalogo
	if(!search){
		results=catalogo
	}
	else{
		if(Number(params.select)===1){
			results = catalogo.filter((dato)=>
			dato.name.toLowerCase().includes(search.toLocaleLowerCase())
		)}
		if(Number(params.select)===2){
			results = catalogo.filter((dato)=>
			dato.Country.name.toLowerCase().includes(search.toLocaleLowerCase())
		)}
		if(Number(params.select)===3){
			results = catalogo.filter((dato)=>
			dato.Author.name.toLowerCase().includes(search.toLocaleLowerCase())
		)}
		if(Number(params.select)===4){
			results = catalogo.filter((dato)=>
			dato.Genre.name.toLowerCase().includes(search.toLocaleLowerCase())
		)}
	}
	const update = () =>{
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
					{results.map(data =>(
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