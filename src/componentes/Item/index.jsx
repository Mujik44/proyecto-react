import './index.css'

const Item = (props) => {

    return(
        <div className="personajes">
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name}/>
            <h2>Género: {props.gender}</h2>
            <h2>Especie: {props.species}</h2>
        </div>
    )
}

export default Item