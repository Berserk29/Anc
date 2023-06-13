import { useContext } from "react";
import CheckoutProduct from "../../component/checkoutProduct/checkoutProduct.component";
import NavFooter from "../../component/navFooter/navFooter.component"
import { Section } from "./checkoutPage.styled";
import { CartContext } from "../../context/cart.context";

const CheckoutPage = () => {
    const {cartItems} = useContext(CartContext)
    console.log(cartItems)
    return (
        <NavFooter color="white">
            <Section>
                { cartItems?.map((el,i) => <CheckoutProduct key={i} props={el}/>)}
            </Section>
        </NavFooter>
    )
}

export default CheckoutPage;