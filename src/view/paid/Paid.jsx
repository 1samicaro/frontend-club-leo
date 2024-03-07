import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import logo from '../../assets/logoblack.png'
import PayPalButton from '../paypal/PayPalButtom'
import { initMercadoPago, Payment, Wallet } from '@mercadopago/sdk-react'
import mercadoPago from "../../assets/mercado_pago.png"
import { postLogin } from '../../services/userServices'
import { useDispatch, useSelector } from 'react-redux'
import Modal1 from '../../components/Modal1';
import { infoToken, infoUser } from '../../stateManagement/actions/infoUserAction'
import { editProfile, payProfile } from '../../services/editProfileService'
import { mercadoPagoBack } from '../../services/ventaService'

initMercadoPago("TEST-4c9e6322-d093-4c9f-bc7c-fa2efa2e04bf");


function Paid() {

    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    const { state } = useLocation();

    const navigate = useNavigate()
    const dispatch = useDispatch()

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
        <div className="contenedor-formularios">
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
            <div className="container-fluid"  id="registro">
            <h4>Realiza tu pago a través de alguno de los siguientes métodos</h4>
            <br />

                <ul>
                    <li> <h5> <b>Detalle: </b>Pago anual Club Leo</h5></li>
                    <li><h5><b>Precio: </b>$50.000 (12.5 USD)</h5></li>
                </ul>
                <br />

                <div className="formasPago">
                    <button onClick={getPayPalDiv}><img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/logotipo_paypal_pagos.png" alt="Payments by PayPal"/></button>
                    <button className='mercadoPago' onClick={handleBuy}><img src={mercadoPago} alt="Payments by mercado pago"/></button>
                    {preferenceId && <Wallet initialization={{preferenceId}}/>}
                </div>

                {payPalDiv? 
                    <div>
                        <PayPalButton totalValue={'12.5'} invoice={'Pago anual clubleo'}/>
                    </div>
                :<></>}

                {/* <Payment
                    initialization={initialization}
                    customization={customization}
                    onSubmit={onSubmit}
                    onReady={onReady}
                    onError={onError}
                /> */}
            </div>
            <br />

            <div>
                <br />

                <Link class="btn btn-primary"
                    onClick={()=> cambiarEstadoModal1(!estadoModal1)}
                > <h3>Pago Directo</h3>
                </Link>
                <Modal1 
                    estado={estadoModal1}
                    cambiarEstado={cambiarEstadoModal1}>
                    <h4 align="right">Depósito electrónico</h4>
                    <ul align="right"> 
                    <li align="right">
                    <p>
                    ☑ NEQUI <br />
                    N° 3002673887
                    </p>
                    </li>
                    <li align="right">
                    <p>
                    ☑ DAVIPLATA  <br />
                    N° 3002673887
                    </p>
                    </li>
                    </ul>
                    <h4 align="right">Transferencia bancaria</h4>
                    <ul align="right"> 
                    <li align="right">
                    <p>
                    ☑ DAVIVIENDA <br />
                    Cuenta de Ahorros N° 0550488425412597
                    </p>
                    </li>
                    <li align="right">
                    <p>
                    ☑ BANCOLOMBIA  <br />
                    Cuenta de Ahorros N° 602-666846-68
                    </p>
                    </li>
                    </ul>
                    <h4 align="right">Pagos fisicos</h4>
                    <ul align="right"> 
                    <li align="right">
                    <p>
                    ☑ Oficina Club Leo<br />
                    </p>
                    </li>
                    <li align="right">
                    <p>
                    ☑ Efecty <br />
                    N° 3002673887 <br />    
                    Cédula N° 1032437031
                    </p>
                    </li>
                    <li align="right">
                    <p>
                    ☑ Baloto  <br />
                    N° 3002673887 <br />
                    Cédula N° 1032437031
                    </p>
                    </li>
                    </ul>
                    <br /> 
                </Modal1>
            </div>
  
            <br />
            <br />
            <div className="aviso">
                <h5>
                    Al elegir el método de pago directo, tu pago será verificado <br />
                    en un plazo máximo de 24 horas y recibirás un correo de <br />
                    bienvenida como nuevo socio de CLUB LEO.<br />
            
                </h5>



            </div>


            
        </div>
    )
}

export default Paid