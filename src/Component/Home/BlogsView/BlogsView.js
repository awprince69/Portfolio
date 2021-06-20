import React from "react";
import "./BlogsView.css";
import BlogsCard from "./BlogsCard/BlogsCard";
import javaScript from "../../../images/1_zf-a5pFmmuTQ6afWctn2Nw.png";
import reactLogo from "../../../images/logo-og.png";
import BlogsSideCard from "./BlogsSideCard/BlogsSideCard";
import trickyQuestion from "../../../images/triky.jpeg";
const BlogsView = () => {
  const cardData = [
    {
      title: "JavaScript",
      image: javaScript,
      description:
        "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
      Link: "https://awprince.medium.com/javascript-for-beginners-e19560fae24d",
    },
    {
      title: "React Concepts",
      image: reactLogo,
      description:
        "React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook.",
      Link: "Read More",
    },
  ];
  const sideCard = [
    {
      title: "JavaScript tricky Question",
      image: trickyQuestion,
      description:
        "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
      button: "Read More",
    },
    {
      title: "Fundamental of JavaScript",
      image: javaScript,
      description:
        "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
      button: "Read More",
    },
    {
      title: "React Concept",
      image: reactLogo,
      description:
        "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
      button: "Read More",
    },
  ];
  return (
    <section className="blogViewContainer">
      <div className="p-4">
        <div className="section-title">
          <h2 className="BlogTag pt-5">Blogs</h2>
          <span className="title">Latest Blogs</span>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-8">
            <div className="row">
              {cardData.map((data) => (
                <BlogsCard data={data} key={data.title}></BlogsCard>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            {sideCard.map((cardData) => (
              <BlogsSideCard cardData={cardData} key={cardData.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsView;
