import { Fragment } from 'react'
import Navigation from '../navigation/navigation.component'
import Footer from '../footer/footer.component'

import { NavBackCss } from './navFooter.styled'

const NavFooter = ({color = 'black', children, sticky = true}) => {

    const navColorChoice = () => color === 'black' ? 'white' : 'black';


    return (
        <Fragment>
            <Navigation color={navColorChoice()} sticky={sticky}/>
            <NavBackCss color={color}/>
            {children}
            <Footer/>
        </Fragment>
    )
}

export default NavFooter