import { PelisGrid } from "./PelisGrid";
import { Search } from "./Search";


export function PeliPrincipal() {
    return (
        <div>
            <h1 class="titulos" >PELICULAS</h1>
            <Search/>
            <PelisGrid/>
        </div>
    )
}
