
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPAge from './pages/LoginPage/LoginPAge';
import FormPage1 from './pages/FormPage1/FormPage1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPAge/>}/>
        <Route path='/formpage1' element={<FormPage1/>}/>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
