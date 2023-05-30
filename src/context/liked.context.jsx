import { createContext, useState} from "react";

const addLikedItem = (likedItems, productToAdd) => {
    return [...likedItems, {...productToAdd}]
}

const subtractLikedItem = (likedItems, productToSubtract) => {
    return likedItems.filter((cartItem) => cartItem.id !== productToSubtract.id)    
}

export const LikedContext = createContext({
    isLiked: false,
    likedItems: [],
})

// Provider
export const LikedProvider = ({children}) => {
    const [likedItems, setLikedItems] = useState([])
    const [isLiked, setIsLiked] = useState(false);

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
        if(likedItems.length === 0) return addItemToLiked(product)
        const isTheProductLiked = likedItems.some(el => el.id === product.id);
    
        if(isTheProductLiked) { 
            subtractItemToLiked(product)
        } else { 
            addItemToLiked(product)
        }
    }

    // Use inside a useEffect, change isLiked at the begining 
    const openPageLiked = (product) => {
        const isProductLiked = likedItems.some(el => el.id === product.id);
        if(isProductLiked) return setIsLiked(true);
        else return setIsLiked(false)
    }

    const value = {
        isLiked,
        setIsLiked,
        likedItems,
        isProductLiked,
        openPageLiked,
    }

    return <LikedContext.Provider value={value}>{children}</LikedContext.Provider>
}