import { Interesting } from "./partial views/Interesting";
import { Header } from "./partial views/Header";
import { Footer } from "./partial views/footer";
import { Carousel, Slide } from "./Carousel";
import lines from "./images/lines.png";
import main from '../public/main.png';
// import Smile from "./partial views/smile"
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = ()=>{
    setIsClicked(!isClicked);
  }
  
  return (
    <div className="main">
      <Header src={'./main.png'} onGameClick={()=>{handleClick()}}/>
      {/* <Smile/> */}
      {isClicked && <><Interesting />
      <Carousel >
        <Slide orderLevel={1}>
          <img src={lines}/>
        </Slide>
        <Slide orderLevel={2}>
          <img src={lines}/>
        </Slide>
      </Carousel></>}
      <Footer />
    </div>
  );
}

export default App
