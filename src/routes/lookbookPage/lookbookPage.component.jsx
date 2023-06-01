import { useContext } from "react";
import ImgFull from "../../component/imgFull/imgFull.component";
import NavFooter from "../../component/navFooter/navFooter.component";
import { headerLook } from "./lookbookPage.data";

import { GridContainer, PictureContainer, GridImage } from "./lookbookPage.styled";
import { ProductsContext } from "../../context/products.context";


import look1 from '../../assets/lookbook/look_1.jpg'
import look2 from '../../assets/lookbook/look_2.jpg'
import look5 from '../../assets/lookbook/look_5.jpg'
import look6 from '../../assets/lookbook/look_6.jpg'
import look10 from '../../assets/lookbook/look_10.jpg'
import look13 from '../../assets/lookbook/look_13.jpg'


const LookbookPage = () => {
  const {productsMap} = useContext(ProductsContext)
  console.log(productsMap)

    return (
      <NavFooter>
        <ImgFull image={headerLook} position="left"/>
        <PictureContainer>
          <GridContainer>
            <GridImage column='1/8' ratio='4/3' src={look1}/>
            <GridImage column='7/-1' ratio='1/1.38' src={look2}/>
            <GridImage column='1/5' ratio='0.69/1' src={productsMap.top?.[1].imageUrl}/>
            <GridImage column='5/9' ratio='1/1.45' src={productsMap.top?.[1].imageUrlHover}/>
            <GridImage column='1/-1' ratio='16/9' src={look5}/>
            <GridImage column='1/5' ratio='3/4' src={look6}/>
            <GridImage column='9/-1' ratio='3/4' src={productsMap.top?.[0].imageUrl}/>
            <GridImage column='5/9' ratio='3/4' src={productsMap.knit?.[0].imageUrl}/>
            <GridImage column='9/-1' ratio='3/4' src={productsMap.knit?.[0].imageUrlHover}/>
            <GridImage column='1/-1' ratio='16/9' src={look10}/>
            <GridImage column='1/7' ratio='0.72/1' src={productsMap.outer?.[1].imageUrlHover}/>
            <GridImage column='7/-1' ratio='0.72/1' src={productsMap.outer?.[1].imageUrl}/>
            <GridImage column='3/-3' ratio='0.69/1' src={look13}/>
          </GridContainer>
        </PictureContainer>
      </NavFooter>
    )
}

export default LookbookPage;