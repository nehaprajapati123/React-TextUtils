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
       
        navigator.clipboard.writeText(text)
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

                <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
  
                <button  disabled={text.length===0}  className="btn btn-primary mx-3 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
  
                <button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleDeleteClick}>Delete</button>
  
                <button  disabled={text.length===0}  className="btn btn-primary mx-3 my-1" onClick={handleCopy}>Copy Text</button> 

                <button  disabled={text.length===0}  className="btn btn-primary mx-3 my-1" onClick={handleClearClick}>ClearText</button>

                <button  disabled={text.length===0}  className="btn btn-primary mx-3 my-1" onClick={handleExtraSpace}>Remove Space</button>

            </div>

            <div className='conatiner mx-1 my-4' style={{ color: props.mode === `dark` ? `white` : `black` }}>
                <h3>your text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word length {text.length} Character</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes of reading</p>
                <h4>TextArea preview:-</h4>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>

    )
}



