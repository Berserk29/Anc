import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import Typo, {TypoType} from "../typo/typo.component";
import Table from "../table/table.component";
import { Input, InputSmall } from "../table/table.styled";
import { UserContext } from "../../context/user.context";

import { monthArr, cvvIcon, yearArr } from "./formCard.data";

import { GridContainer, ImgIcon, BoxSelect, Expiration, CvvContainer, CvvInput } from "./formCard.styled";

import { tableTypeChoice, handleChange } from "../../helper/formFunction";

const FormCard = ({orderPage = false}) => {
    const {formCard, setFormCard} = useContext(UserContext)

    const isMobile = useMediaQuery(mediaQuery.useMobile)

    const InputChoice = () => {
        return (
             !isMobile ? 
             <Input 
             type="text"
             id='name'
             required onChange={(event) => handleChange(setFormCard, formCard, event)}
             value={formCard.name}
             autoComplete='name'
             /> 
             :
             <InputSmall
             type="text"
             id='name'
             required onChange={(event) => handleChange(setFormCard, formCard, event)}
             value={formCard.name}
             autoComplete='name'
             /> 
        )
    }

    return (
        <div>
            { orderPage || !isMobile ? <Typo type={TypoType.headline_4} color='black' marginBottom='1.6'>Credit or Debit card</Typo> : ''}
            <GridContainer>
                {/* Card Number */}
                <Table type={tableTypeChoice('heading', !isMobile)}>Card Number</Table>
                <Table type={tableTypeChoice('fixed', !isMobile)}>0000-0000-0000-0000</Table>
                {/* NameOnCard */}
                <Table type={tableTypeChoice('labelHeading', !isMobile)} id='name'>Name on card {!isMobile && '*'}</Table>
                {InputChoice()}
                {/* Expiration */}
                <Table type={tableTypeChoice('labelHeading', !isMobile)} id='month'>Expiration date {!isMobile && '*'}</Table>
                <BoxSelect>
                <Expiration onChange={(event) => handleChange(setFormCard, formCard, event)} id="month" required defaultValue={formCard.month}>
                    <option value='' >MM</option>
                    {monthArr.map((el,i) => <option key={i} value={el}>{el}</option>)}
                </Expiration>
                <Expiration onChange={(event) => handleChange(setFormCard, formCard, event)} id="year" required defaultValue={formCard.year}>
                    <option value=''>YYYY</option>
                    {yearArr.map((el,i) => <option key={i} value={el}>{el}</option>)}
                </Expiration>
                </BoxSelect>
                {/* CVV */}
                <Table type={tableTypeChoice('labelHeading', !isMobile)} id='security' >Security Code (CVV) {!isMobile && '*'}</Table>
                <CvvContainer>
                    <CvvInput
                        type="tel"
                        id="security"
                        required onChange={(event) => handleChange(setFormCard, formCard, event)}
                        value={formCard.security}
                    />
                    <ImgIcon src={cvvIcon} alt="cvv icon" />
                </CvvContainer>
            </GridContainer>
        </div>        
    )
}

export default FormCard;