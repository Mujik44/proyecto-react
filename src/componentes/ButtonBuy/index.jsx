import { useContext } from 'react';
import { CartContext } from '../../context/Cart/Provider';
import './index.css'

const ButtonBuy = (props) => {

    const { Buy } = useContext(CartContext);

    return(
        <>
            {props.contenido ? <button className='btnComprar' onClick={() => Buy()}>COMPRAR</button> : <></>}
        </>
    )
}

export default ButtonBuy