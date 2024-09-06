"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { selectTemplateApiIntegration } from "~/ApiIntregation/POST/auth";

function Template() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [domainName, setDomainName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const templates = [
    { id: 1, title: "Template 1", imgSrc: "/images/template/template1.png" },
    { id: 2, title: "Template 2", imgSrc: "/images/template/template2.png" },
    { id: 3, title: "Template 3", imgSrc: "/images/template/template3.png" },
  ];

  const handleTemplateClick = (templateId) => {
    setSelectedTemplate(templateId);
    setIsModalVisible(true);
  };

  const handleSubmit = async () => {
    const formData = {
      template: selectedTemplate,
      subDomain: domainName,
    };

    let Id;

    if (selectedTemplate === 1) {
      Id = 1;
    } else if (selectedTemplate === 2) {
      Id = 2;
    } else if (selectedTemplate === 3) {
      Id = 3;
    }

    setIsSubmitting(true);
    try {
      const res = await selectTemplateApiIntegration(formData);
      if (res.statusCode === 200) {
        router.push(`/add-template/template${Id}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setIsModalVisible(false);
      setDomainName("");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Container className="py-5">
        <div className="text-center mb-4">
          <h2>Templates</h2>
        </div>
        <Row>
          {templates.map((template) => (
            <Col key={template.id} lg={4} md={6} className="mb-4">
              <Card
                className="text-center p-3"
                onClick={() => handleTemplateClick(template.id)}
                style={{ cursor: "pointer" }}>
                <Card.Img
                  variant="top"
                  src={template.imgSrc}
                  alt={template.title}
                  className="img-fluid card-img-grow"
                />
                <Card.Body>
                  <Card.Title>{template.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={isModalVisible} onHide={() => setIsModalVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Domain Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="domainName">
              <Form.Label>Domain Name</Form.Label>
              <Form.Control
                type="text"
                value={domainName}
                onChange={(e) => setDomainName(e.target.value)}
                placeholder="Enter domain name"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Template;
