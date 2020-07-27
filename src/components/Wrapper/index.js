import React, { Component } from "react";
import "./style.css";

  class Wrapper extends Component {
    constructor(props) {
      super(props)
      this.state = {
        backgroundStyling: {
          backgroundImage: "url(" + "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" + ")",
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
