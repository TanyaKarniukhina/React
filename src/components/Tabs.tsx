import './Tabs.css';

function Tabs({isDisabled}: {isDisabled: boolean}) {
    return (
        <div className="tabs-container">
        <button disabled={isDisabled} className='tabs-button-all'>All</button>
        <button disabled={isDisabled} className='tabs-button-favorites'>My favorites</button>
        <button disabled={isDisabled} className='tabs-button-popular'>Popular</button>
        <button disabled={isDisabled} className='tabs-button-empty'></button>
        </div>
    );
}

export default Tabs;