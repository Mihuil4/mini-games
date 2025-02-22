import { Interesting } from "./partial views/Interesting";
import { Header } from "./partial views/Header";
import { Footer } from "./partial views/footer";
import { Carousel, Slide } from "./Carousel";
import lines from "../images/lines.png"
import styles from "./App.module.css";
import Smile from "./partial views/smile"
import { useState } from "react";

export const App = ()=>{
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = ()=>{
    setIsClicked(!isClicked);
  }
  
  return (
    <div className="main">
      <Header onGameClick={()=>{handleClick()}}/>
      <Smile/>
      {isClicked && <><Interesting />
      <Carousel >
        <Slide orderLevel={1}>
          <img src={lines}/>
        </Slide>
        <Slide orderLevel={2}>
          <img src={smile}/>
        </Slide>
      </Carousel></>}
      <Footer />
      
    </div>
  );
}