"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Page() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log(inputValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/testin");
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="d-flex min-vh-100 justify-content-center align-items-center">
      <Form onSubmit={handleSubmit} className="w-50">
        <Form.Group controlId="formBasicInput">
          <Form.Label>Enter Something</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Page;
