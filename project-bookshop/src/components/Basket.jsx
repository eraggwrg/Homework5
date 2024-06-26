import { useContext } from "react"
import { ProductContext } from "../ProductContext"
import { BasketItem } from "./BasketItem"

export const Basket = () => {

    const { state: { basketProducts } } = useContext(ProductContext)

    return <div>
        <h3>Basket </h3>

        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    basketProducts.map(elm => <BasketItem key={elm.id} {...elm} subtotal={elm.count * elm.price} />)
                }
            </tbody>

        </table>
        <h2><strong>Total:{basketProducts.reduce((a, b) => a + (b.count * b.price), 0)}$</strong></h2>
    </div>

}