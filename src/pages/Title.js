import './css/Title.css';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';


function Title() {
    const nav = useNavigate()
    return(
        <div className="Title">
            <header className='Title-header'>
                <div className='site-name'>
                    <p>sample site</p>
                </div>
                <p className='intro'>Welcome to the sample site! This app let's you search for your favorite songs and see what sample they have used to create it. You'll be able to listen to the tracks and see where the sampling happens on the next page. Click the start button to begin!</p>
                <button className='button-27' onClick={() => nav('main')}>
                    <div className='text'>
                        Start
                    </div>
                </button>
            </header>
        </div>
    );
}

export default Title;