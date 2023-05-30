import { createContext, useState } from "react";

const orderNumLogic = (orderNum) => {
    if(orderNum >= 10) return 10;
    if(orderNum <= 0) return 1;
    return orderNum
}
export const OrderContext = createContext({
    orderNumber: 1,
    orderProduct: {},
})

export const OrderProvider = ({children}) => {
    const [orderNumber, setOrderNumber] = useState(1);
    // const [orderProduct, setOrderProduct] = useState({})

    // TODO CREATE THE ORDERPRODUCT HERE AND SEND TO THE CART 
    

    const addOrderNumber = () => setOrderNumber(orderNumLogic(orderNumber + 1));
    const subtractOrderNumber = () => setOrderNumber(orderNumLogic(orderNumber - 1))
    const value = {
        orderNumber,
        addOrderNumber,
        subtractOrderNumber,
    }

    return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}