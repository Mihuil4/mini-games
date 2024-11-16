import { Interesting } from "./partial views/Interesting";
import { Header } from "./partial views/Header";
import { Footer } from "./partial views/footer";
import { Carousel, Slide } from "./Carousel";

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
          <h1>test</h1>
          <br />
          <h1>test123</h1>
        </Slide>
        <Slide orderLevel={2}>
          <h2>test2</h2>
        </Slide>
      </Carousel>
    </div>
  );
}