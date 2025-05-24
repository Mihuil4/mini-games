import '../partial views/headerStyle.css';
export const Header = ({ src, onGameClick})=>{
    return (
        <header>
            <nav className="navbar navbar-expand-md bg-dark">
                <div className='container'>
                    <a className='navbar-brand' href="index.html">
                        <img id="logo" className='d-inline-block align-text-top' src={src} alt='err'/>
                        <span className='a text-white'>Mini Games</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    </div>
                    <form className='container-fluid justify-content-start'>
                        <button className="btn btn-outline-light light" onClick={()=>{onGameClick()}}>игры</button>
                    </form>
                    <form className="d-flex input-group" role="search">
                        <input type="text" placeholder='search' className="form-control"></input>
                        <button className="btn btn-outline-light" >поиск</button>
                    </form>
                    <form className='container-fluid justify-content-start'>
                        <a class="nav-link active a text-white" href="#">
                            <button className="btn btn-outline-light light">регистрация</button>
                        </a>
                    </form>
                </div>
            </nav>
        </header>
    );
}