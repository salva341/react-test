import logo from './logo.svg';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="links">
                <div className="visit-profile">
                    <span>Visit my profile at</span>
                </div>
                <a href="https://www.linkedin.com/in/salva-romero-aguilar" data-testid="linkedin-ref"
                   className="text-light" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin" data-testid="linkedin"></i>
                </a>
                <a href="https://github.com/salva341" data-testid="github-ref" className="text-light" target="_blank"
                   rel="noreferrer">
                    <i className="fab fa-github-square" data-testid="github"></i>
                </a>
                <a href="https://codepen.io/salva341/" data-testid="codepen-ref" className="text-light" target="_blank"
                   rel="noreferrer">
                    <i className="fab fa-codepen" data-testid="codepen"></i>
                </a>
            </div>
            <header className="home-header">
                <img src={logo} className="Home-logo" alt="logo" data-testid="react-logo"/>
            </header>
        </div>
    );
}

export default Home
