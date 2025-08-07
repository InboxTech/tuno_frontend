import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { X, Mail, ArrowRight, Lock } from "lucide-react";
import "../../assets/css/ForgotPasswordModal.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../store/auth";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPasswordModal = ({ onClose }) => {
  const { API } = useAuth();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log("Submitting forgot password request to:", API);
        const response = await axios.post(
        `${API || "http://localhost:5000"}/api/auth/forgot-password`,
        values
      );
      toast.success(response.data.message || "Reset link sent to your email");
      resetForm();
      onClose(); // close modal after successful submission
    } catch (error) {
      console.error("Forgot password error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "Failed to send reset link");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-gradient"></div>

        <button onClick={onClose} className="close-button">
          <X size={20} />
        </button>

        <div className="modal-content">
          <div className="modal-icon-section">
            <div className="icon-container">
              <Lock size={24} />
            </div>
            <h2 className="modal-title">Forgot Password?</h2>
            <p className="modal-description">
              No worries! Enter your email address and we'll send you a reset
              link.
            </p>
          </div>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="form-container">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <div className="input-container">
                    <div className="input-icon">
                      <Mail size={20} />
                    </div>
                    <Field
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="button-group">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-button"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Sending Reset Link...
                      </>
                    ) : (
                      <>
                        Send Reset Link
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="cancel-button"
                  >
                    Back to Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="modal-footer">
            <p className="footer-text">
              Remember your password?{" "}
              <button onClick={onClose} className="footer-link">
                Sign in instead
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
