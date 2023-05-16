import React from 'react';
import '../Styles/Header.css'
function Header(props) {
    return (
        <div>
            <nav className='navbar'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href="/">Anjali's BlogPost App</a>
                </div>
            </nav>
        </div>
    );
}

export default Header;