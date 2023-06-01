import { useContext } from "react";

import ImgFull from "../../component/imgFull/imgFull.component";
import NavFooter from "../../component/navFooter/navFooter.component";
import AlwaysHeading from "../../component/alwaysHeading/alwaysHeading.component"
import ImgLookbook from "../../component/imgLookbook/imgLookbook.component";

import { ProductsContext } from "../../context/products.context";
import { headerImg } from "./lookbookPage.data";

import { HeadingContainer , PositionContainer,GridContainer, PictureContainer } from "./lookbookPage.styled";


const LookbookPage = () => {
  const { sectionImgMap } = useContext(ProductsContext)

    return (
      <NavFooter>
        <HeadingContainer>
          <PositionContainer>
            <AlwaysHeading/>
          </PositionContainer>
        </HeadingContainer>
        <ImgFull image={headerImg} position="left"/>
        <PictureContainer>
          <GridContainer>
            {sectionImgMap.lookbook?.map((el,i) => <ImgLookbook key={i} props={el}/>)}
          </GridContainer>
        </PictureContainer>
      </NavFooter>
    )
}

export default LookbookPage;