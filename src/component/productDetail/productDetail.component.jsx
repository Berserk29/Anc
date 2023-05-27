import { useParams } from "react-router-dom"
import { useContext } from "react"

import { ImgProduct, ProductContainer, ImgContainer } from "./productDetail.styled"
import NavFooter from '../../component/navFooter/navFooter.component'
import { ProductsContext } from "../../context/products.context"

const ProductDetail = () => {
    const {productsMap} = useContext(ProductsContext)
    
    const {id} = useParams();
    
    const ProductChoice = () => {
        const productType = id.replace(/[^a-z]/g, "");
        const productId = id.replace(/[^0-9]/g, "");
        const num = productsMap[productType]?.findIndex(el => el.id === +productId);
        return productsMap[productType]?.[num];
    }
    const product = ProductChoice();
    
    console.log(product)

    return (
        <NavFooter>
            <ProductContainer>
                <ImgContainer>
                    <ImgProduct image={product?.imageUrl}/>
                    <ImgProduct image={product?.imageUrlHover}/>
                </ImgContainer>
            </ProductContainer>
        </NavFooter>
    )
}

export default ProductDetail;