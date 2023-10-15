import './App.css';
import Reto7 from './components/Reto7';
import NavbarComponent from './components/reto1/NavbarComponent.js';
import ProgressbarComponent from './components/reto2/ProgressbarComponent.js';
import RegisterComponent from './components/reto3/RegisterComponent.js';
import TimerComponent from './components/reto4/TimerComponent.js';
import GeneratePasswordComponent from './components/reto6/GeneratePasswordComponent.js';
function App() {
  return (
      <div>
        <h1>Reto 1</h1>
        <NavbarComponent></NavbarComponent>
        <h1>Reto 2</h1>
        <ProgressbarComponent></ProgressbarComponent>
        <h1>Reto 3</h1>
        <RegisterComponent></RegisterComponent>
        <h1>Reto 4</h1>
        <TimerComponent></TimerComponent>
        <h1>Reto 6</h1>
        <GeneratePasswordComponent></GeneratePasswordComponent>
        <h1>Reto 7</h1>
        <Reto7/>
    </div>
  );
}

export default App;
