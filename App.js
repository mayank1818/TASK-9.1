import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className='App'>
      {/* Browser Routing */}
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/login-in' element={<Login className="login-in"/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
