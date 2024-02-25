import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoleo.png'
import { payProfile } from '../../services/editProfileService'

export default function SendPay() {

    const [state, setState] = useState('')

    const getData = () =>{
        return localStorage.getItem('state')
    }

    // const pay = async ()=>{
    //     const user = await postLogin(state);
    //     console.log(user);
    //     if (user.isAuthenticated) {
    //         user.user.name=user?.user?.name?.reverse().join(" ")
    //         dispatch(infoUser(user.user))
    //         dispatch(infoToken(user.token))
    //         // navigate('/Profile')
    //     }
    // }
    // if(state){
    //     pay()
    // }

    useEffect(()=>{
        setState(JSON.parse(getData()))
    })

    const payPalAccept = async () =>{
        console.log("cambiar datos registro");
        let date = ""
        const dateToday = new Date()
        if((dateToday.getMonth())===11 && (dateToday.getDate())===31){
            date = `${(dateToday.getFullYear()+2)}-01-01`
            console.log(date);
        }
        else if((dateToday.getMonth()+1)<10 && (dateToday.getDate()+1)<10){
            date = `${dateToday.getFullYear()+1}-0${(dateToday.getMonth() + 1)}-0${(dateToday.getDate()+1)}`
            console.log(date);
        }
        else if((dateToday.getMonth()+1)<10){
            date = `${dateToday.getFullYear()+1}-0${(dateToday.getMonth() + 1)}-${(dateToday.getDate()+1)}`
            console.log(date);
        }
        else if((dateToday.getDate()+1)<10){
            date = `${dateToday.getFullYear()+1}-${(dateToday.getMonth() + 1)}-0${(dateToday.getDate()+1)}`
            console.log(date);
        }
        else if ((dateToday.getMonth()+1)>=10 && (dateToday.getDate()+1)>=10){
            date = `${dateToday.getFullYear()+1}-${(dateToday.getMonth() + 1)}-${(dateToday.getDate()+1)}`
            console.log(date);
        }
        const input = {
            isSuscribed : true,
            suscriptionDate: date
        }
        // const user = await payProfile(input, token)
        // console.log(user);
    }
    useEffect(()=> {// eslint-disable-next-line react-hooks/exhaustive-deps
            payPalAccept()
        ;}, [state])

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
