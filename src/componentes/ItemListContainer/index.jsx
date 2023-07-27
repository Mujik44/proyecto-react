import "./index.css"
import ItemList from "../ItemList"

const ItemListContainer = (props) => {

    return(
        <>
            <ItemList
                data={props.data}
            />
        </>
    )
}

export default ItemListContainer;