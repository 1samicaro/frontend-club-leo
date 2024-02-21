import { PayPalButtons } from "@paypal/react-paypal-js"
import React from "react"

const PayPalButton = (props)=>{
    return(
        <PayPalButtons 
            // createOrder={(data, actions)=>{
            createOrder={(_, actions)=>{
                return actions.order.create({
                    purchase_units:[
                        {
                            description:props.invoice,
                            amount:{
                                value:props.totalValue,
                            }
                        }
                    ]
                })
            }}
            onApprove={async (data, actions)=>{
                console.log("order", data);
                const order = await actions.order?.capture()
                console.log("order", order);
            }}
            onError={async (data, actions) =>{
                console.log("error");
            }}
        />
    )
}
export default PayPalButton;