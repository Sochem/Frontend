import React from 'react';
import logo from './sochemlogo.png';
import './header.css';

function Header(){

    return (
        <div className="home-header">
            <div className="col-12 col-md-12 text-center">
                <img src={logo} style={{width:200, height:200}} alt="logo"/>
            </div>
            <div className="text-center" style={{marginTop:'10rem'}}>
                <div>
                        <span id="sochem-home-heading" > The Society of Chemical Engineers
                        </span>
                </div>
            </div>
        </div> 
    );

}
export default Header;