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


const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const params = useParams();
  const { API } = useAuth();

  const getSingleBlog = async () => {
    try {
      const response = await fetch(`${API}/api/data/blog/${params.id}`, {
        method: "GET",
      });
      if(response.ok){
        const data = await response.json();
        console.log("Single Blog data", data);
        setBlog(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBlog();
  }, []);

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

                  {/* <div>
                   <h4> How Voice Cloning Works</h4>
                   <p> Your voice is a blend of tone, rhythm, and inflection, shaped over years of speaking. Voice cloning captures these patterns to recreate your voice digitally. Here’s the process in a nutshell:</p>
                   <ol>
                    <li> 
                      <strong> Collect Voice Samples: </strong>Upload clear, expressive recordings of your voice. The more variety—different emotions, pacing, and sentence types—the better the result. Monotone samples create robotic outputs; natural ones bring your voice to life.
                    </li>
                    <li>
                      <strong> Train the Model: </strong>AI, often using neural networks like transformers, analyzes your recordings to map out features like pitch and cadence. This creates a digital blueprint of your voice.
                    </li>
                    <li>
                    <strong> Generate Speech:</strong>Type any text, and the system produces audio in your voice. Modern tools use advanced techniques to ensure the speech sounds natural, not mechanical.
                    </li>
                    <li>
                      <strong> Fine-Tune: </strong>Adjust tone, speed, or emotion to fit your needs, whether you want a warm, friendly vibe or a sharp, professional edge.
                    </li>
                   </ol>
                  </div>

                  <div>
                    <h4> Why Voice Cloning Matters</h4>
                  <p className="mb-30">
                   Voice cloning isn’t just a cool trick—it’s changing lives. For those with conditions like ALS, it’s a way to preserve their voice and identity. Take Ed Riefenstahl, a former teacher who lost his ability to speak after an injury. Using Tuno, he now teaches with a synthetic version of his voice. Similarly, Orlando Ruiz of the ALS MND Association of Colombia uses this tech to stay connected.
                  </p>
                  <p className="mb-0">
                    Creators benefit, too. Voice actors can license their voices for audiobooks, podcasts, or videos, saving time and scaling their reach. It’s a game-changer for accessibility and creativity.
                  </p>
                  </div>

                  <div>
                    <h4>Risks to Consider</h4>
                     <p>
                   With great power comes responsibility. Cloned voices can be misused, so platforms likeTuno include safeguards to ensure ethical use. Always use this tech thoughtfully to respect privacy and trust.
                  </p>
                  </div>

                  <div>
                    <h4> How to Clone Your Voice with Tuno</h4>
                    <p>Ready to try it? Here’s how to create your own synthetic voice with Tuno: </p>
                    <ol>
                      <li>
                        <strong>Sign Up:</strong> Create an Tuno account with a paid plan for access to professional voice cloning.
                      </li>
                      <li>
                       <strong>Access Voice Cloning:</strong> Go to Settings &gt; Voice Design &gt; Professional Voice Cloning.
                       </li>
                      <li>
                         <strong>Upload Samples:</strong> Submit 1-3 hours of high-quality, noise-free recordings in your natural voice. Variety in tone and expression is key.
                      </li>
                      <li>
                         <strong>Clean Audio:</strong> Use ElevenLabs’ audio settings to remove background noise or separate speakers for better results
                      </li>
                      <li>
                         <strong>Verify:</strong> Record a short verification sample using the same setup. If it fails, retry after 24 hours or contact support.
                      </li>
                      <li>
                         <strong>Fine-Tune:</strong> Track the fine-tuning process in My Voices. You’ll be notified when your voice is ready.
                      </li>
                      <li>
                         <strong>Generate Speech:</strong> Once approved, enter text, tweak settings like tone, and create audio in your voice.
                      </li>
                    </ol>
                  </div>
                 
                 <div>
                  <h4> Final Thoughts</h4>
                  <p>Voice cloning is more than tech—it’s a tool for connection, creativity, and empowerment. Whether you’re preserving your voice, streamlining content creation, or exploring new possibilities, it’s a powerful way to share your unique sound with the world.</p>
                  <p> Ready to get started? Sign up for Tuno and bring your voice to life.</p>
                 </div>
                  <blockquote className="bg-white">
                    <p>
                      AI solutions require ongoing monitoring to maintain
                      accuracy and efficiency. We provide continuous support,
                      updates, and performance enhancements to ensure your AI
                      system remains effective as your business evolves.
                    </p>
                    <cite>Michel Clarck</cite>
                  </blockquote>
                  <p className="mb-30">
                    Our team designs a tailor-made AI solution based on your
                    specific requirements. We develop machine learning models,
                    build algorithms, and create prototypes to ensure the
                    solution aligns with your business objectives. We begin by
                    understanding your business goals, challenges, and
                    opportunities for AI integration. Our experts assess your
                    current systems and identify areas where AI can bring the
                    most impact.
                  </p>
                  <div className="row gx-30 mt-30">
                    <div className="col-md-6 mb-30">
                      <div className="blog-radius-img">
                        <img
                          className="w-100"
                          src={blog_inner_1}
                          alt="Blog Image"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="blog-radius-img">
                        <img
                          className="w-100"
                          src={blog_inner_2}
                          alt="Blog Image"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mb-0">
                    Our AI agency is a cutting-edge technology partner that
                    specializes in delivering artificial intelligence solutions
                    to help businesses streamline operations, improve
                    decision-making, and enhance customer experiences. By
                    leveraging the power of AI, we aim to revolutionize
                    industries and empower organizations to stay competitive in
                    a rapidly evolving digital landscape. Our team of AI
                    experts, data scientists, and software engineers work
                    collaboratively with clients to design, develop, and
                    implement AI solutions tailored to their unique needs.
                  </p> */}
              
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
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li>
                      <Link to="/blog">
                        <i className="fas fa-circle" />
                        AI and Privacyness
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <i className="fas fa-circle" />
                        AI Applications
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <i className="fas fa-circle" />
                        AI Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <i className="fas fa-circle" />
                        AI Ethics
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <i className="fas fa-circle" />
                        Deep Learning
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <i className="fas fa-circle" />
                        Explainable AI
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <i className="fas fa-circle" />
                        Introduction to AI
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <i className="fas fa-circle" />
                        Machine Learning
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img src={recent_post_1_1} alt="Blog Image" />
                        </Link>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <Link to="/blog">
                            <i className="fas fa-calendar" />
                            22 Sep, 2025
                          </Link>
                        </div>
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            Developing AI systems that scale efficiently as
                            data.
                          </Link>
                        </h4>
                      </div>
                    </div>
                    <div className="recent-post">
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
                    </div>
                  </div>
                </div>
                <div className="widget widget_tag_cloud">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BlogDetails;
