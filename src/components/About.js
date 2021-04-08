import React, { Component } from 'react';
import { Media } from 'reactstrap';


class About extends Component {

    render() {
        return (
            <div className="aboutsection" id="about">
                <div className="about">
                    <br />
                    <div className="section">
                        <h1 className="text-center head">About Me</h1> <h6 className="text-light text-center des">Little Description</h6>
                    </div>
                    <br />

                    <Media className="aboutme">

                        <Media Body className="text-justify">
                            <p>
                                <Media middle top mr-3 >
                                    <div className="aboutimgdiv">
                                        <img className="mt-2" src="assets/profile.jpg" class="text-center mr-3" width="200px" height="200px" id="mypic" alt="Me" />
                                    </div>
                                </Media>
                                For the Name kindly refer the Logo (if you don't know that yet). So, i'm an undergraduate from National Institute of technology, Warangal. Here i'm studying Electronics and Communication Engineering.
                                <br />
                                I'm a Full Stack Developer. Since i was a little kid, I have always think about the web (How do they do it!), and i always wanted to do it too.  But at the same time i also had interest in electronics gadgets. Rather than Computer games and beautiful softwares i had more interest in what's inside it.
                                <br />
                                And please don't judge my capabilities from ui of this website because i'm not that good at frontend.
                                To get to know more about me get <a href="#contact">connected</a>.
                            </p>
                        </Media>
                    </Media>
                </div>
            </div>
        );
    }

}

export default About;