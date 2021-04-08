import React, { Component } from 'react';
import { RenderProjects } from './helpers/proData';
import { proData } from '../data/proData';



class Projects extends Component {


    render() {
        return (
            <div id="projects">
                <br />
                <div className="section">
                    <h1 className="text-center">My Projects</h1> <h6 className="text-light text-center">Made with Love</h6>
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