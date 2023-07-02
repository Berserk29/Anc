import { useNavigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import mediaQuery from "../../helper/mediaQuery"

import Typo, {TypoType} from "../typo/typo.component"
import { AccountContainer, SubTitleContainer, AccountBox, TitleContainer, LogoutContainer, FlexContainer } from "./accBoilerplate.styled"
import { titleArr } from "../../routes/accountPage/accountPage.data"
import { signOutUser } from "../../utiles/firebase/firebase.utiles"

const AccBoilerplate = ({children, heading, text, gap , media = false}) => {
    const navigate = useNavigate();

    const isTablet = useMediaQuery(mediaQuery.useTablet)

    const titleHandler = (link) => navigate(`/account${link}`)

    const logoutHandler = () => signOutUser();

    const subTitleChoice = () => {
        return (
            <SubTitleContainer>
                <AccountBox onClick={() => titleHandler('')}>
                    <Typo type={TypoType.headline_4} color='black' hover={true}>My Account</Typo>
                </AccountBox>
                <TitleContainer>
                    {titleArr.map((el,i) => {
                        return (
                            <div key={i} onClick={() => titleHandler(el.link)}>
                                <Typo type={TypoType.body_3} color='black' hover={true} >{el.title}</Typo>
                            </div>  
                        )
                    })}
                    <LogoutContainer onClick={logoutHandler}>
                        <Typo type={TypoType.body_3} color='black' hover={true} >Logout</Typo>
                    </LogoutContainer> 
                </TitleContainer>
            </SubTitleContainer>
        )
    }

    return (
        <AccountContainer>
            { media && isTablet ? '' : subTitleChoice() }
            <FlexContainer gap={gap}>
                <div>
                    <Typo type={TypoType.arialSize} size='4rem' weight='700' color='black'>{heading}</Typo>
                    <Typo type={TypoType.arialSize} size='1.6rem' transform='none' color='var(--color-hover)' marginTop='1.6'>{text}</Typo>
                </div>
                {children}
            </FlexContainer>
        </AccountContainer>
    )
}

export default AccBoilerplate;