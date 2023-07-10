import CartWidget from "../CartWidget";
import "./index.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <h2 className="titleNavbar">Brawl Stars Store</h2>
            <ul>
                <li>PERSONAJES</li>
                <li>SKINS</li>
                <li>ITEMS</li>
            </ul>
            <CartWidget/>
        </div>  
    )
}

export default Navbar;