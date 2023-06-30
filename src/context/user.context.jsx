import { createContext, useState, useEffect} from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth, addCollectionAndDocuments} from '../utiles/firebase/firebase.utiles'

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
    setInputIntoForm: () => {}
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [formAddress, setFormAddress] = useState(defaultFormAdress)
    const [formCard, setFormCard] = useState(defaultFormCard)
    const [paymentPageComplete, setPaymentPageComplete] = useState(false)

    // TESTING TODO REDOO THE PAYMENT
    const createPaymentDocument = async (address, card, items, userEmail) => {  
        const date = new Date().getTime()
        const paymentDocument = [{
            title: `${userEmail}`,
            items: {address, card, items, userEmail, date}
        }]
        await addCollectionAndDocuments('payment', paymentDocument)
        setPaymentPageComplete(true)
    };

    useEffect(() => { console.log(formAddress) },[formAddress])
    
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
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}