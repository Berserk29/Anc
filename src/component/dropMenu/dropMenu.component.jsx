import { useNavigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import mediaQuery from "../../helper/mediaQuery"

import Typo, { TypoType } from '../../component/typo/typo.component'

import { DropMenuContainer, DropSection, AnimationContainer} from "./dropMenu.styled"
import { dropMenuArray } from "./dropMenu.data.js"

const DropMenu = ({isOpen}) => {
    const navigate = useNavigate()
    const isMobile = useMediaQuery(mediaQuery.useMobile)

    const linkHandler = (link) => {
        if(location.pathname === link) return window.location.reload(true)
        else navigate(link)
    };

    return (
        <DropMenuContainer isOpen={isOpen}>
            {dropMenuArray.map((el) => {
                return (
                    <DropSection key={el.id} onClick={() => linkHandler(el.link)}>
                            <AnimationContainer isOpen={isOpen}>
                                <Typo type={TypoType.title_2} hover={true}>{el.title}</Typo>
                            </AnimationContainer>
                            { !isMobile &&
                            <AnimationContainer isOpen={isOpen}>
                                <Typo type={TypoType.body_3}>0{el.id}</Typo>
                            </AnimationContainer>
                            }
                    </DropSection>
                )
            })}
        </DropMenuContainer>
    )
}

export default DropMenu;