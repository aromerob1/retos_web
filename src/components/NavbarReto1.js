import React from 'react';
import './NavbarReto1.css';

function NavbarReto1({ volteado = false }) {
    const direccion = volteado ? 'flex-row-reverse' : 'flex-row';
    const direccionItems = volteado ? 'flex-row-reverse' : 'flex-row';
    const direccionForm = volteado ? 'flex-row-reverse' : 'flex-row';

    return(
        <nav className={`navbar navbar-expand-lg bg-body-tertiary`}>
            <div className={`container-fluid d-flex ${direccion}`}>
                <div className={`menu-container d-flex ${direccion}`}>
                    <div className="navbar-brand-container">
                        <a className="navbar-brand" href="/">Navbar</a>
                    </div>
                    <div className={`collapse navbar-collapse d-flex ${direccionItems}`} id="navbarSupportedContent">
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 d-flex ${direccionItems}`}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <form className={`d-flex ${direccionForm}`} role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}

export default NavbarReto1;











