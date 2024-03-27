import './Menu.css';
import { IMenuButton } from "../interfaces";
import { IoIosClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const MenuButton = ({ isOpen, onClick }: IMenuButton) => {
    return (
        <div className="menu-button" onClick={onClick}>
            {isOpen ? <IoIosClose className="menu-close"/> : <RxHamburgerMenu className="menu-burger"/>}
        </div>
    );
}

export default MenuButton;
