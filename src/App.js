// import logo from './logo.svg';
import './App.css';
//import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
//import { BrowserRouter, Route, Routes } from "react-router-dom";

//let user = "Talha";

function App() {
// dark mode 
const [ mode , setMode] = useState ('light');

const [alert , setAlert] = useState (null);

const showAlert = (message , type)=>{
  setAlert({
msg : message,
typ : type,
  })
  setTimeout(() => {
    setAlert(null);
  }, 550);
}

const toggleMode = () => {
  if (mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor=('lightgreen');
    showAlert("Dark Mode is Active","success");
  }
  else{
    setMode ('light');
    document.body.style.backgroundColor=('lightgray');
    showAlert("Light Mode is Active","success");
  }
}  


const togMode = ()=>{
  if (mode === 'pink'){
    setMode ('blue');
    document.body.style.backgroundColor=('lightblue');
    showAlert("blue is Active","success");
  }
  else{
    setMode ('pink');
    document.body.style.backgroundColor=('pink');
    showAlert("pink is Active","success");
  }
  
}

  return (
<>
{/* // Alert starts here */}
<Alert alert= {alert}/>



{/* <BrowserRouter>
<Navbar title="LOGO" home="Home" aboutus="About" 
 mode={mode} toggleMode={toggleMode} togMode={togMode}/>
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={ <About mode={mode}/>}></Route>
            <Route exact path="/"element={
            <Textform showAlert={showAlert}heading = "Enter your changing Text" mode={mode}/>
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter> */}



{/* Use this if you want to use prps  */}

<Navbar title="LOGO" home="Home" aboutus="About" 
 mode={mode} toggleMode={toggleMode} togMode={togMode}/>

{/* const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}
 */}

<div className="container my-3">
<Textform showAlert={showAlert}heading = "Enter your changing Text" mode={mode}/>
</div>

{/* <div>
  <About mode={mode}/>
</div> */}
    </>
  );
}

export default App;
