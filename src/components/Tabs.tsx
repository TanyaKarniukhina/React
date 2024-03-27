import './Tabs.css';
import { useTheme } from './Theme';

function Tabs({isDisabled}: {isDisabled: boolean}) {
    const { theme } = useTheme();
    return (
        <div className="tabs-container">
        <button disabled={isDisabled} className={`tabs-button-all ${theme === 'light' ? 'light' : 'dark'}`}>All</button>
        <button disabled={isDisabled} className={`tabs-button-favorites ${theme === 'light' ? 'light' : 'dark'}`}>My favorites</button>
        <button disabled={isDisabled} className={`tabs-button-popular ${theme === 'light' ? 'light' : 'dark'}`}>Popular</button>
        <button disabled={isDisabled} className='tabs-button-empty'></button>
        </div>
    );
}

export default Tabs;