import { useState } from "react";
import styles from './carousel.module.css';
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
        if (slideNum - 1 > 0){
            setSlideNum(slideNum - 1);
        }
        else{
            setSlideNum(2)
        }
    }
    return (
        <div className={styles.carousel}>
            <button className={styles.back_btn} onClick={()=>{handleClickBack()}}>Back</button>
            <button className={styles.next_btn} onClick={()=>{handleClickNext()}}>next</button>
            {children.map((slide)=>(
                slide.props.orderLevel === slideNum && <div key={slide.props.orderLevel} className={styles.content}>{slide.props.children}</div>
            ))}
        </div>
    );
}