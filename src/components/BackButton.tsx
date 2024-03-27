import { IBackButton } from '../interfaces';
import './BackButton.css';
import { useTheme } from './Theme';

function BackButton({text, isDisabled}: IBackButton) {
    const { theme } = useTheme();
    return ( 
        <button disabled={isDisabled} className={`back-button ${theme === 'light' ? 'light' : 'dark'}`}>{text}</button>
    );
}

export default BackButton;