//import './App.css';
import '../src/Login/Login.css';
import TabBar from './Tapbar';
import Login from './Login/Login';
import Home from './Home/Home';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Signup from './Signup/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
