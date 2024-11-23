import { Interesting } from "./partial views/Interesting";
import { Header } from "./partial views/Header";
import { Footer } from "./partial views/footer";
import { Carousel, Slide } from "./Carousel";
import lines from "../images/lines.png"
import smile from "../images/smile.png"
import styles from './App.module.css';

export const App = ()=>{
  return (
    <div className="main">
      {
      /*<Header />
      <Interesting />
      <Footer />
      */
      }
      <Carousel >
        <Slide orderLevel={1}>
          <img className={styles.slide} src={lines}/>
        </Slide>
        <Slide orderLevel={2}>
          <img className={styles.slide} src={smile}/>
        </Slide>
      </Carousel>
    </div>
  );
}