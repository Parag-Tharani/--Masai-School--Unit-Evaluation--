import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route} from "react-router-dom"
import { Login } from './components/Auth/Login';
import { Home } from "./components/Home/Home"
import { MovieDetails } from "./components/Home/MovieDetails"

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={ <Login />}></Route>
      <Route path ='/movie/:id' element={<MovieDetails />}></Route>
     </Routes>
    </div>
  );
}

export default App;
