import AccBoilerplate from "../../component/accBoilerplate/accBoilerplate.component";
import { GridContainer } from "./accFavorite.styled";
import { useContext } from "react";
import { LikedContext } from "../../context/liked.context";
import CardProduct from "../../component/cardProduct/cardProduct.component";

const AccFavorite = () => {
    const { likedItems } = useContext(LikedContext)

    return (
        <AccBoilerplate heading='My Favorite' text='All your favorite items in one place'>
            <GridContainer>
                {likedItems.map((el) => <CardProduct key={el.id} props={el} isWhitoutText={true}/>)}
            </GridContainer>
        </AccBoilerplate>
    )
}

export default AccFavorite;