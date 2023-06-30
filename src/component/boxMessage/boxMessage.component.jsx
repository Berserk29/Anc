import { ErrorBox, ErrorBoxWhite, SuccessBox, IconCss } from "./boxMessage.styled"
import checkIcon from '../../assets/icon/check.png'

export const BoxMessageType = {
    err_black: 'err_black',
    err_white: 'err_white',
    success: 'success',
}

const BoxMessage = ({children, type}) => {

    const BoxChoice = () => {
        if(type === 'err_black') return <ErrorBox>{children}</ErrorBox>
        if(type === 'err_white') return <ErrorBoxWhite>{children}</ErrorBoxWhite>
        if(type === 'success') return <SuccessBox><IconCss src={checkIcon} alt="Icon"/>  Success !</SuccessBox>
    }

    return (
        <>
            <BoxChoice />
        </>
    )
}


export default BoxMessage;