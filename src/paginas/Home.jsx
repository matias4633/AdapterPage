import { NavBar } from "../componentes/NavBar";
import { Banner } from "../componentes/Banner";
export function Home(){
    return(
        <>  
            <div className="contedorBannerNav">
                <Banner/>
                <NavBar/>
            </div>
           
        </>
    );
}