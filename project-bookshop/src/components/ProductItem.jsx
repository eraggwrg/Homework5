import { useContext } from "react"
import { ProductContext } from "../ProductContext"

export const ProductItem = ({ id, title, price, photo }) => {

    const { dispatch } = useContext(ProductContext)

    return <div>
        <img src={photo} />
        <p>{title}</p>
        <p><strong>{price}$</strong></p>
        <button onClick={() => dispatch({ type: "MOVE", payload: id })}>Move</button>
    </div>
}