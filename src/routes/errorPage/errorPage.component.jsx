import { Container, Heading, Text, Button } from "./errorPage.styled";
import imgBg from '../../assets/image/error-page.jpg'

const ErrorPage = ({error, resetErrorBoundary}) => {

    return (
        <Container image={imgBg}>
            <div>
                <Heading >Something went wrong :</Heading> 
                <Text>{error.message}</Text>
            </div>
            <Button onClick={resetErrorBoundary}>Try again</Button>
        </Container>
    )
}

export default ErrorPage;