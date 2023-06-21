import { Fragment } from "react"
import Typo, { TypoType } from "../typo/typo.component"
import { HeadingContainer, FixedContainer } from "./table.styled"

export const TableType = {
    heading: 'heading',
    label_heading: 'label_heading',
    fixed: 'fixed',
}

const Table = ({type, children, id,}) => {


    const TableChoice = () => {
        if(type === 'heading') return <HeadingContainer><Typo type={TypoType.body_2} color='black'>{children}</Typo></HeadingContainer>
        if(type === 'label_heading') return <HeadingContainer><label htmlFor={id} ><Typo type={TypoType.body_2} color='black'>{children}</Typo></label></HeadingContainer>
        if(type === 'fixed') return <FixedContainer><Typo type={TypoType.body_2} color='black'>{children}</Typo></FixedContainer>
    }

    return (
        <Fragment>
            <TableChoice />
        </Fragment>
    )   
}

export default Table;