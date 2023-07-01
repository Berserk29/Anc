import { useContext } from "react";
import AccBoilerplate from "../../component/accBoilerplate/accBoilerplate.component";

import { UserContext } from "../../context/user.context";

import { FlexContainer } from "./accOrders.styled";


const AccOrders = () => {
    const {ordersMap} = useContext(UserContext)

    const todayDate = new Date().getTime()
    console.log(ordersMap.map(el => el.date))
    console.log(todayDate)

    return (
        <AccBoilerplate heading='My Orders' text='Review your purchase made online or in-stores'>
            <FlexContainer>
                Orders
            </FlexContainer>
        </AccBoilerplate>
    )
}

export default AccOrders;