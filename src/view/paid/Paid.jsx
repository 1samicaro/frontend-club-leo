import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import logo from '../../assets/logoblack.png'
import PayPalButton from '../paypal/PayPalButtom'
import { initMercadoPago } from '@mercadopago/sdk-react'
import mercadoPago from "../../assets/mercado_pago.png"
import { postLogin } from '../../services/userServices'
import { useSelector } from 'react-redux'
import Modal1 from '../../components/Modal1';

function Paid() {

    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    const { state } = useLocation();

    // const userInfo = useSelector(state=>state.infoUserReducer.user)
    const pay = async ()=>{
        const user = await postLogin(state);
        console.log(user);
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
    
    const [preferenceId, setPreferenceId] = useState(null)
    initMercadoPago('YOUR_PUBLIC_KEY');

    const createPreference = async () => {
        try {
            const response = await //funcion
            {
                description: "Pago clubleo",
                price: 50000,
                quantity: 1,
            }
            const {id} = response.data
            return id;
        } catch (error) {
            console.log(error);
        }
    }

    const handleBuy = async () =>{
        const id = await createPreference()
        if(id){
            setPreferenceId(id)
        }
    }

    const [mercadoPagoDiv, setMercadoPagoDiv] = useState(false)
    const getMercadoPagoDiv = (e) =>{
        e.preventDefault()
        setMercadoPagoDiv(!mercadoPagoDiv) 
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
                <h1>Realiza tu pago de alguna de las siguientes formas</h1>

                <label className="l-01"> <h5>Formas de Pago</h5></label>
                <ul>
                    <li><b>Detalle: </b>Pago anual Club Leo</li>
                    <li><b>Precio: </b>$50.000 (12.5 USD)</li>
                </ul>
                <div className="formasPago">
                    <button onClick={getPayPalDiv}><img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/logotipo_paypal_pagos.png" alt="Payments by PayPal"/></button>
                    <button className='mercadoPago' onClick={handleBuy}><img src={mercadoPago} alt="Payments by mercado pago"/></button>
                </div>

                {payPalDiv? 
                    <div>
                        <PayPalButton totalValue={'12.5'} invoice={'Pago anual clubleo'}/>
                    </div>
                :<></>}
            </div>
            <div>
                <h2>Métodos de pago</h2>

                <Link 
                    onClick={()=> cambiarEstadoModal1(!estadoModal1)}
                > ¿Pago inmediato, efectivo?
                </Link>
                <Modal1 
                    estado={estadoModal1}
                    cambiarEstado={cambiarEstadoModal1}>
                    <h4 align="right">Pagos directos</h4>
                    <ul align="right"> 
                    <li align="right">
                    <p>
                    NEQUI <br />
                    N° 3002673887
                    </p>
                    </li>
                    <li align="right">
                    <p>
                    DAVIPLATA  <br />
                    N° 3002673887
                    </p>
                    </li>
                    </ul>
                    <h4 align="right">Transferencia bancaria directa</h4>
                    <ul align="right"> 
                    <li align="right">
                    <p>
                    DAVIVIENDA <br />
                    Cuenta de Ahorros N° 0550488425412597
                    </p>
                    </li>
                    <li align="right">
                    <p>
                    BANCOLOMBIA  <br />
                    Cuenta de Ahorros N° 602-666846-68
                    </p>
                    </li>
                    </ul>
                    <h4 align="right">Pagos fisicos</h4>
                    <ul align="right"> 
                    <li align="right">
                    <p>
                    Efecty <br />
                    N° 3002673887 <br />    
                    Cédula N° 1032437031
                    </p>
                    </li>
                    <li align="right">
                    <p>
                    Baloto  <br />
                    N° 3002673887 <br />
                    Cédula N° 1032437031
                    </p>
                    </li>
                    </ul>
                    <br /> 
                </Modal1>
            </div>
        </div>
    )
}

export default Paid