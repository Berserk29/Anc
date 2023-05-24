import AlwaysHeading from "../../component/alwaysHeading/alwaysHeading.component";
import ImgFull from "../../component/imgFull/imgFull.component";
import InfoSection from "../../component/infoSection/infoSection.component";
import NavFooter from "../../component/navFooter/navFooter.component";
import Typo, { TypoType } from "../../component/typo/typo.component";

import { headerAbout, aboutImg2, aboutInfoArray } from "./aboutPage.data";

import { 
  AboutContainer,
  AboutSection,
  ImgSection,
  TextSection,
} from "./aboutPage.styled";

const AboutPage = () => {

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
            <ImgSection src={aboutImg2} alt="" />
          </AboutSection>
        <AlwaysHeading/>
        
      </AboutContainer>
    </NavFooter>
  );
}            

export default AboutPage;