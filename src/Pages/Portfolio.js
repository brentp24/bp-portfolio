import React, { Component } from "react";
// import { CardColumns } from "reactstrap";
import Card from "../components/Card";
import Grid from "@material-ui/core/Grid";

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

                <Grid container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {this.state.projects.map(project => (
                        <Grid item xs={12} sm={6} md={3} >
                            <Card
                                id={project.id}
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                link={project.link}
                            />
                        </Grid>
                    ))}
                </Grid>

            </div>
        )
    }
}

export default Portfolio;