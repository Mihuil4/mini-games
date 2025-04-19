import "./smileStyle.css"
import smile from "../images/smile.png"
const Smile = () => {
    var mouseListener = function(event){mouseMoveFunc(event)};
    document.addEventListener("mousemove", mouseListener);
    function mouseMoveFunc(event){
    }
    function mouseMoveFunc(event){
        pig.style.left=event.clientX - 380 + 'px' ;//380
        pig.style.top=event.clientY - 240 + 'px' ;//240
    }
    return(
        <div className="container">
            <div className="text" id="HelloText"> Нажмите enter</div>
            <img src={smile} id="pig"></img>
        </div>
    )
}
export default Smile;