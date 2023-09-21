import { fondo } from "../assets";
import { InfoPrincipal } from "./InfoPrincipal";
export function Banner(){
    return (
        <>
            <div className="contBanner">
                <img src={fondo} alt="" />
                <InfoPrincipal/>
            </div>
        </>
    );
}