import React, { Component } from "react";

export class Footer extends Component {
  render() {
    const copyrightStyle = {
        backgroundColor: 'rgba(0,0,0,0.05)',
        color:'#fff'
    }
    let { name } = this.props
    return (
        <footer className="mt-4 text-center text-lg-start bg-dark text-muted">
        <div className="text-center p-4" style={copyrightStyle}>
          Made by {name}
        </div>
      </footer>
    );
  }
}

export default Footer;
