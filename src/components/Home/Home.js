import "./Home.css";

import React from "react";
import BlogList from "../BlogList/BlogList";

const blogsData = [
  {
    id: 1,
    title: "JAVA",
    avatar:
      "https://res.cloudinary.com/dypoalsjj/image/upload/c_scale,h_880,w_1500/v1691032277/java.png",
    description:
      "Java is a widely-used, object-oriented programming language known for its platform independence and extensive library support for developers.",
    blogUrl: "https://medium.com/edureka/java-tutorial-bbdd28a2acd7",
    publishedDate: "Aug 2nd",
  },
  {
    id: 2,
    title: "JAVASCRIPT",
    avatar:
      "https://res.cloudinary.com/dypoalsjj/image/upload/v1691033971/javascript_image.png",
    blogUrl:
      "https://medium.com/@zeolearn/javascript-tutorial-for-beginners-fa8dda46be1a",
    description:
      "JavaScript is a powerful, versatile, and widely-used programming language that has become the backbone of modern web development",
    publishedDate: "Mar 1st",
  },
  {
    id: 3,
    title: "REACT",
    avatar:
      "https://res.cloudinary.com/dypoalsjj/image/upload/c_scale,h_880,w_1500/v1691034265/react.jpg",
    blogUrl:
      "https://medium.com/nerd-for-tech/your-first-react-project-basic-step-by-step-guide-with-examples-and-explinations-d2ed69e6b3c8",
    description:
      "ReactJS is a popular JavaScript library used for building user interfaces with a component-based approach and virtual DOM rendering.",
    publishedDate: "Jan 2nd",
  },
  {
    id: 4,
    title: "SPRING BOOT",
    avatar:
      "https://res.cloudinary.com/dypoalsjj/image/upload/c_scale,h_880,w_1500/v1691034634/springboot_fyzacx.png",
    blogUrl:
      "https://medium.com/adessoturkey/introduction-to-spring-boot-458cb814ec14",
    description:
      "Spring Boot is a Java-based framework that simplifies the development of production-ready, standalone Spring applications with minimal configuration.",
    publishedDate: "Dec 24th",
  },
  {
    id: 5,
    title: "AI",
    avatar:
      "https://res.cloudinary.com/dypoalsjj/image/upload/c_scale,h_880,w_1500/v1691034784/AI_td8ybm.jpg",
    blogUrl:
      "https://medium.com/@BangBitTech/introduction-to-artificial-intelligence-ai-a-deep-dive-into-machine-learning-deep-learning-4763e6985344",
    description:
      "AI, or Artificial Intelligence, is the simulation of human intelligence in machines, enabling them to learn, reason, and solve problems autonomously.",
    publishedDate: "Nov 10th",
  },
  {
    id: 6,
    title: "HTML",
    avatar:
      "https://res.cloudinary.com/dypoalsjj/image/upload/c_scale,h_880,w_1500/v1691147019/html_zx0wtq.jpg",
    blogUrl: "https://medium.com/yavar/introduction-to-html-936fcf889a56",
    description:
      "HTML, Hypertext Markup Language, is the standard markup language used for creating web pages and structuring their content.",
    publishedDate: "Nov 10th",
  },
  {
    id: 7,
    title: "DEVELOPEMENT",
    avatar:
      "https://res.cloudinary.com/dypoalsjj/image/upload/c_scale,h_880,w_1500/v1691147353/developement_d9ie1w.jpg",
    blogUrl:
      "https://medium.com/@johndanielraines/be-an-engineer-not-a-frameworker-c58fe28d0c88",
    description:
      "Development is a dynamic process of creating, improving, and refining products, systems, or skills to meet specific goals or needs.",
    publishedDate: "Nov 10th",
  },
  {
    id: 8,
    title: "DEVOPS",
    avatar:
      "https://res.cloudinary.com/dypoalsjj/image/upload/c_scale,h_880,w_1500/v1691147814/devops_ivkh64.jpg",
    blogUrl: "https://medium.com/edureka/devops-tutorial-89363dac9d3f",
    description:
      "DevOps is a collaborative approach that integrates software development and IT operations to streamline processes and enhance software delivery.",
    publishedDate: "Nov 10th",
  },
];
const Home = () => (
  <div>
    <BlogList blogsData={blogsData} />
  </div>
);

export default Home;
