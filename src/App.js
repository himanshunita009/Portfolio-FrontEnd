import './App.css';
import Contact from './contact/contact';
import Navbar from "./navigation/Navbar";
import Skills from "./Skills/Skills";
import Home from "./Home/Home";
import Academics from "./academics/academics";
import Projects from './projects/projects';
import {  useState } from 'react';

function App() {
  const [expand,setState] = useState(false);
 return (
      <div className="App">
        <div className='nav-container'>
          <Navbar menuState={expand} handleMenuClick={() => setState(!expand)}/>
        </div>
        <div className="main-container">
          <Home />
          <Projects menuState={expand}/>
          <Skills />
          <Academics />
          <Contact />
        </div>
      </div> 
  );
}

export default App;
