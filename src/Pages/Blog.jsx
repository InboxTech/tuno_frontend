import React from "react";
import { Link } from "react-router-dom";
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blog_1_1 from "../assets/img/blog/blog_1_1.jpg"
import blog_1_2 from "../assets/img/blog/blog_1_2.jpg"
import blog_1_3 from "../assets/img/blog/blog_1_3.jpg"
import blog_1_4 from "../assets/img/blog/blog_1_4.jpg"
import blog_1_5 from "../assets/img/blog/blog_1_5.jpg"
import blog_1_6 from "../assets/img/blog/blog_1_6.jpg"
import blog_1_7 from "../assets/img/blog/blog_1_7.jpg"
import blog_1_8 from "../assets/img/blog/blog_1_8.jpg"
import blog_1_9 from "../assets/img/blog/blog_1_9.jpg"
import Breadcumbs from "../components/Breadcumbs";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The rise of AI and Robotics in retail customer experiences",
      img: blog_1_1,
      date: "24 Jan, 2025",
      path: "/blog-details",
    },
    {
      id: 2,
      title: "How AI is Transforming Businesses Across Industries",
      img: blog_1_2,
      date: "16 Jul, 2025",
      path: "/blog-details",
    },
    {
      id: 3,
      title: "Understanding Deep Learning and Neural Networks in AI",
      img: blog_1_3,
      date: "30 Jun, 2025",
      path: "/blog-details",
    },
    {
      id: 4,
      title: "The Role of AI in Shaping the Future of Work",
      img: blog_1_4,
      date: "16 Jul, 2025",
      path: "/blog-details",
    },
    {
      id: 5,
      title: "How Small Businesses Can Benefit from AI Solutions",
      img: blog_1_5,
      date: "24 Jan, 2025",
      path: "/blog-details",
    },
    {
      id: 6,
      title: "Top AI Tools and Platforms for Businesses in 2025",
      img: blog_1_6,
      date: "16 Jul, 2025",
      path: "/blog-details",
    },
    {
      id: 7,
      title: "AI and Creativity: Can Machines Be Truly Creative",
      img: blog_1_7,
      date: "30 Jun, 2025",
      path: "/blog-details",
    },
    {
      id: 8,
      title: "Ethical AI: Building Responsible and Fair AI Systems",
      img: blog_1_8,
      date: "16 Jul, 2025",
      path: "/blog-details",
    },
    {
      id: 9,
      title: "AI-Powered Innovations: What’s Next for the Future?",
      img: blog_1_9,
      date: "24 Jan, 2025",
      path: "/blog-details",
    },
  ];

  return (
    <React.Fragment>
      <Breadcumbs prevLink="Home" currentLink="Blog" pageTitle="Blog" />
    <section className="space-top space-extra-bottom" id="blog-sec">
      <div className="container">
        <div className="row gy-40">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="col-xl-4 fadeinup wow"
              
            >
              <div className="blog-card">
                <div className="blog-img">
                  <Link to={post.path}>
                    <img src={post.img} alt="blog" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <FontAwesomeIcon icon={faCalendar} className="me-2"/>
                      {post.date}
                    </Link>
                    <Link to="/blog">
                      <FontAwesomeIcon icon={faUser} className="me-2"/>
                      by admin
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link to={post.path}>{post.title}</Link>
                  </h3>
                  <Link to={post.path} className="link-btn style4">
                    Read More  <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="th-pagination text-center" >
          <ul>
            <li>
              <Link to="#">
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </Link>
            </li>
            <li>
              <Link to="#">1</Link>
            </li>
            <li>
              <Link to="#">2</Link>
            </li>
            <li>
              <Link to="#">
                 <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </React.Fragment>
  );
};

export default Blog;
