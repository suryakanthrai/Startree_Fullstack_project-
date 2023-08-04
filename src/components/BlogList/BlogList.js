import "./BlogList.css";

import BlogCards from "../BlogCards/BlogCards";

const BlogList = (props) => {
  const { blogsData } = props;

  return (
    <div className="list-style">
      {blogsData.map((item) => (
        <BlogCards key={item.id} blog={item} />
      ))}
    </div>
  );
};

export default BlogList;
