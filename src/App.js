import { useState } from 'react';
import Alert from './Alert';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msj: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }
    const toggleMode = () => {
        if (mode === "light") {
            setMode('dark');
            document.body.style.backgroundColor = '#042743'
            showAlert(" Dark mode has been enable", "success")
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white'
            showAlert(" Light mode has been enable", "success")

        }

    }


    return (
        <>
            <Router>
                <Navbar title="TextUtils" aboutText="about" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />


                <div className="container my-3">

                    <Routes>
                        <Route exact path='/About' element={<About  mode={mode}/>} />


                        <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter your Text :-" mode={mode} />
                        } />



                    </Routes>
                </div>
            </Router>

        </>
    )
}


export default App;









