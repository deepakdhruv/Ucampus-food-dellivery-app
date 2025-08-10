import Login from './screens/Login';
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Routes,
  Link,

} from "react-router-dom";
import Sign from './screens/Sign.js';

function App() {
  return (
   <>
  <Router>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/createUser' element={<Sign/>}/>
   </Routes>
  </Router>
   </>
  );
}

export default App;
