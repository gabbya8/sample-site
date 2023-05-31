import'./css/Main.css';
import SearchBar from '../components/SearchBar';


function Main({code}) {
    console.log(code)
    return(
        <div className='Main'>
            <SearchBar></SearchBar>
        </div>
    );
}

export default Main;