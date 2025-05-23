import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Footer from "../components/Footer";
import "../styles/Auth.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = t("nameRequired");
    }
    if (!formData.email) {
      newErrors.email = t("emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("emailInvalid");
    }
    if (!formData.password) {
      newErrors.password = t("passwordRequired");
    } else if (formData.password.length < 6) {
      newErrors.password = t("passwordLength");
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t("confirmPasswordRequired");
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t("passwordsDoNotMatch");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setServerError("");

    try {
      // TODO: Implement actual registration logic here
      console.log("Sign up attempt with:", formData);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/signin");
    } catch (error) {
      setServerError(t("signUpError"));
      console.error("Sign up error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="auth-page fade-in flex-grow-1">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <div className="auth-container">
                <h2 className="auth-title">{t("createAccount")}</h2>
                <p className="auth-subtitle">{t("joinUs")}</p>

                {serverError && (
                  <Alert variant="danger" className="mt-3">
                    {serverError}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} className="auth-form">
                  <Form.Group className="mb-3">
                    <Form.Label>{t("fullName")}</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("enterFullName")}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>{t("emailAddress")}</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("enterEmail")}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>{t("password")}</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder={t("createPassword")}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>{t("confirmPassword")}</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder={t("confirmYourPassword")}
                      isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    variant="danger"
                    type="submit"
                    className="w-100 btn-modern"
                    disabled={loading}
                  >
                    {loading ? t("creatingAccount") : t("signUp")}
                  </Button>
                </Form>

                <div className="auth-footer">
                  <p className="text-center mb-0">
                    {t("haveAccount")}{" "}
                    <Link to="/signin" className="auth-link">
                      {t("signIn")}
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp; 