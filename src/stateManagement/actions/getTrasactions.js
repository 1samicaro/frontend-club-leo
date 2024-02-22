export const GET_TRANSACTIONS = "GET_TRANSACTIONS"
export const GET_PAYPAL = "GET_PAYPAL"

export function transactionsHistory(transactions){
    return {
        type: GET_TRANSACTIONS,
        payload: transactions
    }
}

export function getPayPalCompleted (payPalAnswer){
    return {
        type: GET_PAYPAL,
        payload: payPalAnswer
    }
}