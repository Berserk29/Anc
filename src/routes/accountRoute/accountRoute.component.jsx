import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AccountPage from "../accountPage/accountPage.component";
import SignInPage from "../signInPage/signInPage.component";


// TESTING TODO THE ORDERS PATH NEED TO BRING TO AN OTHER PAGE
// TODO IF NO IDENTIFICATION NEED TO SIGN IN

const AccountRoute = () => {
    //  TESTING THE IDENTIFICATION PATH
    const [isUserConnect, setIsUserConnect] = useState(true)

    return (
       <>
        { isUserConnect ?
            <Routes>
                <Route index element={<AccountPage/>}/>
                <Route path="orders" element={<AccountPage/>}/>
            </Routes>
        :
            <Routes>
                <Route index element={<SignInPage/>}/>
            </Routes>
        }
       </> 
    )
}

export default AccountRoute;