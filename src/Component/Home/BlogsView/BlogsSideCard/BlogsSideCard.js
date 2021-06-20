import React from "react";
import "./BlogsSideCard.css";

const BlogsSideCard = ({ cardData }) => {
  return (
    <div className="blog-lists-wrapper">
      <div className="blog-item-small d-flex">
        <div className="blog-small-img" style={{ width: "10rem" }}>
          <img
            className="img-fluid"
            src={cardData.image}
            alt={cardData.title}
          />
        </div>
        <div className=" text-white text-center">
          <h2 className="blog-small-description">{cardData.title}</h2>
        </div>
      </div>
      <span className="horiontal-border">
        <hr />
      </span>
    </div>
  );
};

export default BlogsSideCard;
