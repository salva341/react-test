import logo from './logo.svg';
import './Home.css';

function Home() {
    return (
        <div className="Home">

            <div className="links">
                <div className="visit-profile">
                    <span>Visit my profile at</span>
                </div>
                <a href="https://www.linkedin.com/in/salva-romero-aguilar" className="text-light" target="_blank">
                    <i
                    class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/salva341" className="text-light" target="_blank">
                    <i class="fab fa-github-square"></i>
                </a>
                <a href="https://codepen.io/salva341/" className="text-light" target="_blank">
                    <i className="fab fa-codepen"></i>
                </a>


            </div>
            <header className="home-header">
                <img src={logo} className="Home-logo" alt="logo"/>
            </header>
        </div>
    );
}

export default Home
