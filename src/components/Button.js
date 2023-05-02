import './css/Button.css';


function eventHandler(){
    console.log("button clicked");
}

function Button(props) {
    return(
        <button className="button-27" onClick={eventHandler}>
            <div className='text'>
                {props.text}
            </div>
        </button>
    );
}

export default Button;