import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {  
  constructor(){
    super();
    this.state = {
        articles: [],
        page: 1,
        pageSize: 12
    }
  }
  async componentDidMount()
  {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=64b16658e2ea4245be339d32e17be79e&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }
  handlePrevNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=64b16658e2ea4245be339d32e17be79e&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    });
    window.scrollTo(0, 0);
  }
  handleNextNews = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=64b16658e2ea4245be339d32e17be79e&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    });
    window.scrollTo(0, 0);
  }
  render() {
    let {title} = this.props;
    const containerStyle = {
        margin:"80px"
    }
    return (
      <>
      <div className="container mt-5 mb-5" >
        <h2 className="text-center mb-5" style={containerStyle}>{title} </h2>
        <div className="row">
        {this.state.articles.map((element)=>{
           return <div className="col-md-3 mt-4 col-sm-6 col-lg-3" key={element.url}>
            <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
      <div className="container d-flex justify-content-around">
      <button disabled={this.state.page <= 1} onClick={this.handlePrevNews} type="button" className="btn btn-primary">&larr; Previous</button>
      <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.state.pageSize)} type="button" onClick={this.handleNextNews} className="btn btn-primary">Next &rarr;</button>
      </div>
    </>
    )
  }
}

export default News