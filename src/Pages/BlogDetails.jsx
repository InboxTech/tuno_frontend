import React, { useEffect, useState } from "react";
import blog_s_1_1 from "../assets/img/blog/blog_1_1.jpg";
import blog_inner_1 from "../assets/img/blog/blog_inner_1.jpg";
import blog_inner_2 from "../assets/img/blog/blog_inner_2.jpg";
import comment_author_1 from "../assets/img/blog/comment-author-1.jpg";
import comment_author_2 from "../assets/img/blog/comment-author-2.jpg";
import comment_author_3 from "../assets/img/blog/comment-author-3.jpg";
import recent_post_1_1 from "../assets/img/blog/recent-post-1-1.jpg";
import recent_post_1_2 from "../assets/img/blog/recent-post-1-2.jpg";
import recent_post_1_3 from "../assets/img/blog/recent-post-1-3.jpg";
import { Link, useParams } from "react-router-dom";
import Breadcumbs from "../components/Breadcumbs";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const [relatedBlog ,setRelatedBlog] = useState([]);
  const {id} = useParams();
  const { API } = useAuth();

  const getSingleBlog = async () => {
    try {
      const response = await fetch(`${API}/api/data/blog/${id}`, {
        method: "GET",
      });
      if(response.ok){
        const data = await response.json();
        // console.log("Single Blog data", data);
        setBlog(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRelatedBlog = async () => {
    try {
      const response = await fetch(`${API}/api/data/getRelatedBlog/${id}`, {
        method: "GET",
      })
      const data = await response.json();
      // console.log("Related Blog data", data.relatedBlogs);        
      if(response.ok && Array.isArray(data.relatedBlogs)){
        setRelatedBlog(data.relatedBlogs);
      }
    } catch (error) {
      console.error("Error fetching related blogs:", error);
      setRelatedBlog([]); // prevent undefined errors
      toast.error("Failed to fetch related blogs");
    }
  }

  useEffect(() => {
    getSingleBlog();
    getRelatedBlog();
  }, [id]);

  return (
    <React.Fragment>
      <Breadcumbs prevLink="Home" currentLink={blog.title} pageTitle={"Blog Details"} />
    
      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-40">
            <div className="col-xl-8 col-lg-7">
              <div className="th-blog blog-single">
                <div className="blog-img">
                  <img className="blogDetailsImg" src={`${API}${blog.image}`} alt="Blog Image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="far fa-calendar" />
                      {blog.createdAt}
                    </Link>
                    <Link to="/blog">
                      <i className="far fa-user" />
                      by {blog.author}
                    </Link>
                  </div>
                  <h2 className="mb-20">
                    {blog.title}
                  </h2>

                  <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
                          {/* full description come from admin panel */}
                </div>
              </div>
              {/* <div className="th-comments-wrap">
                <h2 className="blog-inner-title h4">
                  <i className="fas fa-comments" /> Comments (3)
                </h2>
                <ul className="comment-list">
                  <li className="th-comment-item">
                    <div className="th-post-comment">
                      <div className="comment-avater">
                        <img src={comment_author_1} alt="Comment Author" />
                      </div>
                      <div className="comment-content">
                        <h3 className="name">Mariya Dsuza</h3>
                        <span className="commented-on">
                          25 Jun, 2025<span className="ms-2">06:30pm</span>
                        </span>
                        <p className="text">
                          Our AI agency is a cutting-edge technology partner
                          that specializes in delivering artificial intelligence
                          solutions to help businesses streamline operations
                        </p>
                        <div className="reply_and_edit">
                          <Link to="/blog-details" className="reply-btn">
                            <i className="fas fa-reply" />
                            Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                    <ul className="children">
                      <li className="th-comment-item">
                        <div className="th-post-comment">
                          <div className="comment-avater">
                            <img src={comment_author_2} alt="Comment Author" />
                          </div>
                          <div className="comment-content">
                            <h3 className="name">Michel Phelops</h3>
                            <span className="commented-on">
                              15 Dec, 2025<span className="ms-2">04:30pm</span>
                            </span>
                            <p className="text">
                              By leveraging the power of AI, we aim to
                              revolutionize industries and empower organizations
                              to stay competitive in a rapidly evolving digital
                              landscape.
                            </p>
                            <div className="reply_and_edit">
                              <Link to="/blog-details" className="reply-btn">
                                <i className="fas fa-reply" />
                                Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="th-comment-item">
                    <div className="th-post-comment">
                      <div className="comment-avater">
                        <img src={comment_author_3} alt="Comment Author" />
                      </div>
                      <div className="comment-content">
                        <h3 className="name">Michel Alex</h3>
                        <span className="commented-on">
                          20 Dec, 2025<span className="ms-2">02:30pm</span>
                        </span>
                        <p className="text">
                          To be a leading AI agency recognized for creating
                          intelligent solutions that drive meaningful change
                          across industries, fostering smarter decision-making,
                        </p>
                        <div className="reply_and_edit">
                          <Link to="/blog-details" className="reply-btn">
                            <i className="fas fa-reply" />
                            Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="th-comment-form">
                <div className="form-title">
                  <h3 className="blog-inner-title h4 mb-2">Leave a Reply</h3>
                  <p className="form-text">
                    Your email address will not be published. Required fields
                    are marked
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group style-border">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control"
                    />
                    <i className="fal fa-user" />
                  </div>
                  <div className="col-md-6 form-group style-border">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="form-control"
                    />
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="col-12 form-group style-border">
                    <textarea
                      placeholder="Type Your Message"
                      className="form-control"
                      defaultValue={""}
                    />
                    <i className="fal fa-pencil" />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      id="reviewcheck"
                      name="reviewcheck"
                      type="checkbox"
                    />
                    <label htmlFor="reviewcheck">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="th-btn style3 btn-md">
                      Submit Comment
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar-area sidebar-sticky">
                {/* <div className="widget widget_search">
                  <h3 className="widget_title">Search</h3>
                  <form className="search-form">
                    <input type="text" placeholder="Search Products..." />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div> */}
                {/* <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    {blogs.map((blogs) => (
                    <li>
                      <Link to={`/blog/${blogs._id}`}>
                        <i className="fas fa-circle" />
                        {blogs.category}
                      </Link>
                    </li>
                    )) }
                  </ul>
                </div> */}
                <div className="widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    {relatedBlog.slice(0, 6).map((blog) => (
                      <div className="recent-post">
                        <div className="media-img">
                          <Link to={`/blog/${blog._id}`}>
                            <img src={`${API}${blog.image}`} alt="Blog Image" />
                          </Link>
                        </div>
                        <div className="media-body">
                          <div className="recent-post-meta">
                            <Link to={`/blog/${blog._id}`}>
                              <i className="fas fa-calendar" />
                              {blog.createdAt}
                            </Link>
                          </div>
                          <h4 className="post-title">
                            <Link className="text-inherit" to={`/blog/${blog._id}`}>
                              {blog.title}
                            </Link>
                          </h4>
                        </div>
                      </div>

                    ))}
                    {/* <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img src={recent_post_1_2} alt="Blog Image" />
                        </Link>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <Link to="/blog">
                            <i className="fas fa-calendar" />
                            24 Sep, 2025
                          </Link>
                        </div>
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            Addressing issues related to AI fairness,
                            transparency
                          </Link>
                        </h4>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img src={recent_post_1_3} alt="Blog Image" />
                        </Link>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <Link to="/blog">
                            <i className="fas fa-calendar" />
                            23 Oct, 2025
                          </Link>
                        </div>
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            AI chatbot integration refers to embedding.
                          </Link>
                        </h4>
                      </div>
                    </div> */}
                  </div>
                </div>
                {/* <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Tags</h3>
                  <div className="tagcloud">
                    <Link to="/blog">Banner</Link>
                    <Link to="/blog">DIgital</Link>{" "}
                    <Link to="/blog">Logo</Link>
                    <Link to="/blog">Supply</Link>
                    <Link to="/blog">Technology</Link>
                    <Link to="/blog">Item</Link>{" "}
                    <Link to="/blog">Branding</Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BlogDetails;
