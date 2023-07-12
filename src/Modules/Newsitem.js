import React, { Component } from "react";

export class Newsitem extends Component {


  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
        <a href={newsUrl?newsUrl:"https://www.bbc.co.uk/news/av/world-us-canada-66071216"} target="_blanck">
          <img
            src={imageUrl?imageUrl:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"}
            className="card-img-top"
            alt="abc"
          />
          </a>
          <div className="card-body">
            <h5 className="card-title">{title?title.slice(0,45):""}...</h5>
            <p className="card-text">{description?description.slice(0,90):""}...</p>
            <a href={newsUrl?newsUrl:"https://www.bbc.co.uk/news/av/world-us-canada-66071216"} target="_blanck" className="btn btn-outline-primary">
              Read More &rarr;
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
