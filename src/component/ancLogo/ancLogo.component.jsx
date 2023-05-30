import { useNavigate } from 'react-router-dom';
import { AncLogoCss, AncLogoCssCursor } from './ancLogo.styled'

import ancLogo_w from '../../assets/icon/anc_w.png'
import ancLogo_b from '../../assets/icon/anc_b.png'

import { Fragment } from 'react';

const AncLogo = ({haveLink = false, color = 'white' , isDropMenuOn}) => {
    const navigate = useNavigate();

    const linkHandler = () => {
        if(location.pathname === '/') return window.location.reload(true) 
        else navigate('/')
    };

    return (
        <Fragment>
            { haveLink ?
                <AncLogoCssCursor src={color === 'white' || isDropMenuOn ? ancLogo_w : ancLogo_b} alt="Anc Logo" onClick={linkHandler}/> 
                : <AncLogoCss src={color === 'white' ? ancLogo_w : ancLogo_b} alt="Anc Logo" /> 
            }
        </Fragment>
    )
    
}

export default AncLogo;



