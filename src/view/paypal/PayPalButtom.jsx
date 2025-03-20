import { PayPalButtons } from "@paypal/react-paypal-js"
import React from "react"
import { getPayPalCompleted } from "../../stateManagement/actions/getTrasactions"
import { useDispatch } from "react-redux"

const PayPalButton = (props)=>{

    const dispatch = useDispatch()

    return(
        <PayPalButtons 
            // createOrder={(data, actions)=>{
            createOrder={(_, actions)=>{
                console.log("ingresa paypal");
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
                console.log(actions.order?.capture());
                const order = await actions.order?.capture()
                console.log("order", order);
                if(order.status ==="COMPLETED"){
                    dispatch(getPayPalCompleted(true))
                }
            }}
            onError={async (data, actions) =>{
                console.log(data);
                console.log(actions);
                console.log("error");
            }}
        />
    )
}
export default PayPalButton;