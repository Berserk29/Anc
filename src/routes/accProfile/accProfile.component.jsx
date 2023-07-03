import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import { UserContext } from "../../context/user.context";
import AccBoilerplate from "../../component/accBoilerplate/accBoilerplate.component";
import Table, { TableType } from "../../component/table/table.component";

import { GridContainer } from "./accProfile.styled";

const AccProfile = () => {
    const {currentUser} = useContext(UserContext)
    const {email, displayName} = currentUser;
    const isMobile = useMediaQuery(mediaQuery.useMobile);
    
    const timeCreation = () => {
        const date = new Date(currentUser.metadata.creationTime);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return [day, month, year].join(' ')
    }

    const typeCreation = () => {
        const type = currentUser.providerData[0].providerId
        if(type === 'password') return 'Email';
        if(type === 'google.com') return 'Sign in with Google'
        if(type === 'facebook.com') return 'Sign in with facebook'
        return 'Email'
    }

    const tableTypeChoice = (heading = true) => {
        if(heading) {
            return !isMobile ? TableType.heading : TableType.small_heading
        }
        else {
           return !isMobile ? TableType.fixed : TableType.small_fixed
        }
    }

    return (
            <AccBoilerplate heading='My Profile' text='Manage your password and communication preferences' mobileColor='white'>
                <GridContainer>
                    <Table type={tableTypeChoice()}>Name</Table>
                    <Table type={tableTypeChoice(false)}>{displayName ? displayName : 'User'}</Table>

                    <Table type={tableTypeChoice()}>Email</Table>
                    <Table type={tableTypeChoice(false)}>{email}</Table>

                    <Table type={tableTypeChoice()}>Creation date</Table>
                    <Table type={tableTypeChoice(false)}>{timeCreation()}</Table>

                    <Table type={tableTypeChoice()}>Creation type</Table>
                    <Table type={tableTypeChoice(false)}>{typeCreation()}</Table>
                </GridContainer>
            </AccBoilerplate>
    )
}

export default AccProfile;