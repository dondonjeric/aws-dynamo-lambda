import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [selected, setSelected] = useState(0);
  return (
    <div>
        <header className='overflow-auto'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={() => setSelected(0)}>Dondon</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={selected == 0 ? 'nav-link active': 'nav-link'}to="/" onClick={() => setSelected(0)}>Home</Link>
                            </li>
                            <li className="nav-item">
                                
                                <Link className={selected == 1 ? 'nav-link active': 'nav-link'} to="/projects" onClick={() => setSelected(1)}>Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navigation;