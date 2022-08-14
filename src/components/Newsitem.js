import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
      let {title ,discription,imageUrl,url,date} = this.props;
    return (
      <div>
        <div className="card overflow-hidden" data-aos="fadeInUp" data-aos-delay="500">
            <img src={imageUrl} data-aos="slide-down" className="card-img-top m-auto" alt="..." style={{height: "250px"}}/>
            <div className="card-body">
                <h5 className="card-title" data-aos="slide-left">{title}</h5>
                <p className="card-text" data-aos="slide-left">{discription}</p>
                <small className="text-muted d-block mb-2">Last updated {new Date(date).toUTCString()}</small>
                <a href= {url} target = "_blank" rel='noreferrer' className="btn btn-outline-primary">Read More.</a>
            </div>
        </div> 
      </div>
    )
  }
}

export default Newsitem
