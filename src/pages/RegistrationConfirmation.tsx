import './RegistrationConfirmation.css';
import Title from '../components/Title'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../components/Theme';
import BackButton from '../components/BackButton';
import Button from '../components/Button';

function RegistrationConfirmation() {
    const { theme } = useTheme();
    
    return ( 
        <div className='registration-container'>  
            <div className="registration">
                <Header />
                <div className={`content ${theme === 'light' ? 'light' : 'dark'}`}>
                    <BackButton text="Back to home" isDisabled={false}/>
                    <Title text="Registration Confirmation" />
                    <div className="registration-text-container">
                        <div className='registration-text'>
                                <h5 className="text">Please activate your account with the activation 
                                link in the email <span className='email'>example@gmail.com</span>. <p className='check-email'>Please, check your email</p></h5>
                        </div>
                        <div className="button-container">
                            <Button text="Go to home" isDisabled={false} typeButton="button-primary"></Button>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>   
    );
}

export default RegistrationConfirmation;