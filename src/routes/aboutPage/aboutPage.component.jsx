import { useContext} from "react";
import AlwaysHeading from "../../component/alwaysHeading/alwaysHeading.component";
import ImgFull from "../../component/imgFull/imgFull.component";
import InfoSection from "../../component/infoSection/infoSection.component";
import NavFooter from "../../component/navFooter/navFooter.component";
import Typo, { TypoType } from "../../component/typo/typo.component";

import { headerAbout, aboutImg2, aboutInfoArray } from "./aboutPage.data";

import { 
  AboutContainer,
  AboutSection,
  CardContainer,
  ImgSection,
  TextSection,
} from "./aboutPage.styled";

import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../component/productCard/productCard.component";

const AboutPage = () => {
  const {productsMap, isLoading} = useContext(ProductsContext)

  console.log(productsMap)
  console.log(isLoading)

  const aboutCard = [productsMap.outer?.[0], productsMap.top?.[0], productsMap.knit?.[0], productsMap.outer?.[1]]


  return (
    <NavFooter color="black">
      <ImgFull image={headerAbout} position='top'/>
      <AboutContainer>
          <AboutSection>
            <TextSection>
              <Typo type={TypoType.headline_2} maxWidth='48'>Anc pursues trendy yet comfortable fashion culture</Typo>
              <div>
                {aboutInfoArray.map( el => <InfoSection key={el.id} props={el}/>)}
              </div>
            </TextSection>
            <ImgSection src={aboutImg2} alt="image section" />
          </AboutSection>
        <AlwaysHeading/>
        <CardContainer>
          {aboutCard.map((el,i) => <ProductCard key={i} props={el}/>)}
        </CardContainer>
      </AboutContainer>
    </NavFooter>
  );
}            

export default AboutPage;