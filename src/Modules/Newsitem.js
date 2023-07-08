import React, { Component } from "react";

export class Newsitem extends Component {
  articles = [
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Latvia swears in Edgars Rinkevics as EU's first openly gay president",
      description:
        "Edgars Rinkevics came out in 2014 and has been a vocal champion of LGBT rights.",
      url: "http://www.bbc.co.uk/news/world-europe-66141706",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/184E0/production/_130325599_0df2dd05ac67d93dcab96a48bc527d0435b80352.jpg",
      publishedAt: "2023-07-08T10:37:19.7621979Z",
      content:
        "Latvia's long-serving foreign minister Edgars Rinkevics has become the first openly gay head of state of a European Union nation. \r\nMr Rinkevics, who from 2011 served as foreign minister, was sworn i… [+1844 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Janet Yellen asks China to cooperate on climate change action",
      description:
        "Treasury Secretary Janet Yellen calls on Beijing to invest more in efforts to transition from fossil fuels.",
      url: "http://www.bbc.co.uk/news/world-asia-66141559",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/156C8/production/_130325778_janetyellen.jpg",
      publishedAt: "2023-07-08T09:52:19.2940825Z",
      content:
        'US Treasury Secretary Janet Yellen has called on China to work with Washington to fight the "existential threat" of climate change.\r\nSpeaking on Saturday, she said the two countries - the largest gre… [+3228 chars]',
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "President Zelensky visits Snake Island as war enters 500th day",
      description:
        "The island became a symbol of Ukraine's resistance after troops there defied a Russian order to surrender.",
      url: "http://www.bbc.co.uk/news/world-europe-66141701",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/10FB0/production/_130325596_annotation2023-07-08083824.png",
      publishedAt: "2023-07-08T08:52:20.215532Z",
      content:
        "Volodymyr Zelensky has posted a video of himself visiting an island that became a symbol of Ukrainian resistance - as the war enters its 500th day. \r\nAt the start of the war, Ukrainian soldiers defen… [+1483 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Biden defends 'difficult decision' to send Ukraine cluster bombs",
      description:
        'The White House says its munitions are less likely to kill civilians, as Moscow slams US "cynicism".',
      url: "http://www.bbc.co.uk/news/world-us-canada-66140460",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1358A/production/_130324297_gettyimages-1405403500.jpg",
      publishedAt: "2023-07-08T01:07:14.9967551Z",
      content:
        'Media caption, Watch: White House addresses sending Ukraine cluster munitions\r\nUS President Joe Biden has defended his "very difficult decision" to give Ukraine cluster munitions, which have a record… [+5272 chars]',
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "The heat index explained in...90 seconds",
      description:
        "Unlike temperature, the heat index measures what the body actually feels.",
      url: "http://www.bbc.co.uk/news/world-us-canada-66071216",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/17AB1/production/_130254969_p0fzpl0x.jpg",
      publishedAt: "2023-07-07T23:37:15.5597744Z",
      content:
        "All eyes are on the temperature this summer. However the heat index, which tracks how heat affects the body, is a different way to measure the recent record-breaking heatwaves. The BBC's Nomia Iqbal … [+44 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Is Taylor Swift snubbing Canada?",
      description:
        "Swift has tour stops in South America, Asia and Australia, but not Canada. Is there bad blood?",
      url: "http://www.bbc.co.uk/news/world-us-canada-66136501",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/3798/production/_130323241_taylor-index2.jpg",
      publishedAt: "2023-07-07T21:52:18.4657779Z",
      content:
        "It's a good time to be a Swiftie. The 33-year-old songwriter is in the middle of her biggest stadium tour to date - a three-hour, 40-song set spanning all the eras of her career - and she's put out f… [+3855 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Netherlands migration: Dutch coalition government collapses - reports",
      description:
        "The four-party coalition has collapsed because of disagreements about asylum policies - media reports.",
      url: "http://www.bbc.co.uk/news/world-europe-66139789",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
      publishedAt: "2023-07-07T18:52:17.3895608Z",
      content:
        "The Dutch government has collapsed because of differences between coalition parties over asylum policies, according to media reports.\r\nThe four parties were unable to find agreement in crisis talks c… [+225 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Ukraine war: What are cluster bombs and why is US sending them to Ukraine?",
      description:
        "This hideous weapon is banned by more than 100 countries - so the move will likely draw intense criticism.",
      url: "http://www.bbc.co.uk/news/world-europe-66133527",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/E467/production/_130317485_dsc01533-2.jpg",
      publishedAt: "2023-07-07T18:37:22.561677Z",
      content:
        "The US has announced it is complying with a Ukrainian request to supply it with controversial cluster munitions. \r\nThe move is likely to draw intense criticism from human rights groups as the weapon … [+3140 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "El Paso Walmart gunman who killed 23 gets multiple life sentences",
      description:
        "The attacker may still face the death penalty if convicted for murder charges in state court.",
      url: "http://www.bbc.co.uk/news/world-us-canada-66111468",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/CF63/production/_130319035_gettyimages-1159706226.jpg",
      publishedAt: "2023-07-07T17:37:17.2807384Z",
      content:
        "The Texas gunman who killed 23 people at a Walmart in 2019 has been sentenced to 90 consecutive life sentences in federal prison.\r\nPatrick Crusius, 24, had pleaded guilty after federal prosecutors sa… [+2307 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Britney Spears: No charges against Victor Wembanyama's guard who 'struck' pop star",
      description:
        "Britney Spears claimed the incident at a restaurant in Vegas was a 'traumatic experience' for her.",
      url: "http://www.bbc.co.uk/news/world-us-canada-66129605",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/515F/production/_130313802_8a34edb3da9a9d4ef437527d1b608d1e4ae28cf90_0_3500_24622000x1407.jpg",
      publishedAt: "2023-07-07T17:07:22.3108957Z",
      content:
        "Media caption, Watch: 'I didn't see what happened' says Victor Wembanyama\r\nA security guard who allegedly struck Britney Spears while protecting French basketballer Victor Wembanyama in Las Vegas on … [+2317 chars]",
    },
  ];
  
  constructor(){
    super();
    this.state = {
        articles: this.articles,
    }
  }

  render() {
    return (
      <>
      {this.state.articles.map((element)=>{
        return <div className="col-md-3 mt-4" key={element.url}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={element.urlToImage?element.urlToImage:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"}
            className="card-img-top"
            alt="abc"
          />
          <div className="card-body">
            <h5 className="card-title">{element.title?element.title.slice(0,45):"Default Text"}</h5>
            <p className="card-text">{element.description?element.description.slice(0,90):"Default paragraph"}</p>
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
