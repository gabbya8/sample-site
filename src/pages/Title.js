import './css/Title.css';
import Button from '../components/Button';
function Title() {
    return(
        <div className="Title">
            <header className='Title-header'>
                <div className='site-name'>
                    <p>sample site</p>
                </div>
                <p className='intro'>Welcome to the sample site! This app let's you search for your favorite songs and see what sample they have used to create it. You'll be able to listen to the tracks and see where the sampling happens on the next page. Click the start button to begin!</p>
                <Button text='Start'></Button>
            </header>
        </div>
    );
}

export default Title;