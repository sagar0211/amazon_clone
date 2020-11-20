import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
// import SearchIcon from "@material-ui/icons/Search"


function Header() {
    return (
        <nav className='header'>
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="LOGO"
                />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                {/* <SearchIcon clasaName="header__searchIcon"/> */}
            </div>


        </nav>
    )
}

export default Header
