import smileStyle from "./smileStyle.css"
import smile from "../../images/smile.png"
export const smile = () => {
    var mouseListener = function(event){mouseMoveFunc(event)};
    document.addEventListener("mousemove", mouseListener);
    function mouseMoveFunc(event){
	checkCollision();
    }
    function mouseMoveFunc(event){
        pig.style.left=event.clientX - 380 + 'px' ;//380
        pig.style.top=event.clientY - 240 + 'px' ;//240
        checkCollision();
    }
    return(
        <div className="container">
            <div className="text" id="HelloText"> Нажмите enter</div>
            <img src={smile} id="pig"></img>
        </div>
    )
}