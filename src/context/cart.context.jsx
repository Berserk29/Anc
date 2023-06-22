import { createContext, useState, useEffect} from "react";
import { provinceArr } from "../routes/orderPage/orderPage.data";

const cartLogic = (bolean, cartItem, product) => {
    if(bolean) return cartItem.id === product.id && cartItem.size === product.size;
    if(!bolean) return !(cartItem.id === product.id && cartItem.size === product.size);
}

const addCartItem = (cartItems, productToAdd, quantity) => {
    const existingCartItem = cartItems.find((cartItem) => cartLogic(true, cartItem, productToAdd));
    
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartLogic(true, cartItem, productToAdd) ? {...cartItem, quantity: cartItem.quantity + +quantity} : cartItem)
    }

    return [...cartItems, {...productToAdd}];
}

const subtractCartItem = (cartItems, productToSubtract) => {
    const existingCartItem = cartItems.find((cartItem) => cartLogic(true, cartItem, productToSubtract));
    
    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartLogic(false, cartItem, productToSubtract))
    }
    
    return cartItems.map((cartItem) => cartLogic(true, cartItem, productToSubtract) ?
        {...cartItem, quantity: cartItem.quantity - 1} : cartItem 
    )
       
}

const removeCartItem = (cartItems, productToRemove) => cartItems.filter((cartItem) => cartLogic(false, cartItem, productToRemove) )

const getInitialState = () => {
    const cartItemsData = localStorage.getItem('CART_ITEMS')
    return cartItemsData ? JSON.parse(cartItemsData) : [];
}

export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    cartItemsCount: 0,
    cartTotalPrice: 0,
    addItemToCart: () => {},
    subtractItemToCart: () => {},
    removeItemToCart: () => {},
    shippingCost: 0,
    totalBeforeTax: 0,
    federalTax: 0,
    provincialTax: 0,
    taxLogic: () => {},
    totalAfterTax: 0,
    removeAllItems: () => {}
})

// Provider
export const CartProvider = ({children}) => {
    const [isCartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState(getInitialState);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const [federalTax, setFederalTax] = useState(0);
    const [provincialTax, setProvincialTax] = useState(0);
    
    
    useEffect(() => {
        localStorage.setItem('CART_ITEMS', JSON.stringify( cartItems ))
        const totalCartItems = cartItems.reduce((acc, curEl) => acc + curEl.quantity, 0)
        const totalCartPrice = cartItems.reduce((acc, curEl) => acc + (curEl.quantity * curEl.price), 0);
        setCartItemsCount(totalCartItems)
        setCartTotalPrice(totalCartPrice)
    }, [cartItems])
    
    const removeAllItems = () => setCartItems([])

    // shippingCost = (item * 1.40$) + (0.5% cartTotalPrice) 
    const shippingCost = (cartItemsCount * 1.40) + (cartTotalPrice * 0.5 / 100);
    const totalBeforeTax = cartTotalPrice + shippingCost;

    const taxLogic = (province) => {
        if(!province) {
            setFederalTax(0)
            setProvincialTax(0)
            return ;
        }
        const findArr = provinceArr.find((el) => el.name === province)
        setFederalTax(+(totalBeforeTax * findArr.federalTax / 100).toFixed(2))
        setProvincialTax(+(totalBeforeTax * findArr.provincialTax / 100).toFixed(2))
    }
    
    const totalAfterTax = totalBeforeTax + federalTax + provincialTax;

    const addItemToCart = (productToAdd, quantity) => setCartItems(addCartItem(cartItems, productToAdd, quantity))
    const subtractItemToCart = (productToSubtract) => setCartItems(subtractCartItem(cartItems, productToSubtract))
    const removeItemToCart = (productToRemove) => setCartItems(removeCartItem(cartItems, productToRemove))
    
    const value = {
        isCartOpen,
        setCartOpen,
        cartItems,
        setCartItems,
        addItemToCart,
        subtractItemToCart,
        removeItemToCart,
        cartItemsCount,
        cartTotalPrice,
        shippingCost,
        totalBeforeTax,
        federalTax,
        provincialTax,
        taxLogic,
        totalAfterTax,
        removeAllItems        
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}