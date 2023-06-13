import { createContext, useState, useEffect} from "react";

// TODO NEED TO DO RESEARCH BY ID AND SIZE! Modify addCartItem and SubtractCartItem!!!!!

const addCartItem = (cartItems, productToAdd) => {    
    return [...cartItems, {...productToAdd}];
}

const subtractCartItem = (cartItems, productToSubtract) => {
    const existingCartItem = cartItems.find((cartItem) => 
    cartItem.id === productToSubtract.id);
    
    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToSubtract.id )
    }
    
    return cartItems.map((cartItem) => cartItem.id === productToSubtract.id ?
    {...cartItem, quantity: cartItem.quantity - 1} : cartItem );
    
}

const removeCartItem = (cartItems, productToRemove) => 
cartItems.filter((cartItem) => cartItem.id !== productToRemove.id )

export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    cartItemsCount: 0,
    cartTotalPrice: 0,
    addItemToCart: () => {},
    subtractItemToCart: () => {},
    removeItemToCart: () => {},
})

// Provider
export const CartProvider = ({children}) => {
    const [isCartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);

    useEffect(() => {
        const totalCartItems = cartItems.reduce((acc, curEl) => acc + curEl.quantity, 0)
        setCartItemsCount(totalCartItems)
    }, [cartItems])

    useEffect(() => {
        const totalCartPrice = cartItems.reduce((acc, curEl) => acc + (curEl.quantity * curEl.price), 0);
        setCartTotalPrice(totalCartPrice)
    }, [cartItems])
    
    const addItemToCart = (productToAdd) => setCartItems(addCartItem(cartItems, productToAdd))
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
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}