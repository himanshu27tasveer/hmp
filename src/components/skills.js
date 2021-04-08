import React, { Component } from 'react';
import { RenderSkills } from './helpers/renderSkills';
import { skillset } from '../data/skillset';



class Skills extends Component {

    render() {
        return (
            <div id="skills">
                <br />
                <div className="section">
                    <h1 className="text-center">Skills</h1> <h6 className="text-light text-center">Never ending Learning</h6>
                </div>
                <br />
                <div className="skillset">

                    <div className="container">
                        <div>
                            <RenderSkills skillset={skillset} />
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}


export default Skills; 