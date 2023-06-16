import { useContext } from "react";
import CheckoutProduct from "../../component/checkoutProduct/checkoutProduct.component";
import NavFooter from "../../component/navFooter/navFooter.component"
import { CartContext } from "../../context/cart.context";
import Summary from "../../component/summary/summary.component";

import { Section, ProductContainer, OrderContainer} from "./checkoutPage.styled";

const titleArr = ['product', 'quantity', 'price']

const CheckoutPage = () => {
    const {cartItems} = useContext(CartContext)

    return (
        <NavFooter color="white">
            <Section>
                    <ProductContainer>
                        <CheckoutProduct title={titleArr} props={''}/>
                        { cartItems?.map((el,i) => <CheckoutProduct key={i} props={el}/>)}
                    </ProductContainer>
                    <OrderContainer>
                        <Summary btnText={cartItems.length !== 0 ? 'Procceed To Checkout' : 'Return to the Shopping page'} taxSummary={false}/>
                    </OrderContainer>
            </Section>
        </NavFooter>
    )
}

export default CheckoutPage;