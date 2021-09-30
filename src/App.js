import logo from './logo.svg';
import './App.css';
import { Button, Rating } from '@mui/material';
import Newspaper from './components/Newspaper/Newspaper';


function App() {
  return (
    <div className="App">
      <Button variant="contained">Hello Material</Button> <br /> <br />
      <Rating name="read-only" value={4} readOnly></Rating>
      <br />
      <Newspaper></Newspaper>
    </div>
  );
}

export default App;
