import { createContext, useState, useEffect} from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth, addPaymentDocument, getProductsAndDocuments} from '../utiles/firebase/firebase.utiles'

const defaultFormAdress = {
    country: 'Canada',
    fullName: '',
    phoneNumber: '',
    address: '',
    city: '',
    province: '',
    postal: '',
}

const defaultFormCard = {
    cardNumber: '0000-0000-0000-0000',
    name: '',
    month: '',
    year: '',
    security: '',
}


// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    formAddress: defaultFormAdress,
    formCard: defaultFormCard,
    setFormAddress: () => {},
    setFormCard: () => {},
    paymentPageComplete: false,
    setPaymentPageComplete: () => {},
    setInputIntoForm: () => {},
    ordersMap: {},
    setRefreshOrder: () => {},
    refreshOrder: 0
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [formAddress, setFormAddress] = useState(defaultFormAdress)
    const [formCard, setFormCard] = useState(defaultFormCard)
    const [paymentPageComplete, setPaymentPageComplete] = useState(false)
    const [ordersMap, setOrdersMap] = useState([])
    const [refreshOrder, setRefreshOrder] = useState(0)

    const createPaymentDocument = async (address, card, cartItems, userEmail) => {  
        const date = new Date().getTime()
        const paymentDocument = [{
            title: currentUser.uid.toLowerCase(),
            owner: currentUser.uid,
            items: [{address, card, cartItems, userEmail, date}]
        }]
        const orderHistory = [{
            title: currentUser.uid.toLowerCase(),
            owner: currentUser.uid,
            items: [{ date, cartItems }] 
        }]
        
        await addPaymentDocument('orderHistory', orderHistory);
        await addPaymentDocument('payment', paymentDocument);
        
        window.scrollTo(0, 0);
        setPaymentPageComplete(true)
    };
    
    // Keep track (Observer) of all change for Auth! 
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        })
        
        return unsubscribe
    }, [])

    // Bring orderHistory and connect with currentUser
    useEffect(() => {
        if(!currentUser) return;
        const getProductsMap = async () => {
            const orderHistory = await getProductsAndDocuments('orderHistory');
            const curUid = currentUser?.uid.toLowerCase()
            if(!orderHistory || !curUid) return ;
            setOrdersMap(orderHistory[curUid])
        }
        getProductsMap();

    }, [currentUser, refreshOrder])
    
    const value = {
        currentUser,
        setCurrentUser,
        formAddress,
        setFormAddress,
        formCard,
        setFormCard,
        createPaymentDocument,
        paymentPageComplete,
        setPaymentPageComplete,
        ordersMap,
        setRefreshOrder,
        refreshOrder
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}