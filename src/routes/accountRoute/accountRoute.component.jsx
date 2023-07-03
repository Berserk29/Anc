import { Route, Routes } from "react-router-dom";

import AccountPage from "../accountPage/accountPage.component";

import AccFavorite from "../accFavorite/accFavorite.component";
import AccOrders from "../accOrders/accOrders.component"
import AccPayment from "../accPayment/accPayment.component"
import AccAddress from "../accAddress/accAddress.component"
import AccProfile from "../accProfile/accProfile.component"


const AccountRoute = () => {

    return (
            <Routes>
                <Route index element={<AccountPage/>}/>
                <Route path="favorite" element={<AccFavorite/>}/>
                <Route path="orders" element={<AccOrders/>}/>
                <Route path="payment" element={<AccPayment/>}/>
                <Route path="address" element={<AccAddress/>}/>
                <Route path="profile" element={<AccProfile/>}/>
            </Routes>
    )
}

export default AccountRoute;