import { useNavigate } from 'react-router-dom';
import { AncLogoCss, AncLogoCssCursor } from './ancLogo.styled'

import ancLogo from '../../assets/icon/anc.png' 
import { Fragment } from 'react';

const AncLogo = ({haveLink = false}) => {
    const navigate = useNavigate();

    const linkHandler = () => {
        if(location.pathname === '/') return window.location.reload(true) 
        else navigate('/')
    };

    return (
        <Fragment>
            { haveLink ?
                <AncLogoCssCursor src={ancLogo} alt="Anc Logo" onClick={linkHandler}/> 
                : <AncLogoCss src={ancLogo} alt="Anc Logo" /> 
            }
        </Fragment>
    )
    
}

export default AncLogo;



