import './User.css';

function User({text}: {text: string}) {
    const initials = text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('');
    
    return (
        <div className = "user-container">
            <h1 className = "user-initials">{initials}</h1>
            <h5 className = "username">{text}</h5>
        </div>
    )
}
export default User;