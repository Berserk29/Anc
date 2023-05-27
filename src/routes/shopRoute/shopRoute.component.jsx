import { Route, Routes } from "react-router-dom";
import ShopPage from "../shopPage/shopPage.component";
import ProductDetail from "../../component/productDetail/productDetail.component";

const ShopRoute = () => {
    return (
        <Routes>
            <Route index element={<ShopPage/>}/>
            <Route path=":id" element={<ProductDetail />}/>
        </Routes>
    )
}

export default ShopRoute;