import '../partial views/headerStyle.css';
import img from '../images/smile.png'
export const Header = ({onGameClick})=>{
    return (
        <header>
            <div className="menu">
                <nav className="navbar bg-dark">
                    <img id="logo" src={img} alt='err'/>
                    Mini Games
                    <button className="btn btn-outline-light light" onClick={()=>{onGameClick()}}>игры</button>
                    <div>
                        <div className="input-group">
                            <input type="text" className="form-control"></input>
                            <button className="btn btn-outline-light" >поиск</button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}