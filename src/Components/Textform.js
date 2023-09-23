//import { getByPlaceholderText } from '@testing-library/react';
import React, {useState} from 'react'
//import PropTypes from 'prop-types'


export default function Textform(props) {

  const [text , setText ] = useState("");
 

  const handleUpClick =() =>{
    console.log("uppercase button was clicked for" + text);
    let newText = text.toUpperCase();
    setText(newText);
    if(newText.length<1){
      props.showAlert("Nothing to Convert" , "warning")
    }
    else{
    props.showAlert("Converted to Upper" , "success")
    }
  }
  const handleOnChange =(event) =>{
    console.log("On Change");

    //this allows the user to continue writing
    setText(event.target.value);
  }
  const handleLoClick =()=>{
    console.log("lower button was clicked" +text);
    let newText2 = text.toLowerCase();
    setText(newText2);
    if(newText2.length<1){
      props.showAlert("Nothing to Convert" , "warning")
    }
    else{
    props.showAlert("Converted to Lower" , "success")
    }
  }

  const handlecleanClick =() =>{
    //console.log("uppercase button was clicked for" + text);
    let newText3 = ""
    setText(newText3)
  }
// speak text
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

// Copy text
  const handelCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

 

  return (
    <>
<div>

<div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>

<textarea className="form-control"value={text} onChange={handleOnChange} id="mybox" rows="8"
style={{backgroundColor: props.mode==='dark'?'lightblue':'lightgreen'}}></textarea>
</div>
</div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowwer</button>
    <button className="btn btn-primary mx-2" onClick={handlecleanClick}>Clear</button>
    <button className="btn btn-primary mx-2" onClick={handelCopy}>Copy Text</button>
    <button onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
 
    

<div className='container2'style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>Your word and letter Counter</h1>

  {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
  
  <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
  <p>it'll take {0.008 * text.length}min to read</p>
  <div className='container'>
    <h1>Preview</h1>
    <p className='pre'>{text.length>0?text:"Enter to preview"}</p>
  </div>

</div>

    </>
  )
}
