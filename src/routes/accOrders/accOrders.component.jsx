import { useContext } from "react";
import AccBoilerplate from "../../component/accBoilerplate/accBoilerplate.component";
import { UserContext } from "../../context/user.context";


const AccOrders = () => {
    const {currentUser} = useContext(UserContext)
 
    console.log(currentUser)

    return (
        <AccBoilerplate heading='My Orders' text='Review your purchase made online or in-stores'>
            <div>
                Orders
            </div>
        </AccBoilerplate>
    )
}

export default AccOrders;