import React, { Component } from "react";
import Bio from "../components/Bio";

import Grid from "@material-ui/core/Grid";


class About extends Component {

    render() {
        return (
            <div>
                <Grid container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                        <Grid item xs={12} sm={6} md={3} >
                            <Bio className="bio" />

                        </Grid>
                </Grid>
            </div>
        )
    }
}

export default About;






