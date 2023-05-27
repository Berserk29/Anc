import { Route, Routes } from "react-router-dom";

import HomePage from "./routes/homePage/homePage.component";
import AboutPage from "./routes/aboutPage/aboutPage.component"
import AccountPage from "./routes/accountPage/accountPage.component";
import ContactPage from "./routes/contactPage/contactPage.component";
import LookbookPage from "./routes/lookbookPage/lookbookPage.component";
import ShopRoute from "./routes/shopRoute/shopRoute.component";


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="about" element={<AboutPage/>}/>
      <Route path="account" element={<AccountPage/>}/>
      <Route path="contact" element={<ContactPage/>}/>
      <Route path="shop/*" element={<ShopRoute/>}/>
      <Route path="lookbook" element={<LookbookPage/>}/>
    </Routes>
  )
}

export default App
