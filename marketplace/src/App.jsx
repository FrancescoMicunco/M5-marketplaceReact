import './App.css';
import MyNavbar from './Components/Navbar'
import Backoffice from './Components/Backoffice';
import Homepage from './Components/Homepage'
import 'bootstrap/dist/css/bootstrap.css'


function App() {
    return ( <div className = "App" >
        
        
        <MyNavbar />
            <Homepage />
            <Backoffice />
         </div>
    );
}

export default App;