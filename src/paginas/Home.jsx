import { NavBar } from "../componentes/NavBar";
import { Banner } from "../componentes/Banner";
import { InfoPrincipal } from "../componentes/InfoPrincipal";
export function Home(){
    return(
        <>  
            <div className="contedorBannerNav">
                <Banner/>
                <div className="flex-column  space-beetwen cartel">
                    <NavBar/>
                    <InfoPrincipal/>
                </div>
               
            </div>
           
        </>
    );
}