import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { LikedContext } from "./context/liked.context";

import HomePage from "./routes/homePage/homePage.component";
import AboutPage from "./routes/aboutPage/aboutPage.component"
import AccountRoute from "./routes/accountRoute/accountRoute.component";
import ContactPage from "./routes/contactPage/contactPage.component";
import LookbookPage from "./routes/lookbookPage/lookbookPage.component";
import ShopRoute from "./routes/shopRoute/shopRoute.component";


function App() {
const {navButton, setNavButton} = useContext(LikedContext)

// This handler close the navBox if clicking anywhere beside Parent Object having datatype='navBox'
const clickHandler = (e) => {
    if(e.target.parentElement.getAttribute('datatype') === 'navBox') return;
    if(!navButton) return;
    return setNavButton(0)
}

  return (
    <div onClick={clickHandler}>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="about" element={<AboutPage/>}/>
      <Route path="account/*" element={<AccountRoute/>}/>
      <Route path="contact" element={<ContactPage/>}/>
      <Route path="shop/*" element={<ShopRoute/>}/>
      <Route path="lookbook" element={<LookbookPage/>}/>
    </Routes>
    </div>
  )
}

export default App
