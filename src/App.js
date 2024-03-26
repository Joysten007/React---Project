import { useEffect, useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


function App() {
  let timer;

  const [mode, setMode] = useState('light');   // whether dark mode is enabled
  const [alert, setAlert] = useState(null);

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success ")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success ")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    
    timer = setTimeout(() => {
      showAlert(null)
      setAlert(null)
    }, 2000);
  }


  // useEffect(()=>{
  //   clearTimeout(timer);
  // },[])

  return (
    <>
    <Navbar title="Text-Edit" AboutItem="About Us" mode={mode} toggleMode={toggleMode} />
     <Alert alert = {alert}/>
    <div className="container my-3">
    <TextForm  showAlert= {showAlert} heading="Enter the text to analyze" mode={mode}/>
    {/* <About /> */}
    </div>
    </>
  );
}


export default App;
