import CartWidget from "../CartWidget";
import logo from "../img/Rick-and-Morty.png"
import { Link } from "react-router-dom";
import "./index.css"

const Navbar = (props) => {


    return (
        <div className="navbar">
            <div className="contenedorLogo"><Link to='/'><img src={logo} alt="logo de la rick and morty"/></Link></div>
            <ul>
                <Link to='categoria/humans'><li>HUMANOS</li></Link>
                <Link to='categoria/aliens'><li>ALIENS</li></Link>
            </ul>
            <CartWidget/>
        </div>  
    )
}

export default Navbar;