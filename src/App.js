import './App.css';
import Navbar from './Components/Navbar';
import { Link } from 'react-router-dom';
import Man from './images/man.jpg';

function App() {
  return (
    <div >
      <Navbar />
      <img  style={{ width: 550, height: 675, marginTop:30 }} src={Man} alt="Man" />
  
    </div>
  );
}

export default App;
