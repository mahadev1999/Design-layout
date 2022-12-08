import logo from './logo.svg';
import './App.css';
import Home from './components/home.js';
import About from './components/about us.js';
import Service from './components/our service.js';
import Contact from './components/contact us.js';
import Pro from './components/our portfolio.js';

function App() {
  return (
    <div>
    <Home/>
    <About/>
    <Service/>
    <Contact/>
    <Pro/>
    </div>
  );
}

export default App;
