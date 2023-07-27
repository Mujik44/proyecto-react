import ItemDetail from '../ItemDetail'
import './index.css'

const ItemDetailContainer = (props) => {
    
    return(

        <div className='contenedorDetallesPersonajes'>
            <ItemDetail
                data={props.data}
            />
        </div>

    )
}

export default ItemDetailContainer