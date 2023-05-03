import './css/SearchBar.css'
import {FaSistrix} from "react-icons/fa";


function SearchBar() {
    return(
        <div className="search-bar">
            <form>
                <input placeholder="Search..."></input>
                <button type="submit"><FaSistrix /></button>
            </form>
        </div>
    );
}

export default SearchBar;