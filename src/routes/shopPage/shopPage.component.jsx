import { useContext, useState } from "react";
import NavFooter from "../../component/navFooter/navFooter.component";
import Typo from "../../component/typo/typo.component";
import { TypoType } from "../../component/typo/typo.component";
import { FlexContainer, GridContainer, ProductContainer, SubTitleContainer, ProductBtn, BtnActive, SubTitleBreak, TitleBreakContainer } from "./shopPage.styled";
import {ProductsContext} from '../../context/products.context'
import CardProduct from "../../component/cardProduct/cardProduct.component";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

const ShopPage = () => {
    const {productsMap} = useContext(ProductsContext)
    const [productChoice, setProductChoice] = useState('new') 

    const isSmLaptop = useMediaQuery(mediaQuery.useSmLaptop)

    const productHandler = (product) => setProductChoice(product)

    // Change new to be the first in the array
    const newTitleOrder = [
        Object.keys(productsMap).find(el => el === 'new'),
        ...Object.keys(productsMap).filter(el => el !== 'new')
    ]

    const SubTitleChoice = () => {
        const TitleArray = () => (
            newTitleOrder.map((el,i) => {
                if(el === productChoice) return <BtnActive key={i}>{el}</BtnActive> 
                return  <ProductBtn key={i} onClick={() => productHandler(el)}>{el}</ProductBtn>
            }) 
        )

        if(!isSmLaptop) return (
        <SubTitleContainer>
            <TitleArray />
        </SubTitleContainer> 
        )
        if(isSmLaptop) return (
        <SubTitleBreak>
            <TitleArray />
        </SubTitleBreak> 
        )
    }

    return (
        <NavFooter sticky={false}>
             <ProductContainer>
                {!isSmLaptop ? <SubTitleChoice/> : '' }
                <FlexContainer>
                    {isSmLaptop ? 
                    <TitleBreakContainer>
                        <Typo type={TypoType.headline_1}>{productChoice}</Typo>
                        <SubTitleChoice/>
                    </TitleBreakContainer>
                        :
                        <Typo type={TypoType.headline_1}>{productChoice}</Typo>
                    }
                    <GridContainer>
                        {productsMap[productChoice]?.map(el => <CardProduct key={el.id} props={el} sub={productChoice}/>)}
                    </GridContainer>
                </FlexContainer>
            </ProductContainer>
        </NavFooter>
    )
}

export default ShopPage;