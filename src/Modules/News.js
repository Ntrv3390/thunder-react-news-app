import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {  
  render() {
    let {title} = this.props;
    const containerStyle = {
        margin:"80px"
    }
    return (
      <div className="container mt-5 mb-5" >
        <h2 className="text-center mb-5" style={containerStyle}>{title} </h2>
        <div className="row">
            <Newsitem/>
        </div>
      </div>
    )
  }
}

export default News