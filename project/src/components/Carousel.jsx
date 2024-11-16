import { useState } from "react";

export const Slide = ({orderLevel, children})=>{
    return <>{children}</>
}

export const Carousel = ({children})=>{
    const [slideNum, setSlideNum] = useState(1);
    const handleClickNext = ()=>{
        if (slideNum + 1 <= children.length){
            setSlideNum(slideNum + 1);
        }
        else{
            setSlideNum(1)
        }
    }
    const handleClickBack = ()=>{
        if (slideNum - 1 <= children.length){
            setSlideNum(slideNum - 1);
        }
        else{
            setSlideNum(1)
        }
    }
    return (
        <div className="carousel">
            <button onClick={()=>{handleClickBack()}}>Back</button>
            <button onClick={()=>{handleClickNext()}}>next</button>
            {children.map((slide)=>(
                slide.props.orderLevel === slideNum && <div key={slide.props.orderLevel} className="slide">{slide.props.children}</div>
            ))}
        </div>
    );
}