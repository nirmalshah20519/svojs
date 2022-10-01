import React from 'react'
import '../App.css';
import SVOJS from "../svojs.png"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <>
            <nav className='navbar navbar-fixed-top'>
                <h4 className='navSpac'>
                    <img src={SVOJS}
                        alt="logo"
                        width='60'
                        height='60' />
                    &nbsp;
                    SVOJS Member Registration
                </h4>
            </nav>
        </>
    )
}

export default Header
