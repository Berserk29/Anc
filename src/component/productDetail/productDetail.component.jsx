import { useParams } from "react-router-dom"
import { useContext} from "react"

import {
    ImgProduct,
    ProductContainer,
    ImgContainer,
} from "./productDetail.styled"

import NavFooter from '../../component/navFooter/navFooter.component'
import ProductOrder from "../productOrder/productOrder.component"

import { ProductsContext } from "../../context/products.context"
import { OrderContext } from "../../context/order.context"

const ProductDetail = () => {
    const {productsMap} = useContext(ProductsContext)
    const {setIsPopupOn, isPopupOn} = useContext(OrderContext)
    const {id} = useParams();
    
    // Determine the product by checking the url
    const ProductChoice = () => {
        const productType = id.replace(/[^a-z]/g, "");
        const productId = id.replace(/[^0-9]/g, "");
        const num = productsMap[productType]?.findIndex(el => el.id === +productId);
        return productsMap[productType]?.[num];
    }
    const product = ProductChoice();

     const clickHandler = () => {
      if(!isPopupOn) return;
      return setIsPopupOn(false)
     }

    return (
      <NavFooter sticky={false}>
        <ProductContainer onClick={clickHandler}>
          <ImgContainer>
            <ImgProduct image={product?.imageUrl}/>
            <ImgProduct image={product?.imageUrlHover}/>
          </ImgContainer>
          <ProductOrder product={product}/>
        </ProductContainer>
      </NavFooter>
    )
}

export default ProductDetail;