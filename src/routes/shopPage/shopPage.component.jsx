import { useContext, useState } from "react";
import NavFooter from "../../component/navFooter/navFooter.component";
import Typo from "../../component/typo/typo.component";
import { TypoType } from "../../component/typo/typo.component";
import { FlexContainer, GridContainer, ProductContainer, SubTitleContainer, ProductBtn, BtnActive } from "./shopPage.styled";
import {ProductsContext} from '../../context/products.context'
import CardProduct from "../../component/cardProduct/cardProduct.component";


// TODO NEED TO DO

const ShopPage = () => {
    const {productsMap} = useContext(ProductsContext)
    const [productChoice, setProductChoice] = useState('new') 

    const productHandler = (product) => setProductChoice(product)

    // Change new to be the first in the array
    const newTitleOrder = [
        Object.keys(productsMap).find(el => el === 'new'),
        ...Object.keys(productsMap).filter(el => el !== 'new')
    ]

    return (
        <NavFooter>
             <ProductContainer>
                <SubTitleContainer>
                    {newTitleOrder.map((el,i) => {
                        if(el === productChoice) return <BtnActive key={i}>{el}</BtnActive> 
                           return  <ProductBtn key={i} onClick={() => productHandler(el)}>{el}</ProductBtn>
                        }
                    )}
                </SubTitleContainer>
                <FlexContainer>
                    <Typo type={TypoType.headline_1}>{productChoice}</Typo>
                    <GridContainer>
                        {productsMap[productChoice]?.map(el => <CardProduct key={el.id} props={el} sub={productChoice}/>)}
                    </GridContainer>
                </FlexContainer>
            </ProductContainer>
        </NavFooter>
    )
}

export default ShopPage;