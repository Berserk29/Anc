import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import NavFooter from "../../component/navFooter/navFooter.component";
import CardAccount from "../../component/cardAccount/cardAccount.component";
import Typo, {TypoType} from "../../component/typo/typo.component";
import { titleArr, cardArr } from "./accountPage.data";

import { 
    AccountContainer,
    FlexContainer,
    GridContainer,
    SubTitleContainer,
    TitleContainer,
    FaqContainer,
    AccountBox
} from './accountPage.styled'
import { useContext } from "react";
import { UserContext } from "../../context/user.context";


const AccountPage = () => {
    const {currentUser} = useContext(UserContext)
    const {displayName} = currentUser
   
    const navigate = useNavigate();
    const isTablet = useMediaQuery(mediaQuery.useTablet)

    const titleHandler = (link) => navigate(`/account${link}`)

    const subTitleChoice = () => {
        return (
            <SubTitleContainer>
                <AccountBox>
                    <Typo type={TypoType.headline_4} color='black'>My Account</Typo>
                </AccountBox>
                <TitleContainer>
                    {titleArr.map((el,i) => {
                        return (
                            <div key={i} onClick={() => titleHandler(el.link)}>
                                <Typo type={TypoType.body_3} color='black' hover={true} >{el.title}</Typo>
                            </div>  
                        )
                    })}
                    <FaqContainer>
                        <Typo type={TypoType.body_3} color='black' hover={true} >FAQ</Typo>
                        <Typo type={TypoType.body_3} color='black' hover={true} >Logout</Typo>
                    </FaqContainer>
                </TitleContainer>
            </SubTitleContainer>
        )
    }

    return (
        <NavFooter color="white">
            <AccountContainer>
                { !isTablet ? subTitleChoice() : ''}
                <FlexContainer>
                        <div>
                            <Typo type={TypoType.headline_1} color='black'>Hi, {displayName ? displayName : 'User'}</Typo>
                            <Typo type={TypoType.body_5} color='black'>What would you like to do today?</Typo>
                        </div>
                    <GridContainer>
                            {cardArr.map((el,i) => <CardAccount key={i} props={el}/>)}
                    </GridContainer>
                </FlexContainer>
            </AccountContainer>
        </NavFooter>
    )
}

export default AccountPage;