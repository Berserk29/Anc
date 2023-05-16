import { PageContainer } from "./pageIndex.styled";

const PageIndex = ({page}) => {
    const totalPage = 6

    return (
        <PageContainer>0{page} &nbsp;/&nbsp; 0{totalPage} &nbsp;ANC</PageContainer>
    )
}

export default PageIndex;