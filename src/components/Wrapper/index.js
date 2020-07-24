import React, { Component } from "react";
import "./style.css";

  class Wrapper extends Component {
    constructor(props) {
      super(props)
      this.state = {
        backgroundStyling: {
          backgroundImage: "url(" + "https://images.unsplash.com/photo-1595521534390-0da06e43ae71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }
      };
    }
    render() {
      return (
        <div className="background"
          style={this.state.backgroundStyling}>
          {this.props.children.map(child => child)
          }
        </div>
      )
    }
  }



export default Wrapper
