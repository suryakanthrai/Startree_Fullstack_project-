import "./BlogCards.css";
import * as React from "react";

const BlogCards = (props) => {
  const { blog } = props;
  const { title, avatar, description, blogUrl } = blog;
  return (
    <div class="card-deck d-flex flex-row justify-content-center flex-wrap col-3 p-3">
      <div class="card">
        <img src={avatar} class="card-img-top" alt="attr" />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
        </div>
        <div class="p-2 text-center">
          <a href={blogUrl} class="btn btn-primary">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
