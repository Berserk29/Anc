import { useContext, useRef } from "react";
import NavFooter from "../../component/navFooter/navFooter.component"
import Summary from "../../component/summary/summary.component";
import Table, { TableType } from "../../component/table/table.component";
import { Section, ProductContainer, OrderContainer, GridContainer, Input, SelectCss, BoxSelect} from "./orderPage.styled";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";


const OrderPage = () => {
    const formRef = useRef(null);
    const {formAdress, setFormAdress} = useContext(UserContext)
    const {taxLogic, cartItems} = useContext(CartContext)
    const {fullName, phoneNumber, address, city, postal} = formAdress;


    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formAdress)
    }

    const handleChangeAdress = (event) => {
        const {id, value} = event.target;
        setFormAdress({...formAdress, [id]: value});
    }

    const handleChangeProvince = (event) => {
        const {id, value} = event.target;
        setFormAdress({...formAdress, [id]: value});
        taxLogic(value)
    }

    const handleFormSubmit = () => {
        const isSomeFieldEmpty = Object.values(formAdress).some((el) => el === '');

        if(isSomeFieldEmpty) {
            console.log(formRef.current)
            console.log(formRef.current.Input)
        }
        if(!isSomeFieldEmpty) {
            console.log('Good!')
        }

      };


    return (
        <NavFooter>
            <Section>
                <ProductContainer>
                    <form onSubmit={submitHandler}  ref={formRef}>
                    <GridContainer>
                        <Table type={TableType.heading}>Country</Table>
                        <Table type={TableType.fixed}>Canada</Table>

                        <Table type={TableType.heading} id='fullName' >Full name *</Table>
                        <Input 
                            type='text'
                            id="fullName"
                            required onChange={handleChangeAdress}
                            value={fullName}
                        />

                        <Table type={TableType.heading} id='phoneNumber'>Phone number *</Table>
                        <Input 
                            type='tel'
                            maxLength='20'
                            id="phoneNumber"
                            required onChange={handleChangeAdress}
                            value={phoneNumber}
                        />

                        <Table type={TableType.heading} id='address'>Address *</Table>
                        <Input 
                            type='text'
                            id="address"
                            required onChange={handleChangeAdress}
                            value={address}
                        />

                        <Table type={TableType.heading} id='city'>City *</Table>
                        <Input 
                            type='text'
                            id="city"
                            required onChange={handleChangeAdress}
                            value={city}
                        />

                        <Table type={TableType.heading} id='province'>Province *</Table>
                        <BoxSelect>
                            <SelectCss id="province" onChange={handleChangeProvince} required defaultValue={formAdress.province}>
                                <option value='' >Select</option>
                                <option value='Quebec' >Quebec</option>
                                <option value='Ontario' >Ontario</option>
                                <option value='Manitoba' >Manitoba</option>
                            </SelectCss>
                        </BoxSelect>

                        <Table type={TableType.heading} id='postal'>Postal Code *</Table>
                        <Input 
                            type='text'
                            id="postal"
                            required onChange={handleChangeAdress}
                            value={postal}
                        />
                    </GridContainer>                        
                        
                        <button>Using this adress</button>

                    </form>

                </ProductContainer>
                <OrderContainer>
                    <Summary btnText={cartItems.length === 0 ? 'Return to the Shopping Page' : 'Payment'} taxSummary={true} onSubmit={handleFormSubmit}/>
                </OrderContainer>
            </Section>
        </NavFooter>
    )
}

export default OrderPage;