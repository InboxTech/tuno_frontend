import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
=======
import Breadcumbs from "../components/Breadcumbs";
>>>>>>> 48560776100c18dadbacd156c8bc8b461b187b76
import { useAuth } from "../store/auth";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState("");
  const [loading, setLoading] = useState(true);
  const {API} = useAuth()

<<<<<<< HEAD
  const initialValues = { newPassword: "", confirmPassword: "" };
  const validationSchema = Yup.object({
    newPassword: Yup.string()git 
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm password is required"),
  });
=======
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`${API}/api/projectData/project/${id}`);
        setProject(res.data.project);
      } catch (err) {
        console.error("Failed to fetch project:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);
>>>>>>> 48560776100c18dadbacd156c8bc8b461b187b76

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!project) return <div className="text-center py-5">Project not found.</div>;

  return (
    <>
      <Breadcumbs prevLink="Home" currentLink="Project Details" pageTitle={project.title} />

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-40">
            <div className="col-xxl-9 col-xl-8 col-lg-7">
              <div className="page-single mb-0">
                <div className="page-img overflow-hidden">
                  <img src={`${API}${project.projectImage}`} alt="Main Project" />
                </div>
                <div>
                  {/* <p className="project-meta">Category: {project.status}</p>
                  <h2 className="page-title mt-n2 mb-20">{project.title}</h2>
                  <p className="mb-30">{project.shortDescription}</p> */}
                  <div
                    className="mb-50"
                    dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                  />

                  {/* <div className="row">
                    {project.projectImages.map((img, idx) => (
                      <div className="col-md-4 mb-3" key={idx}>
                        <div className="page-img overflow-hidden">
                          <img src={`/${img}`} alt={`Project ${idx + 1}`} />
                        </div>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-4 col-lg-5">
              <aside className="sidebar-area sidebar-sticky rounded-0 p-0 bg-transparent">
                <div className="widget widget_info">
                  <h3 className="widget_title">Project Info</h3>
                  <div className="info-list">
                    <ul>
                      <li>
                        <div className="box-icon"><i className="fas fa-user" /></div>
                        <div><div className="box-title">Company:</div><div className="box-text">Digital Tech</div></div>
                      </li>
                      <li>
                        <div className="box-icon"><i className="fas fa-file" /></div>
                        <div><div className="box-title">Category:</div><div className="box-text">{project.status}</div></div>
                      </li>
                      <li>
                        <div className="box-icon"><i className="fas fa-calendar-days" /></div>
                        <div><div className="box-title">Start Date:</div><div className="box-text">14/01/2025</div></div>
                      </li>
                      <li>
                        <div className="box-icon"><i className="fas fa-calendar-days" /></div>
                        <div><div className="box-title">End Date:</div><div className="box-text">26/04/2025</div></div>
                      </li>
                      <li>
                        <div className="box-icon"><i className="fas fa-comments" /></div>
                        <div><div className="box-title">Feedback:</div><div className="box-text">Happy Client</div></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
