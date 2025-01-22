
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPAge from './pages/LoginPage/LoginPAge';
import FormPage1 from './pages/FormPage1/FormPage1';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPAge/>}/>
        <Route path='/formpage1' element={<FormPage1/>}/>
        <Route path='/' element={<LandingPage/>}/>


      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
