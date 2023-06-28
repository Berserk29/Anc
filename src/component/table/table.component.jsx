import { Fragment } from "react"
import Typo, { TypoType } from "../typo/typo.component"
import { HeadingContainer, FixedContainer, SmallFixed, SmallHeading } from "./table.styled"

export const TableType = {
    heading: 'heading',
    label_heading: 'label_heading',
    fixed: 'fixed',
    small_heading: 'small_heading',
    small_fixed: 'small_fixed',
}

const Table = ({type, children, id,}) => {


    const TableChoice = () => {
        if(type === 'heading') return <HeadingContainer><Typo type={TypoType.body_2} color='black'>{children}</Typo></HeadingContainer>
        if(type === 'label_heading') return <HeadingContainer><label htmlFor={id} ><Typo type={TypoType.body_2} color='black'>{children}</Typo></label></HeadingContainer>
        if(type === 'fixed') return <FixedContainer><Typo type={TypoType.arialSize} size='1.6rem' transform='none' color='black'>{children}</Typo></FixedContainer>
        if(type === 'small_heading') return <SmallHeading><Typo type={TypoType.body_1} color='black'>{children} :</Typo></SmallHeading>
        if(type === 'small_fixed') return <SmallFixed><Typo type={TypoType.arialSize} size='1.6rem' transform='none' color='black'>{children}</Typo></SmallFixed>
    }

    return (
        <Fragment>
            <TableChoice />
        </Fragment>
    )   
}

export default Table;