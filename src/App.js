// https://www.youtube.com/watch?v=CMg_1KxpM_4&t=600s

import "./App.css";
import NavBar from "./components/Nav Bar/NavBar";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import HomePage from "./components/Home/HomePage.js";
import SwiperComp from "./components/SwiperComp/SwiperComp.js";



function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      
      <About id="about" />
      {/* <Projects /> */}
      <div className="swiper">
    <SwiperComp/>
    </div>
      <Skills />
    </div>
  );
}

export default App;
