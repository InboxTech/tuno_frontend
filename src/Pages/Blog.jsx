import { useAuth } from "../store/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Breadcumbs from "../components/Breadcumbs";
  
const Blog = () => {
  const {API} = useAuth();
  const [blogs, setBlogs] = useState([]);
  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: "The rise of AI and Robotics in retail customer experiences",
  //     img: blog_1_1,
  //     date: "24 Jan, 2025",
  //     path: "/blog-details",
  //   },
  //   {
  //     id: 2,
  //     title: "How AI is Transforming Businesses Across Industries",
  //     img: blog_1_2,
  //     date: "16 Jul, 2025",
  //     path: "/blog-details",
  //   },
  //   {
  //     id: 3,
  //     title: "Understanding Deep Learning and Neural Networks in AI",
  //     img: blog_1_3,
  //     date: "30 Jun, 2025",
  //     path: "/blog-details",
  //   },
  //   {
  //     id: 4,
  //     title: "The Role of AI in Shaping the Future of Work",
  //     img: blog_1_4,
  //     date: "16 Jul, 2025",
  //     path: "/blog-details",
  //   },
  //   {
  //     id: 5,
  //     title: "How Small Businesses Can Benefit from AI Solutions",
  //     img: blog_1_5,
  //     date: "24 Jan, 2025",
  //     path: "/blog-details",
  //   },
  //   {
  //     id: 6,
  //     title: "Top AI Tools and Platforms for Businesses in 2025",
  //     img: blog_1_6,
  //     date: "16 Jul, 2025",
  //     path: "/blog-details",
  //   },
  //   {
  //     id: 7,
  //     title: "AI and Creativity: Can Machines Be Truly Creative",
  //     img: blog_1_7,
  //     date: "30 Jun, 2025",
  //     path: "/blog-details",
  //   },
  //   {
  //     id: 8,
  //     title: "Ethical AI: Building Responsible and Fair AI Systems",
  //     img: blog_1_8,
  //     date: "16 Jul, 2025",
  //     path: "/blog-details",
  //   },
  //   {
  //     id: 9,
  //     title: "AI-Powered Innovations: What’s Next for the Future?",
  //     img: blog_1_9,
  //     date: "24 Jan, 2025",
  //     path: "/blog-details",
  //   },
  // ];

  const getBlogs = async () => {
    try {
      const response = await fetch(`${API}/api/data/blog`, {
        method: "GET",

      });
      if(response.ok){
        const data = await response.json();
        console.log(data.msg);
        setBlogs(data.msg);        
      }
    } catch (error) {
      console.log("Blogs Frontend error:", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
const BlogsPerPage = 9;


const indexOfFirstBlog = (currentPage - 1) * BlogsPerPage;
const indexOfLastBlog = indexOfFirstBlog + BlogsPerPage;
const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
const totalPages = Math.ceil(blogs.length / BlogsPerPage) ;

  return (
    <React.Fragment>
      <Breadcumbs prevLink="Home" currentLink="Blog" pageTitle="Blog" />
    <section className="space-top space-extra-bottom" id="blog-sec">
      <div className="container">
        <div className="row gy-40">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blogs) => {
              const createdAt = new Date(blogs.createdAt).toLocaleDateString( "en-CA" );
              const { _id, title, author, image } = blogs;

              return(
                <div
                  key={_id}
                  className="col-xl-4 fadeinup wow"
                  
                >
                  <div className="blog-card">
                    <div className="blog-img">
                      <Link to={`/blog/${_id}`}>
                        <img src={`${API}${image}`} alt="blog" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link to={`/blog/${_id}`}>
                          <FontAwesomeIcon icon={faCalendar} className="me-2"/>
                          {createdAt}
                        </Link>
                        <Link to={`/blog/${_id}`}>
                          <FontAwesomeIcon icon={faUser} className="me-2"/>
                          by {author}
                        </Link>
                      </div>
                      <h3 className="box-title">
                        <Link to={`/blog/${_id}`}>{title}</Link>
                      </h3>
                      <Link to={`/blog/${_id}`} className="link-btn style4">
                        Read More  <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })

          ):(
            <div>
              <h3 className="text-center py-4 text-gray-500">No blogs found.</h3>
            </div>
          )}
        </div>

        <div className="th-pagination text-center" >
          <ul>
            <li>
              <Link onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  style={{ pointerEvents: currentPage === 1 ? "none" : "auto" }}>
                  <FontAwesomeIcon icon={faArrowLeftLong} />
              </Link>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li>
                <Link key={i} className={`${
                      currentPage === i + 1
                        ? "active text-white"
                        :""
                    }`} onClick={() => setCurrentPage(i + 1)}>{i + 1}</Link>
              </li>
            ))}
            <li>
              <Link to="#" onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  style={{ pointerEvents: currentPage === totalPages ? "none" : "auto" }}>
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
