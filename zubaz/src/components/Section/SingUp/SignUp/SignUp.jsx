"use client";
import React, { useState } from "react";
import Link from "next/link";
import { registrationApiIntegration } from "~/ApiIntregation/POST/auth";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    acceptTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await registrationApiIntegration(formData);

      if (res.statusCode === 201) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setIsSubmitting(false);
    }
    // You can add form submission logic here
  };

  return (
    <div className="section zubuz-extra-section">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Create Account</h2>
        </div>
        <div className="zubuz-account-wrap">
          <form onSubmit={handleSubmit}>
            <div className="zubuz-account-field">
              <label>Enter your full name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Adam Smith"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="zubuz-account-field">
              <label>Enter email address</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="zubuz-account-field">
              <label>Enter Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="zubuz-account-checkbox">
              <input
                type="checkbox"
                id="check"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              <label htmlFor="check">I have read and accept the terms</label>
            </div>
            <button id="zubuz-account-btn" type="submit">
              <span>
                {isSubmitting ? "Crating your Account..." : "Create account"}
              </span>
            </button>
            <div className="zubuz-or">
              <p>or</p>
            </div>
            <Link href="#" className="zubuz-connect-login">
              <img src="/images/icon/google.svg" alt="Sign up with Google" />
              Sign up with Google
            </Link>
            <Link href="#" className="zubuz-connect-login">
              <img
                src="/images/icon/facebook.svg"
                alt="Sign up with Facebook"
              />
              Sign up with Facebook
            </Link>

            <div className="zubuz-account-bottom">
              <p>
                Already have an account? <Link href="sign-in">Log in here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
