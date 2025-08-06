import { useAuth } from "../store/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcumbs from "../components/Breadcumbs";

const Blog = () => {
  const { API, blogs } = useAuth();

  const [currentPage, setCurrentPage] = useState(1);
  const BlogsPerPage = 9;

  const indexOfFirstBlog = (currentPage - 1) * BlogsPerPage;
  const indexOfLastBlog = indexOfFirstBlog + BlogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / BlogsPerPage);

  return (
    <React.Fragment>
      <Breadcumbs prevLink="Home" currentLink="Blog" pageTitle="Blog" />
      <section className="space-top space-extra-bottom" id="blog-sec">
        <div className="container">
          <div className="row gy-40">
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blogs) => {
                const createdAt = new Date(blogs.createdAt).toLocaleDateString(
                  "en-CA"
                );
                const { _id, title, author, image } = blogs;

                return (
                  <div key={_id} className="col-xl-4 fadeinup wow">
                    <div className="blog-card">
                      <div className="blog-img">
                        <Link to={`/blog/${_id}`}>
                          <img src={`${API}${image}`} alt="blog" />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <Link to={`/blog/${_id}`}>
                            <FontAwesomeIcon icon={faCalendar} className="me-2" />
                            {createdAt}
                          </Link>
                          <Link to={`/blog/${_id}`}>
                            <FontAwesomeIcon icon={faUser} className="me-2" />
                            by {author}
                          </Link>
                        </div>
                        <h3 className="box-title">
                          <Link to={`/blog/${_id}`}>{title}</Link>
                        </h3>
                        <Link to={`/blog/${_id}`} className="link-btn style4">
                          Read More{" "}
                          <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <h3 className="text-center py-4 text-gray-500">
                  No blogs found.
                </h3>
              </div>
            )}
          </div>

          <div className="th-pagination text-center">
            <ul>
              <li>
                <Link
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  style={{ pointerEvents: currentPage === 1 ? "none" : "auto" }}
                >
                  <FontAwesomeIcon icon={faArrowLeftLong} />
                </Link>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li>
                  <Link
                    key={i}
                    className={`${
                      currentPage === i + 1 ? "active text-white" : ""
                    }`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="#"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  style={{
                    pointerEvents: currentPage === totalPages ? "none" : "auto",
                  }}
                >
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
