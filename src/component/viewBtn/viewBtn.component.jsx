import { useNavigate } from "react-router-dom";

import { ViewContainer, BtnView, MovingBar } from "./viewBtn.styled";

const ViewBtn = ({link, text = 'view more'}) => {
    const navigate = useNavigate()
    const viewHandler = () => navigate(link);
    // target="_blank" --> open new tab

    return (
        <ViewContainer>
            { link.slice(0,5) === 'https' ?
            <BtnView href={link} target="_blank">{text}</BtnView> :
            <BtnView onClick={viewHandler}>{text}</BtnView>
            }
            <MovingBar/>
        </ViewContainer>
    )
}

export default ViewBtn;