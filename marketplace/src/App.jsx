import './App.css';
import MyNavbar from './Components/Navbar'
import Backoffice from './Components/Backoffice';
import Homepage from './Components/Homepage'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <MyNavbar />
        </BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/" element={<Backoffice />}></Route>
        </Routes>

       
      </div>
    );
}

export default App;