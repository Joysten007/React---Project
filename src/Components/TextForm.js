import React, {useState} from 'react'



export default function TextForm(props) {

const handleUpClick = () =>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success")
};

const handleOnChange = (event) =>{
    // console.log("on Change");
    setText(event.target.value)
}

const handleLowClick = () =>{
    let lower = text.toLowerCase();
    setText(lower)
    props.showAlert("Converted to Lowercase", "success")
}

const clearClick = () =>{
    let clearText = "";
    setText(clearText)
    props.showAlert("Text Cleared", "success")
};

// start

const commands = []
const input = document.querySelector('input')

function saveCommand(e) {
  commands.push({
    action: { type: 'add', key: e.key, index: input.selectionStart },
    inverse: { type: 'remove', index: input.selectionStart }
  })
}

function undo() {
  let value = input.value.split('')
  const lastCommand = commands.pop()
 
  if (!lastCommand) return
    
  switch (lastCommand.inverse.type) {
    case 'remove':
      value.splice(lastCommand.inverse.index, 1)
      break;      
  }
  
  input.value = value.join('')
}
// finish


const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard", "success")
}

const [text, setText] = useState("")
// setText("Next text");
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" onKeyDown={saveCommand} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode === 'dark' ? '#373535' : 'white', color: props.mode=== "dark" ? "white" : "black", borderColor:"grey"}}></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upppercase</button>
    <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-1' onClick={clearClick}>Clear Text</button>
    <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-primary mx-1' onClick={undo}>Undo</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes To Read</p>
        <p>Preview</p>
        <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  ) 
}


