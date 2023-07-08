import React, { Component } from "react";

export class Newsitem extends Component {
  articles = [];
  constructor(){
    super();
    this.state = {
        articles: this.articles,
    }
  }
  async componentDidMount()
  {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=64b16658e2ea4245be339d32e17be79e";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});
  }

  render() {
    return (
      <>
      {this.state.articles.map((element)=>{
        return <div className="col-md-3 mt-4" key={element.url}>
        <div className="card" style={{ width: "18rem" }}>
        <a href={element.url?element.url:"https://www.bbc.co.uk/news/av/world-us-canada-66071216"} target="_blanck">
          <img
            src={element.urlToImage?element.urlToImage:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"}
            className="card-img-top"
            alt="abc"
          />
          </a>
          <div className="card-body">
            <h5 className="card-title">{element.title?element.title.slice(0,45):""}...</h5>
            <p className="card-text">{element.description?element.description.slice(0,90):""}...</p>
            <a href={element.url?element.url:"https://www.bbc.co.uk/news/av/world-us-canada-66071216"} target="_blanck" className="btn btn-outline-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
      })}
        
      </>
    );
  }
}

export default Newsitem;
