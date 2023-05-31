import './css/Title.css';
import queryString from 'query-string';
import { useNavigate } from 'react-router-dom';

var client_id = '4b558a0f256441e8a8f8e7f9392e5726';
const AUTH_URL = "https://accounts.spotify.com/authorize?";
var redirect_uri = 'http://localhost:3000/main';
var scope = 'streaming user-read-private user-read-email user-read-playback-state user-modify-playback-state';

let q_string = AUTH_URL + queryString.stringify({
    response_type: 'code',
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri
})

function Title() {
    const nav = useNavigate()
    return(
        <div className="Title">
            <header className='Title-header'>
                <div className='site-name'>
                    <p>sample site</p>
                </div>
                <p className='intro'>Welcome to the sample site! Have a favorite song? See what it samples by clicking start!</p>
                {/* the start button will serve as user auth before navigating to playback page */}
                {/* <button className='button-27' onClick={() => nav('main')}> */}
                <button className='button-27' onClick={console.log("string: "+q_string)}>
                    <div className='text'>
                        Start
                    </div>
                </button>
            </header>
        </div>
    );
}

export default Title;