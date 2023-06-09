import { Route, Routes } from "react-router-dom";
import AccountPage from "../accountPage/accountPage.component";


// TESTING TODO THE ORDERS PATH NEED TO BRING TO AN OTHER PAGE
// TODO IF NO IDENTIFICATION NEED TO SIGN IN

const AccountRoute = () => {

    return (
        <Routes>
            <Route index element={<AccountPage/>}/>
            <Route path="orders" element={<AccountPage/>}/>
        </Routes>
    )
}

export default AccountRoute;