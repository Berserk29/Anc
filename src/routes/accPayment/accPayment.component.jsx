import { useContext, useState } from "react";

import { UserContext } from "../../context/user.context";
import AccBoilerplate from "../../component/accBoilerplate/accBoilerplate.component";
import FormCard from "../../component/formCard/formCard.component";
import BoxMessage, {BoxMessageType} from "../../component/boxMessage/boxMessage.component";
import BoxBtn, {BoxBtnType} from "../../component/boxBtn/boxBtn.component";

import { Container, ErrorContainer, BtnContainer } from "./accPayment.styled";

import { submitHandler } from "../../helper/formFunction";

const AccPayment = () => {
    const { formCard } = useContext(UserContext)
    const [errMessage, setErrMessage] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)

    return (
        <AccBoilerplate heading='My Payment Settings' text='Manage your credit card & preferred methods of payment' mobileColor='white'>
            <Container>
                <form onSubmit={(event) => submitHandler(event, setSuccessMessage, setErrMessage, formCard)}>
                    <FormCard />
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

export default AccPayment;