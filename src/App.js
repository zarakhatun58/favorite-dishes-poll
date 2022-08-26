import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/index';
import AllDishes from './Components/AllDishes/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/index';
import Login from './Components/Login/index';
import SignUp from './Components/SignUp/index';
import SingleDish from './Components/SingleDish';
import Voting from './Components/Voting/index';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
    <Header/>
      {/* <AllDishes/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/singleDish" element={<SingleDish />} />
          <Route path="/allDishes" element={<AllDishes />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/users" element={<Users />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
