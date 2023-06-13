import { createContext, useState, useEffect} from "react";

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
})

// Provider
export const CartProvider = ({children}) => {
    const [isCartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [shippingCost, setShippingCost] = useState(0)
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);



    useEffect(() => {
        const totalCartItems = cartItems.reduce((acc, curEl) => acc + curEl.quantity, 0)
        setCartItemsCount(totalCartItems)
        setShippingCost(totalCartItems * 1.40 )
    }, [cartItems])

    useEffect(() => {
        const totalCartPrice = cartItems.reduce((acc, curEl) => acc + (curEl.quantity * curEl.price), 0);
        setCartTotalPrice(totalCartPrice)
    }, [cartItems])

    const totalBeforeTax = cartTotalPrice + shippingCost;
    
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
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}