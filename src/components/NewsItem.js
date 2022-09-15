// import React, { Component } from "react";
import React from "react";
// export default class NewsItem extends Component {
  // render() {
    const NewsItem=(props)=>{
    // Approach to pass props in Class based Components.
   // let { title, description,imageUrl,newsUrl,author,date,source} = this.props;

   //props in function-based components.
let { title, description, imageUrl, newsUrl, author, date, source } =props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
            {/* Here CSS is used to ajdust the badge. */}
            {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.moneycontrol.com/static-mcnews/2022/07/389630071-652x435.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
                {/* Here we are creating a date object by passing the string in Date() function.Then using the toGMTString() function we are able to show the date in GMT format. */}
              </small>
            </p>

            <a
              href={newsUrl}
              target="_blank "
              className="btn btn-sm btn-primary btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
export default NewsItem;
