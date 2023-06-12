import { Route, Routes } from "react-router-dom";
import AccountPage from "../accountPage/accountPage.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import SignInPage from "../signInPage/signInPage.component";


// TESTING TODO THE ORDERS PATH NEED TO BRING TO AN OTHER PAGE

const AccountRoute = () => {
    const {currentUser} = useContext(UserContext)


    return (
            <Routes>
        {
        currentUser ? 
            <>
                <Route index element={<AccountPage/>}/>
                <Route path="orders" element={<AccountPage/>}/>
            </>
            :
            <>
                <Route index element={<SignInPage/>}/>
                <Route path="orders" element={<SignInPage/>}/>
            </>
            
        }
        </Routes>
    )
}

export default AccountRoute;