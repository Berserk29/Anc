import { useContext, useState } from "react";
import { phone } from 'phone';

import AccBoilerplate from "../../component/accBoilerplate/accBoilerplate.component";
import FormAddress from "../../component/formAddress/formAddress.component";
import BoxBtn, { BoxBtnType } from "../../component/boxBtn/boxBtn.component"
import BoxMessage , { BoxMessageType } from "../../component/boxMessage/boxMessage.component";

import { Container, BtnContainer, ErrorContainer } from "./accAddress.styled";

import { UserContext } from "../../context/user.context";

import { submitHandler } from "../../helper/formFunction";

const AccAddress = () => {
    const {formAddress} = useContext(UserContext)
    const [errMessage, setErrMessage] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)

    return (
        <AccBoilerplate heading='My Address' text='Manage your shipping addresses'>
            <Container>
                <form onSubmit={(event) => submitHandler(event, setSuccessMessage, setErrMessage, formAddress, true, phone)}>
                    <FormAddress />
                    <ErrorContainer>
                        { errMessage && <BoxMessage type={BoxMessageType.err_white}>{errMessage}</BoxMessage>}
                        { successMessage && <BoxMessage type={BoxMessageType.success} />}
                    </ErrorContainer>
                    <BtnContainer>
                        <BoxBtn type={BoxBtnType.radio} w='31.5rem' h='5.2rem'>Apply</BoxBtn>
                    </BtnContainer>
                </form>
            </Container>
        </AccBoilerplate>
    )
}

export default AccAddress;