import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoleo.png'

export default function SendPay() {

    const [state, setState] = useState('')

    const getData = () =>{
        return localStorage.getItem('state')
    }

    useEffect(()=>{
        setState(getData())
    })

    console.log(state);

    return (
        <div>
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
            <h1>Pago realizado, por favor diríjase de nuevo al principio para poder disfrutar de todos nuestros libros</h1>
        </div>
    )
}
