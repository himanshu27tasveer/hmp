import React, { Component } from 'react';


class About extends Component {

    render() {
        return (
            <div className="aboutsection" id="about">
                <div className="about">

                    <div className="aboutme">

                        <div className="aboutimgdiv">
                            <img src="assets/profile.jpg" id="profile" alt="Himanshu Mahawar" />
                        </div>
                        <div className="abouttext">
                            <p>
                                Hello, i'm Himanshu, currently enrolled in Electronics and Communication Engineering (B.Tech. 4th year) National Institute of Technology, Warangal. A self-taught developer (almost) and also a photographer (going to full time in future) :(
                                <br/>
                                I create vibrant websites
                                I like to read books on modern inspirational thoughts (also have interest in space exploration). I learn a lot from these kind of book that i think is very useful for me and for the people around me. I love to build portfolio websites. And i also like to play acoustic guitar (learning).
                                <br />
                                Other things i like are listening music of between 2000 and 2015. As i was born  in 2000, so most of these songs are too much complicated to understand.
                                <br/>
                                Let me know if i can do something for you (If you are needy, i can do it for free).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default About;