import { createContext, useState, useEffect } from "react";
import { getProductsAndDocuments } from "../utiles/firebase/firebase.utiles";

// import SHOP_DATA from "../../shop-data";
// import { isNewData } from "../../shop-data";
// import { addCollectionAndDocuments } from "../utiles/firebase/firebase.utiles";



export const ProductsContext = createContext({
    productsMap: {},
    isLoading: true,
});

export const ProductsProvider = ({children}) => {
    const [productsMap, setProductsMap] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    
    // Only use one time for sending Shop_Data to Firebase //
    // useEffect(() => {
    //     addCollectionAndDocuments('products', isNewData )
    // }, [])

    useEffect(() => {
        const getProductsMap = async () => {
            setIsLoading(true)
            const productMap = await getProductsAndDocuments();
            setProductsMap(productMap)
            setIsLoading(false)
        }
        getProductsMap();
    }, [])

    const value = { productsMap, isLoading };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};