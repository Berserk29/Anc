import AlwaysHeading from "../../component/alwaysHeading/alwaysHeading.component";
import ImgFull from "../../component/imgFull/imgFull.component";
import NavFooter from "../../component/navFooter/navFooter.component";

import { headerAbout, aboutImg2, aboutInfoArray } from "./aboutPage.data";

import { AboutContainer, AboutSection, ImgSection } from "./aboutPage.styled";

const AboutPage = () => {

  return (
    <NavFooter color="black">
      <ImgFull image={headerAbout} position='top'/>
      <AboutContainer>
          <AboutSection>
            <ImgSection src={aboutImg2} alt="" />
          </AboutSection>
        <AlwaysHeading/>
      </AboutContainer>
    </NavFooter>
  );
}            

export default AboutPage;