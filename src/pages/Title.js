import './css/Title.css';
import { useNavigate } from 'react-router-dom';


function Title() {
    const nav = useNavigate()
    return(
        <div className="Title">
            <header className='Title-header'>
                <div className='site-name'>
                    <p>sample site</p>
                </div>
                <p className='intro'>Welcome to the sample site! Have a favorite song? See what it samples by clicking start!</p>
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