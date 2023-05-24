import ImgFull from "../../component/imgFull/imgFull.component";
import NavFooter from "../../component/navFooter/navFooter.component";
import { headerLook } from "./lookbookPage.data";

const LookbookPage = () => {
    return (
      <NavFooter>
        
        <ImgFull image={headerLook} position="left"/>
      </NavFooter>
    )
}

export default LookbookPage;