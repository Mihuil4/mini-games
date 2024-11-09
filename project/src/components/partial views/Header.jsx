import img from '../../images/main.png'
export const Header = ()=>{
    return (
        <header>
            <div className="menu">
                <nav class="navbar navbar-dark bg-dark">
                    <img id="logo" src={img} alt='err'/>
                    Main Games
                    <a class="a nav-item games" href="../Проект/indexMain.html">
                        <button class="btn btn-outline-light light">игры</button>
                    </a>
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control"></input>
                            <button class="btn btn-outline-light" onclick="()=>{f()}">поиск</button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}