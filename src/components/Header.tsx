import { useState } from 'react';
import './Header.css';
import MenuButton from './Menu';
import SearchBar from './Search';
import User from './User';
import { useTheme } from './Theme';
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";

function Header() { 
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const { toggleTheme } = useTheme();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!isSearchOpen);
    };

    const handleLogout = () => {
    };

    return (
        <div className="header-container">
            <div className="header">
            <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
            {isMenuOpen && (
                <div className="menu-items">
                    <div className="top-container">
                        <div className="user-menu-section">
                            <User text="Artem Malkin" />
                        </div>
                        <div className="menu-options">
                            <button className="home">Home</button>
                            <button className="add-post">Add post</button>
                            <button className="profile">Profile</button>
                        </div>
                    </div>
                    <div className="bottom-container">
                        <div className="theme-toggle">
                            <button className="light-theme-button" onClick={() => toggleTheme('light')}>
                                <FiSun className='sun-icon'/>
                            </button>
                            <button className="dark-theme-button" onClick={() => toggleTheme('dark')}>
                                <IoMoonOutline className='moon-icon'/>
                            </button>
                        </div>
                        <div className="logout-button" onClick={handleLogout}>Log out</div>
                    </div>
                </div>
                )}
                <div className="right-container">
                    <div className="search-section">
                        <SearchBar isOpen={isSearchOpen} toggleSearch={toggleSearch} />
                    </div>
                    <div className="user-section">
                        <User text="Artem Malkin" />
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Header;