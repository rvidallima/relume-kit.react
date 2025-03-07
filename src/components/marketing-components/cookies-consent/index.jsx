import './style.css'
import Close from '../../../assets/images/icons/close.svg' 
export default function CookiesConsent() {
    return ( 
        <div className="container">
            <p>By clicking “Accept”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our Privacy Policy for more information.</p>
            <div className="button-wrapper">
                <button tyoe="button">Preferences</button>
                <button tyoe="button" className="text-button">Decline</button>
                <button tyoe="button" className="text-button black">Accept</button>
            </div>
            <button tyoe="button"> <img src={Close} alt="iocne de fechar" /> </button>
        </div>
    )
}
