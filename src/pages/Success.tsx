import './Success.css';
import Title from '../components/Title'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../components/Theme';
import BackButton from '../components/BackButton';
import Button from '../components/Button';

function Success() {
    const { theme } = useTheme();
    
    return ( 
        <div className='success-container'>  
            <div className="success">
                <Header />
                <div className={`content ${theme === 'light' ? 'light' : 'dark'}`}>
                    <BackButton text="Back to home" isDisabled={false}/>
                    <Title text="Success" />
                    <div className="success-text-container">
                        <div className='success-text'>
                                <h5 className="email">Email confirmed.
                                <p className='registration-completed'>Your registration is now completed</p></h5>
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

export default Success;