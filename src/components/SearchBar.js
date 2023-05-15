import './css/SearchBar.css'
import {FaSistrix} from "react-icons/fa";



function SearchBar() {
    const handleClick = (e) => {
        e.preventDefault();
        let text = document.getElementById("search-input").value;
        console.log(text.toLowerCase().split(' ').join('-'));
      }
    return(
        <div className="search-bar">
            <form>
                <input id="search-input" placeholder="Search..." autoComplete='off'></input>
                <button type="submit" onClick={handleClick}><FaSistrix /></button>
            </form>
        </div>
    );
}

export default SearchBar;