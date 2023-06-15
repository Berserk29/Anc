import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth} from '../utiles/firebase/firebase.utiles'

const defaultFormAdress = {
    country: 'Canada',
    fullName: '',
    phoneNumber: '',
    address: '',
    city: '',
    province: '',
    postal: '',
}

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    formAdress: defaultFormAdress,
    setFormAdress: () => {},
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [formAdress, setFormAdress] = useState(defaultFormAdress)

    const value = {currentUser, setCurrentUser, formAdress, setFormAdress};

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