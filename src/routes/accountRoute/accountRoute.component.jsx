import { Route, Routes } from "react-router-dom";
import AccountPage from "../accountPage/accountPage.component";

// TESTING
import AboutPage from "../aboutPage/aboutPage.component";


const AccountRoute = () => {
    return (
        <Routes>
            <Route index element={<AccountPage/>}/>
            <Route path="orders" element={<AboutPage/>}/>
        </Routes>
    )
}

export default AccountRoute;