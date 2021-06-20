import React from "react";
import "./BlogsCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const BlogsCard = ({ data }) => {
  return (
    <div className="col-md-6">
      <div>
        <div className="card" style={{ width: "20rem", height: "29rem" }}>
          <div className="blog-img">
            <img
              src={data.image}
              className="card-img-top img-fluid"
              alt="..."
              height="250px"
            />
          </div>
          <div className="card-body ">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
          </div>
          <div className="blog-button">
            <Link to={data.button}>
              Read More &nbsp; <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
