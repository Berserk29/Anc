import { createContext, useState, useEffect } from "react";
import { getProductsAndDocuments } from "../utiles/firebase/firebase.utiles";
// import { addCollectionAndDocuments } from "../utiles/firebase/firebase.utiles";
// import SHOP_DATA, { isNewData, LOOKBOOK_DATA } from "../../shop-data";


export const ProductsContext = createContext({
    productsMap: {},
    sectionImgMap: {},
    isLoading: true,
});

export const ProductsProvider = ({children}) => {
    const [productsMap, setProductsMap] = useState({});
    const [sectionImgMap, setSectionImgMap] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    
    // INFO Only use one time for sending data to Firebase //
    
    // useEffect(() => {
    //     addCollectionAndDocuments('products', isNewData)
    // }, [])

    useEffect(() => {
        const getProductsMap = async () => {
            setIsLoading(true)
            const productMap = await getProductsAndDocuments('products');
            setProductsMap(productMap);
            const sectionImg = await getProductsAndDocuments('sectionImg');
            setSectionImgMap(sectionImg)
            setIsLoading(false)
        }
        getProductsMap();
    }, [])



    const value = { productsMap, sectionImgMap, isLoading };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};