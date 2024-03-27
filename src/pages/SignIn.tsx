import { useState } from 'react';
import './SignIn.css';
import Title from '../components/Title'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../components/Theme';
import BackButton from '../components/BackButton';
import Input from '../components/Input';
import Button from '../components/Button';

function SignIn() {
    const { theme } = useTheme();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: any) => { 
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: any) => { 
        setPassword(e.target.value);
    };

    return ( 
        <div className='sign-in-container'>  
            <div className="sign-in">
                <Header />
                <div className={`content ${theme === 'light' ? 'light' : 'dark'}`}>
                    <BackButton text="Back to home" isDisabled={false}/>
                    <Title text="Sign In" />
                    <div className="form">
                        <div className='sign-in-input'>
                            <div>
                                <Input title="Email" placeholderText="Your email" disabled={false} onChange={handleEmailChange}/>
                            </div>
                            <div className='sign-in-password'>
                                <div>
                                    <Input title="Password" placeholderText="Your password" disabled={false} onChange={handlePasswordChange}/>
                                </div>
                                <a className="forgot-password">Forgot password?</a>
                            </div>
                        </div>
                        <div className="button-container">
                            <Button text="Sign In" isDisabled={false} typeButton="button-primary"></Button>
                            <h5 className="sign-in-account">Don’t have an account? <span className="sign-up-link">Sign Up</span></h5>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>   
    );
}

export default SignIn;