import { useContext } from "react";

import AlwaysHeading from "../../component/alwaysHeading/alwaysHeading.component";
import ImgFull from "../../component/imgFull/imgFull.component";
import InfoSection from "../../component/infoSection/infoSection.component";
import NavFooter from "../../component/navFooter/navFooter.component";
import Typo, { TypoType } from "../../component/typo/typo.component";
import CardProduct from "../../component/cardProduct/cardProduct.component";

import { headerAbout, aboutImg2, aboutInfoArray } from "./aboutPage.data";

import { 
  AboutContainer,
  AboutSection,
  CardContainer,
  ImgSection,
  TextSection,
} from "./aboutPage.styled";

import { ProductsContext } from "../../context/products.context";

const AboutPage = () => {
  const { productsMap } = useContext(ProductsContext)

  const aboutCard = [
    {
    product: productsMap.outer?.[0],
    aboutTitle: 'Modern'
    },
    {
    product: productsMap.top?.[0],
    aboutTitle: 'Urban'  
    },
    {
    product: productsMap.knit?.[0],
    aboutTitle: 'Comfort'  
    },
    {
    product: productsMap.outer?.[1],
    aboutTitle: 'Casual'  
    },
  ]

  return (
    <NavFooter color="black">
      <ImgFull image={headerAbout} position='top'/>
      <AboutContainer>
          <AboutSection>
            <TextSection>
              <Typo type={TypoType.headline_2} maxWidth='60'>Anc pursues trendy yet comfortable fashion culture</Typo>
              <div>
                {aboutInfoArray.map( el => <InfoSection key={el.id} props={el}/>)}
              </div>
            </TextSection>
            <ImgSection src={aboutImg2} alt="image section" />
          </AboutSection>
        <AlwaysHeading/>
        <CardContainer>
          {aboutCard.map((el,i) => <CardProduct key={i} props={el.product} aboutPage={el.aboutTitle}/>)}
        </CardContainer>
      </AboutContainer>
    </NavFooter>
  );
}            

export default AboutPage;