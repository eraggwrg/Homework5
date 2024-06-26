import { useContext } from "react"
import { ProductItem } from "./ProductItem"
import { ProductContext } from "../ProductContext"

export const ProductList = () => {

    const { state: { products } } = useContext(ProductContext)
    return <div>
        <h3>Product List</h3>
        <div className="list">
            {
                products.map(elm => <ProductItem key={elm.id} {...elm} />)
            }
        </div>
    </div>
}