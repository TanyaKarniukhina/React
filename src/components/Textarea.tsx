import { ITextarea } from '../interfaces';
import './Textarea.css';
import { useState } from "react";

function Textarea({ title, placeholderText, disabled = false, onChange }: ITextarea) {
    const [text, setText] = useState("");
    const [hasError, setHasError] = useState(false);

    return ( 
        <>
            <label className="textarealabel" htmlFor="textareaId">{title}</label>
            <textarea
                id="textareaId"
                className="textarea"
                placeholder={placeholderText}
                disabled={disabled}
            />
            {hasError && <div className="error">Error text</div>}
        </>
    );
}

export default Textarea;
