import React, { Component } from 'react';




window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "10px 10px 20px";
        document.getElementById("logo").style.fontSize = "40px";
        document.getElementById("navbar").style.height = "80px";
        document.getElementById("logo").style.padding = "10px";

    } else {
        document.getElementById("navbar").style.padding = "100px 10px";
        document.getElementById("logo").style.fontSize = "40px";
        document.getElementById("logo").style.padding = "15px";
        document.getElementById("navbar").style.height = "auto";
        var elems = document.querySelectorAll(".active");
        [].forEach.call(elems, function (el) {
            el.classList.remove("active");
        });
    }
}


class Header extends Component {


    render() {

        return (
            <div>

                <div id="navbar">
                    <a href="#default" id="logo" style={{ borderLeft: "2px solid rgb(255, 112, 17)", borderBottom: "2px solid rgb(255, 112, 17)" }}>Himanshu Mahawar</a>
                    <div id="navbar-right">
                        <a href="#about" onClick={this.props.change}>About Me</a>
                        <a href="#projects" onClick={this.props.change}>Projects</a>
                        <a href="#skills" onClick={this.props.change}>Skills</a>
                        <a href="#contact" onClick={this.props.change}>Contact me</a>

                    </div>
                </div>

            </div>
        );

    }
}

export default Header;