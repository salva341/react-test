import {Link} from 'react-router-dom'
import './Navigation.css'
import {useState} from "react";

function Navigation() {
    const [isActive, setIsActive] = useState('HOME');
    const setActive = (active) => {
        setIsActive(active);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-react justify-content-between">
            <div className="container-fluid">
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className={`nav-link  ${isActive == 'HOME' ? 'is-active' : ''}`}
                                      onClick={() => setActive('HOME')}>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/characters"
                                      className={`nav-link ${isActive == 'CHARACTER' ? 'is-active' : ''}`}
                                      onClick={() => setActive('CHARACTER')}>CHARACTER</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation
