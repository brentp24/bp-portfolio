import React, { Component } from "react";
import Bio from "../components/Bio"
class About extends Component {

    render() {
        return (
            <div>
                <Bio />
                {/* <hr style="width:90%;text-align:center"> */}
                <div className="row">
                    <div className="col-sm-1">
                        <h5>linkedin: </h5>
                    </div>
                    <div className="col-md-10"><h5><a href="https://www.linkedin.com/in/brentjpeterson/">view</a></h5>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-1">
                        <h5>github: </h5>
                    </div>
                    <div className="col-md-10"><h5><a href="https://github.com/brentp24">view</a></h5>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-1">
                        <h5>resume: </h5>
                    </div>
                    <div className="col-md-10"><h5><a href="https://drive.google.com/open?id=1ve7f4lflkSsEhZRRreik8T83_437NKPD">view</a></h5>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-1">
                        <h5>email: </h5>
                    </div>
                    <div className="col-md-10"><h5><a href="mailto:brentp24@gmail.com">brentp24@gmail.com</a></h5>
                    </div>
                </div>
            </div>

        )

    }
}

export default About;


