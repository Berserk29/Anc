import { createContext, useState, useEffect } from "react";
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
    nameOnCard: '',
    month: '',
    year: '',
    security: '',
}

// TESTING TODO Create a payment document
const createPaymentDocument = (formAddress, formCard, cartItems, currentUser) => {
   const paymentDocument = [
    {
        title: 'address',
        items: [formAddress]
    },
    {
        title: 'card',
        items: [formCard]
    },
    {
        title: 'cartItems',
        items: [cartItems]
    },
    {
        title: 'user',
        items: [currentUser]
    },
    ]
    return paymentDocument;
}

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    formAddress: defaultFormAdress,
    formCard: defaultFormCard,
    setFormAddress: () => {},
    setFormCard: () => {},
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [formAddress, setFormAddress] = useState(defaultFormAdress)
    const [formCard, setFormCard] = useState(defaultFormCard)

    const value = {currentUser, setCurrentUser, formAddress, setFormAddress, formCard, setFormCard};

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



    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}