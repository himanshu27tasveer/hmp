import React, { Component } from 'react';
import Header from './Header';
import About from './About'
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';
import Footer from './footer';



class Main extends Component {

    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }

    change(e) {
        var elems = document.querySelectorAll(".active");
        [].forEach.call(elems, function (el) {
            el.classList.remove("active");
        });
        e.target.className = "active";
    }

    render() {
        return (
            <div>
                <Header change={this.change} />
                <About />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </div>
        );
    }

}


export default Main;