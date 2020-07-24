import React, { Component } from "react";
import Card from "../components/Card";
import projectsJSON from "../projects.json";


class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: projectsJSON
        }
    }
    render() {
        return (

            <div>
                {console.log(this.state)}
                {this.state.projects.map(project => (
                    <Card
                        id={project.id}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        link={project.link}
                    // project={this.state.projects}
                    />
                ))}
                                {console.log(this.state)}

            </div>
        )
    }
}

export default Portfolio;