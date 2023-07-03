import { useContext } from "react";

import AccBoilerplate from "../../component/accBoilerplate/accBoilerplate.component";
import OrderCard from "../../component/orderCard/orderCard.component";
import Typo, { TypoType } from "../../component/typo/typo.component";
import NoProduct from "../../component/noProduct/noProduct.component";

import { UserContext } from "../../context/user.context";

import { FlexContainer, TitleContainer } from "./accOrders.styled";


const AccOrders = () => {
    const { ordersMap } = useContext(UserContext)
    const todayDate = new Date().getTime();
    
    const time = (date, plusNumOfDay = 0 ) => {
        const addDay = 1000 * 60 * 60 * 24 * plusNumOfDay
        const findDate = new Date(date + addDay)
        const day = findDate.getDate();
        const month = findDate.toLocaleString('en-GB', { month: 'long' });
        const year = findDate.getFullYear();
        return new Date([day, month, year]).getTime()
    }

    const todayOrder = ordersMap?.filter((el) => time(el.date) === time(todayDate))
    const weekOrder = ordersMap?.filter((el) => time(el.date , 7) >= time(todayDate) && time(el.date) !== time(todayDate))
    const monthOrder = ordersMap?.filter((el) =>  time(el.date , 30) >= time(todayDate) && time(el.date, 7) < time(todayDate))
    const sixMonthOrder = ordersMap?.filter((el) => time(el.date , 180) >= time(todayDate) && time(el.date, 30) < time(todayDate))

    const orderCardLogic = ( modifiedOrder, text ) => {
        if(modifiedOrder?.length === 0 || !modifiedOrder) return;
        return (    
            <FlexContainer>
                <TitleContainer>
                    <Typo type={TypoType.headline_4} color='black' marginBottom='1.6'>{text}</Typo>
                </TitleContainer>
                {modifiedOrder.map((el,i) => <OrderCard key={i} props={el}/>)}
            </FlexContainer>  
        )
    }


    return (
        <AccBoilerplate heading='My Orders' gap={ordersMap?.length ? '4rem': '10rem'} text='Review your purchase made online or in-stores'>
            { ordersMap?.length ? 
                <>
                    {orderCardLogic(todayOrder, 'Today')}
                    {orderCardLogic(weekOrder, 'Past week')}
                    {orderCardLogic(monthOrder, 'Past month')}
                    {orderCardLogic(sixMonthOrder, 'Past 6 months')}
                </> : 
                <NoProduct type={'orders'}/>
            }
        </AccBoilerplate>
    )
}

export default AccOrders;