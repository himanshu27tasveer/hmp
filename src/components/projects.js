import React, { Component } from 'react';
import { RenderProjects } from './helpers/proData';
import { proData } from '../data/proData';



class Projects extends Component {


    render() {
        return (
            <div id="projects">
                <div id="lgbtq"></div>
                <br/>
                <div className="section">
                    <h3 className="text-center">My Projects</h3> <p className="text-light text-center gradient-text">Made with Love</p>
                </div>
                <br />
                <div className="container-fluid">
                    <div>
                        <div className="row">

                            <RenderProjects proData={proData} />

                        </div>

                    </div>
                </div>
            </div>

        );
    }

}

export default Projects;