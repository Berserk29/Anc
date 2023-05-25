import { useContext } from "react";
import NavFooter from "../../component/navFooter/navFooter.component";
import Typo from "../../component/typo/typo.component";
import { TypoType } from "../../component/typo/typo.component";
import { ProductContainer, SubTitleContainer } from "./productPage.styled";
import {ProductsContext} from '../../context/products.context'
import CardProduct from "../../component/cardProduct/cardProduct.component";


// TODO NEED TO DO

const ProductPage = () => {
    const {productsMap} = useContext(ProductsContext)

    console.log(productsMap)

    return (
        <NavFooter>
            <ProductContainer>
                <SubTitleContainer>
                    <Typo type={TypoType.headline_3}>link</Typo>
                    <Typo type={TypoType.headline_3}>link</Typo>
                    <Typo type={TypoType.headline_3}>link</Typo>
                    <Typo type={TypoType.headline_3}>link</Typo>
                </SubTitleContainer>
                <Typo type={TypoType.headline_1}>Sub Title</Typo>
                {productsMap.knit.map(el => <CardProduct key={el.id} props={el}/>)}
            </ProductContainer>
        </NavFooter>
    )
}

export default ProductPage;