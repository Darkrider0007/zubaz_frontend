"use client";
import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";

export default function TemplateForm({ templateID }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    homePageImage: null,
    homePageHeading: "",
    homePageDescription: "",
    featurePageDescription: "",
    featureCards: [
      { icon: null, name: "", description: "" },
      { icon: null, name: "", description: "" },
      { icon: null, name: "", description: "" },
      { icon: null, name: "", description: "" },
      { icon: null, name: "", description: "" },
      { icon: null, name: "", description: "" },
    ],
    projectCards: [
      { image: null, title: "", description: "", catagory: "" },
      { image: null, title: "", description: "", catagory: "" },
      { image: null, title: "", description: "", catagory: "" },
      { image: null, title: "", description: "", catagory: "" },
      { image: null, title: "", description: "", catagory: "" },
      { image: null, title: "", description: "", catagory: "" },
    ],
    testimonialRating: "",
    testimonialText: "",
    testimonials: [{ rating: "", text: "" }],
    companies: [
      { name: "", icon: null },
      { name: "", icon: null },
      { name: "", icon: null },
      { name: "", icon: null },
      { name: "", icon: null },
      { name: "", icon: null },
    ],
    // News Section
    newsDescription: "",
    newsCards: [{ image: null, title: "", description: "" }],
    // Contact Us Section
    contactUs: {
      phoneNumber: "",
      email: "",
      location: "",
    },
  });

  const [homePageImagePreview, setHomePageImagePreview] = useState(null);
  const [featureCardsPreviews, setFeatureCardsPreviews] = useState(
    formData.featureCards.map(() => null)
  );
  const [projectCardsPreviews, setProjectCardsPreviews] = useState(
    formData.projectCards.map(() => null)
  );
  const [companyIconsPreviews, setCompanyIconsPreviews] = useState(
    formData.companies.map(() => null)
  );
  const [newsCardsPreviews, setNewsCardsPreviews] = useState(
    formData.newsCards.map(() => null)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, homePageImage: file });
      setHomePageImagePreview(URL.createObjectURL(file));
    }
  };

  const handleCardFileChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const updatedCards = formData.featureCards.map((card, i) =>
        i === index ? { ...card, icon: file } : card
      );
      setFormData({ ...formData, featureCards: updatedCards });

      const updatedPreviews = featureCardsPreviews.map((preview, i) =>
        i === index ? URL.createObjectURL(file) : preview
      );
      setFeatureCardsPreviews(updatedPreviews);
    }
  };

  const handleCompanyFileChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const updatedCompanies = formData.companies.map((company, i) =>
        i === index ? { ...company, icon: file } : company
      );
      setFormData({ ...formData, companies: updatedCompanies });

      const updatedPreviews = companyIconsPreviews.map((preview, i) =>
        i === index ? URL.createObjectURL(file) : preview
      );
      setCompanyIconsPreviews(updatedPreviews);
    }
  };

  const handleTestimonialChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTestimonials = formData.testimonials.map((testimonial, i) =>
      i === index ? { ...testimonial, [name]: value } : testimonial
    );
    setFormData({ ...formData, testimonials: updatedTestimonials });
  };

  const handleNewsCardFileChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const updatedCards = formData.newsCards.map((card, i) =>
        i === index ? { ...card, image: file } : card
      );
      setFormData({ ...formData, newsCards: updatedCards });

      const updatedPreviews = newsCardsPreviews.map((preview, i) =>
        i === index ? URL.createObjectURL(file) : preview
      );
      setNewsCardsPreviews(updatedPreviews);
    }
  };

  const handleNewsCardChange = (index, e) => {
    const { name, value } = e.target;
    const updatedNewsCards = formData.newsCards.map((card, i) =>
      i === index ? { ...card, [name]: value } : card
    );
    setFormData({ ...formData, newsCards: updatedNewsCards });
  };

  const addNewsCard = () => {
    setFormData({
      ...formData,
      newsCards: [
        ...formData.newsCards,
        { image: null, title: "", description: "" },
      ],
    });
  };

  const removeNewsCard = (index) => {
    const updatedNewsCards = formData.newsCards.filter((_, i) => i !== index);
    setFormData({ ...formData, newsCards: updatedNewsCards });
  };

  const handleContactUsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      contactUs: { ...formData.contactUs, [name]: value },
    });
  };

  const addTestimonial = () => {
    if (formData.testimonials.length < 3) {
      setFormData({
        ...formData,
        testimonials: [...formData.testimonials, { rating: "", text: "" }],
      });
    }
  };

  const handleProjectCardChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjectCards = formData.projectCards.map((card, i) =>
      i === index ? { ...card, [name]: value } : card
    );
    setFormData({ ...formData, projectCards: updatedProjectCards });
  };

  const removeTestimonial = (index) => {
    const updatedTestimonials = formData.testimonials.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, testimonials: updatedTestimonials });
  };

  const handleCardChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCards = formData.featureCards.map((card, i) =>
      i === index ? { ...card, [name]: value } : card
    );
    setFormData({ ...formData, featureCards: updatedCards });
  };

  const handleProjectCardFileChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      // Update the project card's image
      const updatedCards = formData.projectCards.map((card, i) =>
        i === index ? { ...card, image: file } : card
      );
      setFormData({ ...formData, projectCards: updatedCards });

      // Update the preview for the project card's image
      const updatedPreviews = projectCardsPreviews.map((preview, i) =>
        i === index ? URL.createObjectURL(file) : preview
      );
      setProjectCardsPreviews(updatedPreviews);
    }
  };

  const handleCompanyChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCompanies = formData.companies.map((company, i) =>
      i === index ? { ...company, [name]: value } : company
    );
    setFormData({ ...formData, companies: updatedCompanies });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);
    const formDataToSubmit = new FormData();

    // Append home page image
    formDataToSubmit.append("homePageImage", formData.homePageImage);
    formDataToSubmit.append("homePageHeading", formData.homePageHeading);
    formDataToSubmit.append(
      "homePageDescription",
      formData.homePageDescription
    );
    formDataToSubmit.append(
      "featurePageDescription",
      formData.featurePageDescription
    );

    // Append feature cards (with flattened field names)
    formData.featureCards.forEach((card, index) => {
      formDataToSubmit.append(`featureCardsIcon${index}`, card.icon); // Flattened name
      formDataToSubmit.append(`featureCardsName${index}`, card.name);
      formDataToSubmit.append(
        `featureCardsDescription${index}`,
        card.description
      );
    });

    // Append project cards (with flattened field names)
    formData.projectCards.forEach((card, index) => {
      formDataToSubmit.append(`projectCardsImage${index}`, card.image); // Flattened name
      formDataToSubmit.append(`projectCardsTitle${index}`, card.title);
      formDataToSubmit.append(
        `projectCardsDescription${index}`,
        card.description
      );
      formDataToSubmit.append(`projectCardsCategory${index}`, card.category);
    });

    // Append companies (with flattened field names)
    formData.companies.forEach((company, index) => {
      formDataToSubmit.append(`companiesIcon${index}`, company.icon); // Flattened name
      formDataToSubmit.append(`companiesName${index}`, company.name);
    });

    // Append news cards (with flattened field names)
    formData.newsCards.forEach((card, index) => {
      formDataToSubmit.append(`newsCardsImage${index}`, card.image); // Flattened name
      formDataToSubmit.append(`newsCardsTitle${index}`, card.title);
      formDataToSubmit.append(`newsCardsDescription${index}`, card.description);
    });

    formDataToSubmit.append("newsDescription", formData.newsDescription);
    formDataToSubmit.append(
      "contactUs[phoneNumber]",
      formData.contactUs.phoneNumber
    );
    formDataToSubmit.append("contactUs[email]", formData.contactUs.email);
    formDataToSubmit.append("contactUs[location]", formData.contactUs.location);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/template/addTemplate",
        formDataToSubmit,
        {
          headers: {
            token: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <Container className="my-5 p-5" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Home Page Section */}
      <h3 className="mb-4">Fill the Details for {templateID} </h3>
      <Form onSubmit={handleSubmit}>
        <h4 className="mb-4">Home Page</h4>
        <Form.Group className="mb-3">
          {homePageImagePreview && (
            <img
              src={homePageImagePreview}
              alt="Preview"
              style={{ width: "200px", marginBottom: "10px" }}
            />
          )}
          <Form.Label className="mb-2">Image</Form.Label>
          <Form.Control
            type="file"
            name="homePageImage"
            onChange={handleFileChange}
            accept="image/*"
            className="mb-2"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mb-2">Heading</Form.Label>
          <Form.Control
            type="text"
            name="homePageHeading"
            value={formData.homePageHeading}
            onChange={handleChange}
            placeholder="Enter heading"
            className="mb-2"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="mb-2">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="homePageDescription"
            value={formData.homePageDescription}
            onChange={handleChange}
            placeholder="Enter description"
            className="mb-2"
          />
        </Form.Group>

        {/* Feature Page Section */}
        <h4 className="mb-4">Feature Page</h4>
        <Form.Group className="mb-4">
          <Form.Label className="mb-2">Feature Page Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="featurePageDescription"
            value={formData.featurePageDescription}
            onChange={handleChange}
            placeholder="Enter feature page description"
            className="mb-2"
          />
        </Form.Group>

        {/* Feature Cards */}
        <h5 className="mb-4">Feature Cards</h5>
        <Row>
          {formData.featureCards.map((card, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4 p-3" style={{ backgroundColor: "#ffffff" }}>
                <Card.Body>
                  {featureCardsPreviews[index] && (
                    <img
                      src={featureCardsPreviews[index]}
                      alt="Card Icon Preview"
                      style={{ width: "50px", marginBottom: "10px" }}
                    />
                  )}
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-2">Icon</Form.Label>
                    <Form.Control
                      type="file"
                      name="icon"
                      onChange={(e) => handleCardFileChange(index, e)}
                      accept="image/*"
                      className="mb-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-2">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={card.name}
                      onChange={(e) => handleCardChange(index, e)}
                      placeholder="Enter card name"
                      className="mb-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-2">Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="description"
                      value={card.description}
                      onChange={(e) => handleCardChange(index, e)}
                      placeholder="Enter card description"
                      className="mb-2"
                    />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Project Cards Section */}
        <h4 className="mb-4">Project Cards</h4>
        <Row>
          {formData.projectCards.map((card, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4 p-3" style={{ backgroundColor: "#ffffff" }}>
                <Card.Body>
                  {projectCardsPreviews[index] && (
                    <img
                      src={projectCardsPreviews[index]}
                      alt="Project Image Preview"
                      style={{ width: "100px", marginBottom: "10px" }}
                    />
                  )}
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-2">Image</Form.Label>
                    <Form.Control
                      type="file"
                      name="image"
                      onChange={(e) => handleProjectCardFileChange(index, e)}
                      accept="image/*"
                      className="mb-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-2">Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={card.title}
                      onChange={(e) => handleProjectCardChange(index, e)}
                      placeholder="Enter project title"
                      className="mb-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-2">Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="description"
                      value={card.description}
                      onChange={(e) => handleProjectCardChange(index, e)}
                      placeholder="Enter project description"
                      className="mb-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-2">Category</Form.Label>
                    <Form.Select
                      name="category"
                      value={card.category}
                      onChange={(e) => handleProjectCardChange(index, e)}
                      className="mb-2"
                    >
                      <option value="">Select a category</option>
                      <option value="Branding">Branding</option>
                      <option value="Designing">Designing</option>
                      <option value="Photography">Photography</option>
                      <option value="Development">Development</option>
                    </Form.Select>
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Testimonials Section */}
        <h4 className="mb-4">Testimonials</h4>
        {formData.testimonials.map((testimonial, index) => (
          <div key={index} className="mb-4">
            <Form.Group className="mb-3">
              <Form.Label className="mb-2">
                Testimonial Rating {index + 1}
              </Form.Label>
              <Form.Select
                name="rating"
                value={testimonial.rating}
                onChange={(e) => handleTestimonialChange(index, e)}
                className="mb-2"
              >
                <option value="">Select a rating</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="mb-2">
                Testimonial Text {index + 1}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="text"
                value={testimonial.text}
                onChange={(e) => handleTestimonialChange(index, e)}
                placeholder="Enter testimonial text"
                className="mb-2"
              />
            </Form.Group>
            {formData.testimonials.length > 1 && (
              <Button
                variant="danger"
                onClick={() => removeTestimonial(index)}
                className="mb-3"
              >
                Remove Testimonial {index + 1}
              </Button>
            )}
          </div>
        ))}
        {formData.testimonials.length < 3 && (
          <Button onClick={addTestimonial} variant="primary">
            Add Testimonial
          </Button>
        )}

        {/* Companies Section */}
        <h4 className="mt-4 mb-4">Companies</h4>
        <Row>
          {formData.companies.map((company, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4 p-3" style={{ backgroundColor: "#ffffff" }}>
                <Card.Body>
                  {companyIconsPreviews[index] && (
                    <img
                      src={companyIconsPreviews[index]}
                      alt="Company Icon Preview"
                      style={{ width: "50px", marginBottom: "10px" }}
                    />
                  )}
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-2">
                      Company {index + 1} Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={company.name}
                      onChange={(e) => handleCompanyChange(index, e)}
                      placeholder="Enter company name"
                      className="mb-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-2">
                      Company {index + 1} Icon
                    </Form.Label>
                    <Form.Control
                      type="file"
                      name="icon"
                      onChange={(e) => handleCompanyFileChange(index, e)}
                      accept="image/*"
                      className="mb-2"
                    />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* News Section */}
        <h4 className="mb-4">News</h4>
        <Form.Group className="mb-4">
          <Form.Label className="mb-2">News Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="newsDescription"
            value={formData.newsDescription}
            onChange={handleChange}
            placeholder="Enter news description"
            className="mb-2"
          />
        </Form.Group>
        <h5 className="mb-4">News Cards</h5>
        <Row>
          {formData.newsCards.map((card, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4 p-3" style={{ backgroundColor: "#ffffff" }}>
                <Card.Body>
                  {newsCardsPreviews[index] && (
                    <img
                      src={newsCardsPreviews[index]}
                      alt="News Image Preview"
                      style={{ width: "100px", marginBottom: "10px" }}
                    />
                  )}
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-2">Image</Form.Label>
                    <Form.Control
                      type="file"
                      name="image"
                      onChange={(e) => handleNewsCardFileChange(index, e)}
                      accept="image/*"
                      className="mb-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-2">Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={card.title}
                      onChange={(e) => handleNewsCardChange(index, e)}
                      placeholder="Enter news title"
                      className="mb-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-2">Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="description"
                      value={card.description}
                      onChange={(e) => handleNewsCardChange(index, e)}
                      placeholder="Enter news description"
                      className="mb-2"
                    />
                  </Form.Group>
                  {formData.newsCards.length > 1 && (
                    <Button
                      variant="danger"
                      onClick={() => removeNewsCard(index)}
                      className="mb-3"
                    >
                      Remove News Card
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {formData.newsCards.length < 6 && (
          <Button onClick={addNewsCard} variant="primary" className="mb-4">
            Add News Card
          </Button>
        )}

        {/* Contact Us Section */}
        <h4 className="mb-4">Contact Us</h4>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={formData.contactUs.phoneNumber}
            onChange={handleContactUsChange}
            placeholder="Enter phone number"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.contactUs.email}
            onChange={handleContactUsChange}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.contactUs.location}
            onChange={handleContactUsChange}
            placeholder="Enter location"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {submitted ? "Submitting..." : "Submit"}
        </Button>
      </Form>
    </Container>
  );
}
