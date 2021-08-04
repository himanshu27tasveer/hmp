import React, { Component } from 'react';
import { RenderSkills } from './helpers/renderSkills';
import { skillset } from '../data/skillset';



class Skills extends Component {

    render() {
        return (
            <div id="skills">
                <div id="lgbtq"></div>
                <div className="section">
                    <h3 className="text-center">Skills</h3> <p className="text-light text-center gradient-text">Never ending Learning</p>
                </div>
                <br />
                <div className="skillset">

                    <div className="container">
                        <div id="skillcont">
                            <RenderSkills skillset={skillset} />
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}


export default Skills; 