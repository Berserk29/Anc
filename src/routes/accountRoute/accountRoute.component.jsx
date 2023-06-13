import { Route, Routes } from "react-router-dom";
import AccountPage from "../accountPage/accountPage.component";


const AccountRoute = () => {

    return (
        <Routes>
            <Route index element={<AccountPage/>}/>
            <Route path="orders" element={<AccountPage/>}/>
        </Routes>
    )
}

export default AccountRoute;