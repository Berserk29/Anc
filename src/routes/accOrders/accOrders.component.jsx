import { useContext } from "react";

import AccBoilerplate from "../../component/accBoilerplate/accBoilerplate.component";
import OrderCard from "../../component/orderCard/orderCard.component";
import Typo, { TypoType } from "../../component/typo/typo.component";

import { UserContext } from "../../context/user.context";

import { FlexContainer, TitleContainer } from "./accOrders.styled";

const AccOrders = () => {
    const {ordersMap} = useContext(UserContext)
    const todayDate = new Date().getTime();
    const day = 1000 * 60 * 60 * 24


    const todayOrder = ordersMap.filter((el) => el.date + day > todayDate)
    const weekOrder = ordersMap.filter((el) => el.date + (day * 7 ) > todayDate && el.date + day < todayDate)
    const monthOrder = ordersMap.filter((el) => el.date + (day * 30 ) > todayDate && el.date + (day * 7 ) < todayDate)
    const sixMonthOrder = ordersMap.filter((el) => el.date + (day * 180 ) > todayDate && el.date + (day * 30 ) < todayDate)

    console.log(todayOrder)
    console.log(weekOrder)
    console.log(monthOrder)
    console.log(sixMonthOrder)


    return (
        <AccBoilerplate heading='My Orders' gap='4rem' text='Review your purchase made online or in-stores'>

            <FlexContainer>
                <TitleContainer>
                    <Typo type={TypoType.headline_4} color='black' marginBottom='1.6'>Today</Typo>
                </TitleContainer>
                {ordersMap.map((el,i) => <OrderCard key={i} props={el}/>)}
            </FlexContainer>

            <FlexContainer>
                <TitleContainer>
                    <Typo type={TypoType.headline_4} color='black' marginBottom='1.6'>Today</Typo>
                </TitleContainer>
                {ordersMap.map((el,i) => <OrderCard key={i} props={el}/>)}
            </FlexContainer>

        </AccBoilerplate>
    )
}

export default AccOrders;