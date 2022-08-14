import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=661ca02518a44832b40fe7d76d9576b7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(10);
    let response = await fetch(url);
    this.props.setProgress(50);
    let data = await response.json();
    this.props.setProgress(70);
    this.setState({ loading: false });
    this.setState({
      articles:data.articles,
      totalResults: data.totalResults,
    });
    this.props.setProgress(100);
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=661ca02518a44832b40fe7d76d9576b7&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(10);
    let response = await fetch(url);
    this.props.setProgress(50);
    let data = await response.json();
    this.props.setProgress(70);
    this.setState({
      articles: this.state.articles.concat(data.articles)
    });
    console.log(this.state.articles);
    this.props.setProgress(100);
  };
  capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  render() {
    return (
      <>
        <h1 className="text-center mt-4" id="Top-head" data-aos="zoom-in">
          Top HeadLines on {this.capitalize(this.props.category)}
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
          className="overflow-hidden"
        >
          <div className="container">
            <div className="row my-3">
              {!this.state.loading &&
                 this.state.articles.map((element) => {
                  if (element.description != null && element.title != null) {
                    return (
                      <div className="col-md-4 col-12 mt-2" key={element.url}>
                        <Newsitem
                          title={element.title}
                          discription={element.description.slice(0, 60)}
                          imageUrl={element.urlToImage}
                          url={element.url}
                          date={element.publishedAt}
                        />
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
