import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, Lock, CheckCircle, ArrowRight } from "lucide-react";
import "../assets/css/ResetPasswordPage.css";
import axios from "axios";
import { useAuth } from "../store/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

const ResetPasswordPage = ({ onSuccess }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { API } = useAuth();
  const { token } = useParams();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        `${API}/api/auth/reset-password/${token}`,
        {
          newPassword: values.password,
          confirmPassword: values.confirmPassword,
        }
      );
      toast.success("Password reset successful! Please log in.");
      navigate("/login");

      console.log(" Reset Success:", response.data);
      if (onSuccess) onSuccess();
      resetForm();
    } catch (error) {
      console.error(
        " Reset Error:",
        error.response?.data?.message || error.message
      );
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    return strength;
  };

  const getStrengthLabel = (strength) => {
    switch (strength) {
      case 0:
      case 1:
        return "Very Weak";
      case 2:
        return "Weak";
      case 3:
        return "Fair";
      case 4:
        return "Good";
      case 5:
        return "Strong";
      default:
        return "";
    }
  };

  const getStrengthColor = (strength) => {
    switch (strength) {
      case 0:
      case 1:
        return "#ef4444";
      case 2:
        return "#f97316";
      case 3:
        return "#eab308";
      case 4:
        return "#22c55e";
      case 5:
        return "#16a34a";
      default:
        return "#e5e7eb";
    }
  };

  return (
    <div className="reset-page-container">
      <div className="reset-page-content">
        <div className="reset-card">
          <div className="reset-header-gradient"></div>

          <div className="reset-content">
            <div className="reset-icon-section">
              <div className="reset-icon-container">
                <Lock size={28} />
              </div>
              <h1 className="reset-title">Reset Your Password</h1>
              <p className="reset-description">
                Create a new secure password for your account. Make sure it's
                strong and unique.
              </p>
            </div>

            <Formik
              initialValues={{ password: "", confirmPassword: "" }}
              validationSchema={ResetPasswordSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched, values }) => {
                const passwordStrength = getPasswordStrength(values.password);

                return (
                  <Form className="reset-form-container">
                    <div className="form-group">
                      <label htmlFor="password" className="form-label">
                        New Password
                      </label>
                      <div className="input-container">
                        <div className="input-icon">
                          <Lock size={20} />
                        </div>
                        <Field
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className={`form-input ${
                            errors.password && touched.password ? "error" : ""
                          }`}
                          placeholder="Enter your new password"
                        />
                        <button
                          type="button"
                          className="password-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>
                      </div>

                      {values.password && (
                        <div className="password-strength">
                          <div className="strength-bar">
                            <div
                              className="strength-fill"
                              style={{
                                width: `${(passwordStrength / 5) * 100}%`,
                                backgroundColor:
                                  getStrengthColor(passwordStrength),
                              }}
                            ></div>
                          </div>
                          <span
                            className="strength-label"
                            style={{
                              color: getStrengthColor(passwordStrength),
                            }}
                          >
                            {getStrengthLabel(passwordStrength)}
                          </span>
                        </div>
                      )}

                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error-message"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <div className="input-container">
                        <div className="input-icon">
                          <Lock size={20} />
                        </div>
                        <Field
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          className={`form-input ${
                            errors.confirmPassword && touched.confirmPassword
                              ? "error"
                              : ""
                          }`}
                          placeholder="Confirm your new password"
                        />
                        <button
                          type="button"
                          className="password-toggle"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>
                      </div>
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="error-message"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="reset-submit-button"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="loading-spinner"></div>
                          Updating Password...
                        </>
                      ) : (
                        <>
                          Reset Password
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </Form>
                );
              }}
            </Formik>

            <div className="reset-footer">
              <p className="footer-text">
                Remember your password?{" "}
                <a href="/login" className="footer-link">
                  Back to Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
