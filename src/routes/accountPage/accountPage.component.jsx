import CardAccount from "../../component/cardAccount/cardAccount.component";
import AccBoilerplate from "../../component/accBoilerplate/accBoilerplate.component";
import { cardArr } from "./accountPage.data";

import { 
    GridContainer,
} from './accountPage.styled'
import { useContext } from "react";
import { UserContext } from "../../context/user.context";


const AccountPage = () => {
    const {currentUser} = useContext(UserContext)
    const {displayName} = currentUser
   
    return (
        <AccBoilerplate heading={`Hi, ${displayName ? displayName : 'User'}`} text={'What would you like to do today?'} media={true}>
            <GridContainer>
                {cardArr.map((el,i) => <CardAccount key={i} props={el}/>)}
            </GridContainer>
        </AccBoilerplate>
    )
}

export default AccountPage;