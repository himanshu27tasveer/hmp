/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';


function myFunction(x) {
  if (x){
    closeNav();
  }
  else {
    openNav();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}


const Header = (props) => {

    const [clas, setClas ] = useState("hamburger");
    const [tog, setTog] = useState(false);

    useEffect(() => {
        if (!tog) {
            setClas("hamburger");
        }
        else {
            setClas("change");
        }
    }, [tog, ])

    return (
        <div id="pnav">
            <div id="nav">
              <div>
                <p id="title">himanshu<img src="./assets/fp.svg" style={{"padding": "2px"}} width="30px" height="35px" alt="</>" />mahawar</p>
              </div>
              <div className={clas} onClick={() => {
                      setTog(!tog);
                      myFunction(tog);
                  }}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
              </div>
            </div>
            <div id="lgbtq"></div>
            <div id="mySidenav" className="sidenav">
            <div id="navbar-right">
                <a href="#about" onClick={(e) => {
                  props.change(e);
                  setTog(!tog);
                      myFunction(tog);
                } }>About Me</a>
                <a href="#projects" onClick={(e) => {
                  props.change(e);
                  setTog(!tog);
                      myFunction(tog);
                } }>Projects</a>
                <a href="#skills" onClick={(e) => {
                  props.change(e);
                  setTog(!tog);
                      myFunction(tog);
                } }>Skills</a>
                <a href="#contact" onClick={(e) => {
                  props.change(e);
                  setTog(!tog);
                      myFunction(tog);
                } }>Contact me</a>
            </div>
            </div>
        </div>
    );
}

export default Header;
 