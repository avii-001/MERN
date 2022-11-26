
import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick=()=>{
    let newText=text.toUpperCase;
    setText(newText)
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }


  const [text, setText]=useState('Enter your value here');

  return (
    <>
      <div className='container my-2' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black' }} rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-info mx-2" onClick={handleUpClick}>UpperCase</button>
        <button type="button" className="btn btn-info mx-2" onClick={handleLoClick}>LowerCase</button>
      </div>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary </h1>
        <p>
          {text.split(" ").length} words and {text.length} characters<br/>
          {0.08*text.split(" ").length} minutes to read
        </p>
      </div>
  </>
  )
}
