import { useState } from 'react';
import './SignUp.css';
import Title from '../components/Title'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../components/Theme';
import BackButton from '../components/BackButton';
import Input from '../components/Input';
import Button from '../components/Button';

function SignUp() {
    const { theme } = useTheme();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleEmailChange = (e: any) => { 
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: any) => { 
        setPassword(e.target.value);
    };

    const handleNameChange = (e: any) => { 
        setName(e.target.value);
    };

    const handleConfirmChange = (e: any) => { 
        setConfirm(e.target.value);
    };

    return ( 
        <div className='sign-up-container'>  
            <div className="sign-up">
                <Header />
                <div className={`content ${theme === 'light' ? 'light' : 'dark'}`}>
                    <BackButton text="Back to home" isDisabled={false}/>
                    <Title text="Sign Up" />
                    <div className="form">
                        <div className='sign-up-input'>
                            <div>
                                <Input title="Name" placeholderText="Your name" disabled={false} onChange={handleEmailChange}/>
                            </div>
                            <div>
                                <Input title="Email" placeholderText="Your email" disabled={false} onChange={handleEmailChange}/>
                            </div>
                            <div>
                                <Input title="Password" placeholderText="Your password" disabled={false} onChange={handlePasswordChange}/>
                            </div>
                            <div>
                                <Input title="Confirm password" placeholderText="Confirm password" disabled={false} onChange={handleEmailChange}/>
                            </div>
                        </div>
                        <div className="button-container">
                            <Button text="Sign Up" isDisabled={false} typeButton="button-primary"></Button>
                            <h5 className="sign-up-account">Already have an account? <span className="sign-in-link">Sign In</span></h5>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>   
    );
}

export default SignUp;