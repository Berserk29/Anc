import NumContext from "../../context/numIndex.context";
import Typo, { TypoType } from "../typo/typo.component";
import { PageContainer } from "./pageIndex.styled";
import { useContext} from "react";
import { totalPage } from "../../routes/homePage/homePage.data";

const PageIndex = () => {
    const {numIndex} = useContext(NumContext)

    return (
        <PageContainer>
            <Typo type={TypoType.body_3}>0{numIndex} &nbsp;/&nbsp; 0{totalPage} &nbsp;ANC</Typo>
        </PageContainer>
    )
}

export default PageIndex;