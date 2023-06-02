import NavFooter from "../../component/navFooter/navFooter.component";
import { AccountContainer, FlexContainer, GridContainer, SubTitleContainer } from './accountPage.styled'
import Typo, {TypoType} from "../../component/typo/typo.component";
import { titleArr, cardArr } from "./accountPage.data";
import { useNavigate } from "react-router-dom";
import CardAccount from "../../component/cardAccount/cardAccount.component";


const AccountPage = () => {
    const navigate = useNavigate()

    const titleHandler = (link) => navigate(`/account${link}`)

    return (
        <NavFooter color="white">
            <AccountContainer>
                    <SubTitleContainer>
                        <Typo type={TypoType.headline_4} color='black'>My Account</Typo>
                        <div>
                            {titleArr.map((el,i) => {
                                return (
                                    <div key={i} onClick={() => titleHandler(el.link)}>
                                        <Typo type={TypoType.body_3} color='black' hover={true} >{el.title}</Typo>
                                    </div>  
                                )
                            })}
                        </div>
                    </SubTitleContainer>
                    <FlexContainer>
                        <div>
                            <Typo type={TypoType.headline_1} color='black'>Hi, User</Typo>
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