import React, { useState } from 'react'
import { Link  } from 'react-router-dom'
import { postLogin, recoverPass } from '../../services/userServices';
import { useDispatch, useSelector } from 'react-redux';
import "./SignIn.css";
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logoblack.png'


import { useNavigate } from 'react-router-dom';
import { infoToken, infoUser } from '../../stateManagement/actions/infoUserAction';
import Modal from '../../components/Modal';

const initialState = {
    username: "",
    password: "",
};

export default function SignIn() {


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const languageChange = useSelector(state=> state.changeLanguageReducer?.id)
    const [language, setLanguage] = useState("1")

    const [input, setInput] = useState(initialState)
    const [errors, setErrors] = useState(initialState);
    const [modalUpdate, setModalUpdate] = useState(false)
    const [recoveryPass, setRecoveryPass] = useState({})

    function handleInputChange(input, e){
        e.preventDefault()
        setInput(prev=>({...prev, [input]:e.target.value}))
    }
    
    function handleRecovery(e){
        e.preventDefault()
        // setInput(prev=>({...prev, [input]:e.target.value}))
        setRecoveryPass(e.target.value)
    }
    

    const notify = () => {
        toast('Correo enviado', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    const notifyError = () => {
        toast('Usuario no existe', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    const onSend = async (e) => {
        e.preventDefault()
        const error = {};
        if (!input.password) { error.password = "Requerido" };
        if (!input.username) { error.username = "Requerido" };
        if (!(Object.entries(error).length === 0)) { setErrors(error) }
        else {
            const user = await postLogin(input);
            if (user.isAuthenticated) {
                console.log(user);
                user.user.name=user?.user?.name?.reverse().join(" ")
                dispatch(infoUser(user.user))
                dispatch(infoToken(user.token))
                navigate('/Profile')
            }
            else if(user==="Username or password incorrect"){
                setErrors(prev=>({...prev, username:"Usuario o Password incorrecto"}))
                setErrors(prev=>({...prev, password:"Usuario o Password incorrecto"}))
            }
        }
    };
    async function recovery(){
        const recover = await recoverPass(recoveryPass)
        if(recover.message==="Error sending mail"){
            notifyError()
        }
        if(recover.message==="mail send"){
            notify()
            setModalUpdate(!modalUpdate)
        }
    }

    return (
        <div className="contenedor_sesion">
            <ToastContainer />
            <nav className="navbar navbar-light mb-5" id="encabezado">
                <Link to="/" className="container-fluid">
                    <img
                    src={logo}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoleo'
                    />
                </Link>
            </nav>
            <br />
            <br></br>
            <div className="container-fluid" id="registroLoggin">
                        <div className="container">
                                <div className="container text-center">
                                {(language===1 || languageChange===1)&&<h2><b>Bienvenido a ClubLeo</b> </h2>}
                                {(language===2 || languageChange===2)&&<h2><b>welcome to ClubLeo</b> </h2>}
                                {(language===3 || languageChange===3)&&<h2><b>Bienvenue à ClubLeo</b> </h2>}
                                {(language===4 || languageChange===4)&&<h2><b>bem-vindo a ClubLeo</b> </h2>}
                                {(language===5 || languageChange===5)&&<h2><b>benvenuto aClubLeo</b> </h2>}
                                </div>
                                <br />
                                {(language===1 || languageChange===1)&&<label className="l-01"> <h4>Iniciar sesión</h4></label>}
                                {(language===2 || languageChange===2)&&<label className="l-01"> <h4>Log in</h4></label>}
                                {(language===3 || languageChange===3)&&<label className="l-01"> <h4>Commencer la session</h4></label>}
                                {(language===4 || languageChange===4)&&<label className="l-01"> <h4>Iniciar sessão</h4></label>}
                                {(language===5 || languageChange===5)&&<label className="l-01"> <h4>Login</h4></label>}
                                

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Ingresa tu usuario" onChange={(e)=>handleInputChange("username", e)} required/>
                                    {(language===1 || languageChange===1)&&<label >Ingresa con tu Usuario</label>}
                                    {(language===2 || languageChange===2)&&<label >Login with your User</label>}
                                    {(language===3 || languageChange===3)&&<label >Connectez-vous avec votre utilisateur</label>}
                                    {(language===4 || languageChange===4)&&<label >Faça login com seu usuário</label>}
                                    {(language===5 || languageChange===5)&&<label >Accedi con il tuo Utente</label>}
                                </div>
                                {errors.username ? <span className='textError'>{errors.username}</span> : <></>}

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" placeholder="Ingresa tu contraseña" onChange={(e)=>handleInputChange("password", e)} required/>
                                    {(language===1 || languageChange===1)&&<label >Ingresa tu contraseña</label>}
                                    {(language===2 || languageChange===2)&&<label >Enter your password</label>}
                                    {(language===3 || languageChange===3)&&<label >Tapez votre mot de passe</label>}
                                    {(language===4 || languageChange===4)&&<label >Coloque sua senha</label>}
                                    {(language===5 || languageChange===5)&&<label >Inserisci la tua password</label>}

                                    {(language===1 || languageChange===1)&&<Link href="/" className="password" onClick={()=>setModalUpdate(!modalUpdate)}> <p><b>¿Olvidaste tu contraseña?</b></p></Link>}
                                    {(language===2 || languageChange===2)&&<Link href="/" className="password" onClick={()=>setModalUpdate(!modalUpdate)}> <p><b>Did you forget your password?</b></p></Link>}
                                    {(language===3 || languageChange===3)&&<Link href="/" className="password" onClick={()=>setModalUpdate(!modalUpdate)}> <p><b>Vous avez oublié votre mot de passe?</b></p></Link>}
                                    {(language===4 || languageChange===4)&&<Link href="/" className="password" onClick={()=>setModalUpdate(!modalUpdate)}> <p><b>Você esqueceu sua senha?</b></p></Link>}
                                    {(language===5 || languageChange===5)&&<Link href="/" className="password" onClick={()=>setModalUpdate(!modalUpdate)}> <p><b>Hai dimenticato la tua password?</b></p></Link>}

                                </div>
                                

                                <br />
                                <p className="text">
                                {(language===1 || languageChange===1)&&<b>Mantén segura tu identidad corporativa.
                                El usuario y contraseña son personales e intransferibles.
                                </b>}
                                {(language===2 || languageChange===2)&&<b>Keep your corporate identity secure.
                                 The username and password are personal and non-transferable.
                                 </b>}
                                {(language===3 || languageChange===3)&&<b>Protégez votre identité d’entreprise.
                                 L'identifiant et le mot de passe sont personnels et incessibles.
                                 </b>}
                                {(language===4 || languageChange===4)&&<b>Mantenha sua identidade corporativa segura.
                                 O nome de usuário e a senha são pessoais e intransferíveis.
                                 </b>}
                                {(language===5 || languageChange===5)&&<b>Mantieni sicura la tua identità aziendale.
                                 Il nome utente e la password sono personali e non trasferibili.
                                 </b>}
                                </p>

                                <div className="d-grid gap-2 col-6 mx-auto">
                                <button id="boton_loggin"
                                className="btn btn-primary btn-lg" onClick={onSend} type="submit">Ingresar</button>
                            </div>
                        </div>
            </div>
            <br />
        <br />
        <br />
        <br />
        <br />
        <Modal
                estado={modalUpdate}
                cambiarEstado={setModalUpdate}
            >
                <Contenido>
                    <h1>Recuperar contraseña</h1>
                    <div className="form-floating mb-3">
                            <input 
                            className="form-control"
                            onChange={(e)=>handleRecovery(e)}/>
                            <label htmlFor="floatingInput">Nombre de usuario</label>
                        </div>
                    <div className='row'>
                        <Boton onClick={()=>recovery()}>Enviar un correo</Boton>
                    </div>
                </Contenido>
            </Modal>
        </div>
    )
}

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;