import { createContext, useEffect, useState} from "react";

const addLikedItem = (likedItems, productToAdd) => {
    return [...likedItems, {...productToAdd }]
}

const subtractLikedItem = (likedItems, productToSubtract) => {
    return likedItems.filter((cartItem) => cartItem.id !== productToSubtract.id)    
}

const getInitialState = () => {
    const likedData = localStorage.getItem('LIKED_ITEMS')
    return likedData ? JSON.parse(likedData) : [];
}


export const LikedContext = createContext({
    isLiked: false,
    likedItems: [],
    likedBtnHandler: (product) => {product},
    openPageLiked: (product) => {product},
    navButton: 0,
    setNavButton: () => {},
})

// Provider
export const LikedProvider = ({children}) => {
    const [likedItems, setLikedItems] = useState(getInitialState)
    const [isLiked, setIsLiked] = useState(false);
    const [navButton, setNavButton] = useState(0)

    useEffect(() => {
        localStorage.setItem('LIKED_ITEMS', JSON.stringify(likedItems))
    }, [likedItems])

    const addItemToLiked = (productToAdd) => {
        setIsLiked(true)
        setLikedItems(addLikedItem(likedItems, productToAdd))
    }
    const subtractItemToLiked = (productToSubtract) => {
        setIsLiked(false)
        setLikedItems(subtractLikedItem(likedItems, productToSubtract))
    }

    // Use inside Click event, compare the product with likedItems, add or subtract the product
    const isProductLiked = (product) => {
        if(!likedItems || !product) return;
        if(likedItems?.length === 0) return addItemToLiked(product)
        const isTheProductLiked = likedItems?.some(el => el.id === product?.id);
    
        if(isTheProductLiked) { 
            subtractItemToLiked(product)
        } else { 
            addItemToLiked(product)
        }
    }

    // Use inside a useEffect, change isLiked at the begining 
    const openPageLiked = (product) => {
        if(!likedItems || !product) return;
        const isProductLiked = likedItems.some(el => el.id === product.id);
        if(isProductLiked) return setIsLiked(true);
        else return setIsLiked(false)
    }

    const likedBtnHandler = (product) => isProductLiked(product);
    
    const value = {
        isLiked,
        likedItems,
        openPageLiked,
        likedBtnHandler,
        navButton,
        setNavButton
    }

    return <LikedContext.Provider value={value}>{children}</LikedContext.Provider>
}