import { useState } from 'react';
import './Search.css';
import { ISearchBar } from '../interfaces';
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const SearchBar = ({ isOpen, toggleSearch }: ISearchBar) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isInputOpen, setIsInputOpen] = useState(false);

    const handleSearch = () => {
        // Здесь можно добавить логику для выполнения поиска
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="search-bar">
            {isInputOpen ? (
                <>
                    <input
                        className="search-input"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                        autoFocus
                    />
                    <div className="search-button" onClick={() => { setIsInputOpen(false); toggleSearch(); }}>
                        <IoIosClose className="close-icon"/>
                    </div>
                </>
            ) : (
                <div className="search-icon" onClick={() => { setIsInputOpen(true); toggleSearch(); }}>
                    <CiSearch className="search-icon"/>
                </div>
            )}
            {isOpen && (
                <div className="search-button" onClick={handleSearch}>
                    <CiSearch className="search-icon-open"/>
                </div>
            )}
        </div>
    );
}

export default SearchBar;