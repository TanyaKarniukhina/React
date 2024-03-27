import { IInput } from '../interfaces';
import './Input.css';
import { useState } from "react";

function Input({ title, placeholderText, disabled = false, onChange }: IInput) {
    const [text, setText] = useState("");
    const [hasError, setHasError] = useState(false);

    function handleChange(e: any): void {
        const inputValue = e.target.value;
        setText(inputValue);
        if (inputValue.length < 3) {
            setHasError(true);
        } else {
            setHasError(false);
        }
        onChange(e);
    }

    return ( 
        <>
            <div><label className="inputlabel" htmlFor="id">{title}</label></div>
            <input
                id="id"
                value={text}
                className="input"
                placeholder={placeholderText}
                onChange={handleChange}
                style={{ border: hasError ? "2px solid red" : "" }}
                disabled={disabled}
            />
            {hasError && <div className="error">Error text</div>}
        </>
    );
}

export default Input;