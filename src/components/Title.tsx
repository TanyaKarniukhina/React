import './Title.css';

function Title({text}: {text: string}) {
    return (
        <h1 className = "title">{text}</h1>
    );
}

export default Title;