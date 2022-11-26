import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/Login';
import Alert from './components/Alert';

function App() {
  const [mode, setMode]= useState('light');   //Whether dark mode is enabled or not
  const [alert, setAlert] = useState('null');

  const showAlert= (messege, type)=>{
    setAlert({
      msg:messege,
      type:type
    })
  }



  const toggleMode =()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#050A30';
      showAlert("Dark Mode had been enabled", "success")
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode had been enabled", "success")

    }

  }

  return (
    
    <>
      <BrowserRouter>
        <Navbar title='TextUtil' about="About" mode ={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>

        <Routes>
          <Route path='/' element={<TextForm mode ={mode}/>} />
          <Route path='login' element={<Login/>}/>
          <Route path='about' element={<About/>}/>
        </Routes>
        </BrowserRouter>

          
    </>
  );
}

export default App;
