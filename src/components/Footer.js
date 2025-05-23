import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Footer.css";

const Footer = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="copyright">
              © 2025 MOHAMED EL HADDIOUI. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Form.Select
              className="language-selector"
              onChange={handleLanguageChange}
              value={language}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
