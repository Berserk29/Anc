import { Fragment, useContext} from "react";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import Typo, {TypoType} from "../typo/typo.component";
import Table from "../table/table.component";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { addressInputArr, provinceArr  } from "./formAddress.data";

import { GridContainer, BoxSelect, SelectCss} from "./formAddress.styled";
import { Input, InputSmall } from "../table/table.styled";

import { tableTypeChoice, handleChange } from "../../helper/formFunction";


const FormAddress = ({orderPage = false}) => {
    const {formAddress, setFormAddress} = useContext(UserContext);
    const { taxLogic } = useContext(CartContext);

    const isMobile = useMediaQuery(mediaQuery.useMobile);

    const InputChoice = (type, id, autoComplete) => {
       return (
            !isMobile ? 
            <Input 
            type={type}
            id={id}
            required onChange={(event) => handleChange(setFormAddress, formAddress, event)}
            value={formAddress[id]}
            autoComplete={autoComplete}
            /> 
            :
            <InputSmall
            type={type}
            id={id}
            required onChange={(event) => handleChange(setFormAddress, formAddress, event)}
            value={formAddress[id]}
            autoComplete={autoComplete}
            /> 
       )
    }

    return (

        <div>  
                { orderPage || !isMobile ? <Typo type={TypoType.headline_4} color='black' marginBottom='1.6'>Adress Information</Typo> : ''}
                <GridContainer>
                    <Table type={tableTypeChoice('heading', !isMobile)}>Country</Table>
                    <Table type={tableTypeChoice('fixed', !isMobile)}>Canada</Table>
                    { addressInputArr.map((el,i) => {
                        const {id, heading, type, autoComplete} = el;
                        return (
                            el.id !== 'province' ? 
                                    <Fragment key={i}>
                                        <Table type={tableTypeChoice('labelHeading', !isMobile)} id={id}>{heading} {!isMobile && '*'}</Table>
                                        {InputChoice(type, id, autoComplete)}
                                    </Fragment>
                                :
                                <Fragment key={i}>
                                    <Table type={tableTypeChoice('heading', !isMobile)} id={id}>{heading} *</Table>
                                    <BoxSelect>
                                        <SelectCss id={id} onChange={(event) => handleChange(setFormAddress, formAddress, event, taxLogic)} required defaultValue={formAddress.province}>
                                            <option value='' >Select</option>
                                            {provinceArr.map((el,i) => <option key={i} value={el.name}>{el.name}</option>)}
                                        </SelectCss>
                                    </BoxSelect>
                                </Fragment>
                        )          
                    })}
                </GridContainer>
        </div>
    )
}

export default FormAddress;