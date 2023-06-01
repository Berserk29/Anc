import { createContext, useEffect, useState} from "react";

// Function 
const orderNumLogic = (orderNum) => {
    if(orderNum >= 10) return 10;
    if(orderNum <= 0) return 1;
    return orderNum
}

const priceDiscountLogic = (product) => {
    if(!product) return ''
    if(product.isNew === true) return (product.price * 90 / 100).toFixed(2);
    return product.price
}

const addProductLogic = (productToAdd, sizeNum, orderNum, newPrice) => {
    return {
        ...productToAdd,
        size: productToAdd?.size[sizeNum] || "",
        quantity: orderNum,
        price: +newPrice,
        totalPrice : +newPrice * orderNum,
    }
}

// Context
export const OrderContext = createContext({
    orderNumber: 1,
    btnSizeActiveNum: 0,
    orderProduct: (product) => {product},
    btnSizeHandler: (i) => {i},
    addOrderNumber: () => {},
    subtractOrderNumber: () => {},
    isProductDiscount: (product) => {product},
    addProductOrder: (product) => {product},
})

    // Provider
export const OrderProvider = ({children}) => {
    const [orderNumber, setOrderNumber] = useState(1);
    const [newPrice, setNewPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [btnSizeActiveNum, setBtnSizeActiveNum] = useState(0);

    useEffect(() => {
        const total = (newPrice * orderNumber).toFixed(2);
        setTotalPrice(total)
    }, [newPrice, orderNumber])
    
    const addProductOrder =  (productToAdd) => {
        const modifyProduct = addProductLogic(productToAdd, btnSizeActiveNum, orderNumber, newPrice);
        return modifyProduct
    }

    const addOrderNumber = () => setOrderNumber(orderNumLogic(orderNumber + 1));
    const subtractOrderNumber = () => setOrderNumber(orderNumLogic(orderNumber - 1));
    const btnSizeHandler = (i) => setBtnSizeActiveNum(i);
    const isProductDiscount = (product) => setNewPrice(priceDiscountLogic(product))

    const value = {
        orderNumber,
        addOrderNumber,
        subtractOrderNumber,
        btnSizeHandler,
        btnSizeActiveNum,
        addProductOrder,
        isProductDiscount,
        newPrice,
        totalPrice,
    }

    return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}