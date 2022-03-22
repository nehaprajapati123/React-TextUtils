import React, { useState } from 'react'

export default function TextForm(props) {


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to UpperCase", "success")
    }


    const handleDeleteClick = () => {
        let newText = text.slice(0, text.length - 1);
        setText(newText)

    }


    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert(" Text Copied", "success")

    }



    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to LowerCase", "success")

    }


    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Extra Space Removed", "success")

    }


    const handleClearClick = () => {
        let newText = ""
        setText(newText)
        props.showAlert(" Text Cleared", "success")

    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    const [text, setText] = useState('');
    return (
        <>
            <div className='conatiner' style={{ color: props.mode === `dark` ? `white` : `black` }}>

                <h3> {props.heading}</h3>

                <div className="mb-3">
                    <textarea  className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === `dark` ? `grey` : `white`, color: props.mode === `dark` ? `white` : `black` }} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>

                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>

                <button className="btn btn-primary mx-1" onClick={handleDeleteClick}>Delete</button>

                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>

                <button className="btn btn-primary mx-3" onClick={handleClearClick}>ClearText</button>

                <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Space</button>

            </div>

            <div className='conatiner mx-1 my-4' style={{ color: props.mode === `dark` ? `white` : `black` }}>
                <h3>your text summary</h3>
                <p>{text.split(" ").length} word length {text.length} Character</p>
                <p>{0.008 * text.split(" ").length} minutes of reading</p>
                <h4>TextArea preview:-</h4>
                <p>{text}</p>
            </div>
        </>

    )
}



