import { logo } from "../assets";
import { menu } from "../assets";

export function NavBar(){
    return(
        <div className="contenedorNavBar">
            <span className="iconMenu"><img  src={menu} /></span>
            <span className="logoPrincipal"><img  src={logo} /></span>
            <span></span>
        </div>
    );
}