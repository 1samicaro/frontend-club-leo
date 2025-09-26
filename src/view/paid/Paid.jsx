import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logoblack.png'
import PayPalButton from '../paypal/PayPalButtom'
import { initMercadoPago, Payment, Wallet } from '@mercadopago/sdk-react'
import mercadoPago from "../../assets/mercado_pago.png"
import nequi from "../../assets/nequi-seeklogo.png"
import qr from "../../assets/qr.jpg"
import { postLogin } from '../../services/userServices'
import { useDispatch, useSelector } from 'react-redux'
import Modal1 from '../../components/Modal1';
import { infoToken, infoUser } from '../../stateManagement/actions/infoUserAction'
import { editProfile, payProfile } from '../../services/editProfileService'
import { ToastContainer, toast } from 'react-toastify';
import { mercadoPagoBack } from '../../services/ventaService'



function Paid() {
    initMercadoPago("APP_USR-c1276ccf-a9d8-4f57-b26e-87a19c52e8fe");

    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    const { state } = useLocation();

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const notify = () => {
        toast('Actualización de datos realizada!', {
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

    const payPalAnswer = useSelector(state=>state.transactionsReducer.payPalAnswer)
    const token = useSelector(state=>state.infoUserReducer.token.token)
    // const userInfo = useSelector(state=>state.infoUserReducer.user)
    const pay = async ()=>{
        const user = await postLogin(state);
        if (user.isAuthenticated) {
            user.user.name=user?.user?.name?.reverse().join(" ")
            dispatch(infoUser(user.user))
            dispatch(infoToken(user.token))
            // navigate('/Profile')
        }
    }
    if(state){
        pay()
    }

    //pagos
    const [payPalDiv, setPayPalDiv] = useState(false)
    const getPayPalDiv = (e) =>{
        e.preventDefault()
        setPayPalDiv(!payPalDiv) 
    }
    const notifyNequi = () => {
        toast('Pago realizado, será dirigido a la página principal!', {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    const payPalAccept = async () =>{
        let date = ""
        const dateToday = new Date()
        if((dateToday.getMonth())===11 && (dateToday.getDate())===31){
            date = `${(dateToday.getFullYear()+2)}-01-01`
        }
        else if((dateToday.getMonth()+1)<10 && (dateToday.getDate()+1)<10){
            date = `${dateToday.getFullYear()+1}-0${(dateToday.getMonth() + 1)}-0${(dateToday.getDate()+1)}`
        }
        else if((dateToday.getMonth()+1)<10){
            date = `${dateToday.getFullYear()+1}-0${(dateToday.getMonth() + 1)}-${(dateToday.getDate()+1)}`
        }
        else if((dateToday.getDate()+1)<10){
            date = `${dateToday.getFullYear()+1}-${(dateToday.getMonth() + 1)}-0${(dateToday.getDate()+1)}`
        }
        else if ((dateToday.getMonth()+1)>=10 && (dateToday.getDate()+1)>=10){
            date = `${dateToday.getFullYear()+1}-${(dateToday.getMonth() + 1)}-${(dateToday.getDate()+1)}`
        }
        const input = {
            isSuscribed : true,
            suscriptionDate: date
        }
        const user = await payProfile(input, token)
        notify()
        setTimeout(() => {
            navigate('/')
        },"6000");
    }
    useEffect(()=> {// eslint-disable-next-line react-hooks/exhaustive-deps
        if(payPalAnswer){
            payPalAccept()
        }
        ;}, [payPalAnswer])
    
    const [preferenceId, setPreferenceId] = useState(null)

    const createPreference = async () => {
        try {
            const response = await mercadoPagoBack()
            const {id} = response.data.body
            return id;
        } catch (error) {
            console.log(error);
        }
    }
    const nequis =  async (e)=>{
        e.preventDefault()
        const input = {
            description : reference
        }
        const user = await editProfile(input, token)
        if(user.data.message==='User updated'){
            notifyNequi()
            setTimeout(() => {
                navigate('/Profile')
            }, "3000");
        }
    }

    const handleBuy = async () =>{
        const id = await createPreference()
        if(id){
            localStorage.setItem('state',JSON.stringify(state))
            setPreferenceId(id)
        }
    }

    const [mercadoPagoDiv, setMercadoPagoDiv] = useState(false)
    const getMercadoPagoDiv = (e) =>{
        e.preventDefault()
        setMercadoPagoDiv(!mercadoPagoDiv) 
    }

    const [reference, setReference] = useState()

    const handleInputChange = ( e)=>{
        setReference(e.target.value)
    }

    const customization = {
        paymentMethods: {
            ticket: "all",
            bankTransfer: "all",
            creditCard: "all",
            debitCard: "all",
            mercadoPago: "all",
        },
    };
    const initialization = {
        amount: 50000,
        preferenceId: "1",
    };

    const onSubmit = () =>{
        console.log("submit");
    }

    const onReady = () =>{
        console.log("ready");
    }
    const onError = () =>{
        console.log("error");
    }

    return (
        <div className="contenedor-formularios bg-secondary w-100 h-100">
            <nav className="navbar navbar-light mb-5" id="encabezado">
                <Link to="/" className="container-fluid">
                    <img
                    src={logo}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoMingga'
                    />
                </Link>
            </nav>
            <div className="container-fluid  row d-flex justify-content-center">
            <h4>Realiza tu pago a través de alguno de los siguientes métodos</h4>
            <br />

                <ul>
                    <li> <h5> <b>Detalle: </b>Membresia semestral Club Leo</h5></li>
                    <li><h5><b>Precio: </b>$100000 (25 USD)</h5></li>
                </ul>
                <br />

                <div className='row d-flex justify-content-sm-center w-25 h-45'>
                    <img width="250px" height="250px" className='border-radius: 10%' src={qr} alt="Payments by nequi"/>
                    <span className="input-group-text text-info w-50" id="inputGroup-sizing-default">nequi: 3002673887</span>
                    <div className="input-group mb-3 d-flex justify-content-sm-center">
                        <span className="input-group-text text-danger" id="inputGroup-sizing-default">Escriba la referencia de pago</span>
                        <input
                        input type="text" className="form-control-sm" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        onChange={(e)=>handleInputChange(e)}/>
                        <button className="btn btn-primary btn-lg" onClick={nequis}>Enviar</button>
                    </div>
                </div>

                {/* <div className="formasPago">
                    <button onClick={getPayPalDiv}><img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/logotipo_paypal_pagos.png" alt="Payments by PayPal"/></button>
                    <button className='mercadoPago' onClick={handleBuy}><img src={mercadoPago} alt="Payments by mercado pago"/></button>
                    {preferenceId && <Wallet initialization={{preferenceId}}/>}
                    {payPalDiv? 
                        <div className="formasPago">
                            <PayPalButton totalValue={'25'} invoice={'Pago semestral clubleo'}/>
                        </div>
                    :<></>}
                </div> */}
            </div>
            <br />
        </div>
    )
}

export default Paid