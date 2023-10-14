import { Container } from 'react-bootstrap';
import './App.css';
import NavbarReto1 from './components/NavbarReto1';
import ProgressBarReto2 from './components/ProgressBarReto2';
import Timer from './components/Timer';
import Reto7 from './components/Reto7';
function App() {
  return (
    <div id="App">
      <Container>
        <h1>Reto 1</h1>
        <NavbarReto1/>
        <NavbarReto1 volteado/>
        <h1 className='mt-5'>Reto 2</h1>
        <ProgressBarReto2/>
        <h1 className='mt-5'>Reto 3</h1>
        <h1 className='mt-5'>Reto 4</h1>
        <Timer/>
        <h1 className='mt-5'>Reto 6</h1>

        <h1 className='mt-5'>Reto 7</h1>
        <Reto7/>
      </Container>
      
    </div>
  );
}

export default App;
