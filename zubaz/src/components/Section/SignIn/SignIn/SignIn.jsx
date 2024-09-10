"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { loginApiIntegration } from "~/ApiIntregation/POST/auth";
import { useRouter } from "next/navigation";
import UserContext from "~/context/UserContext";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
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
      const res = await loginApiIntegration(formData);
      console.log(res.statusCode);
      if (res.statusCode === 200) {
        router.push("/");
      }
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
    // You can add form submission logic here
  };

  const { user, setUser } = React.useContext(UserContext);
  useEffect(() => {
    if (user) {
      console.log("User is already logged in");
      router.push("/");
    }
    try {
      if (!user) {
        const jwtStored = localStorage.getItem("accessToken");

        const decoded = jwtDecode(jwtStored);

        setUser(decoded);
      }
    } catch (error) {}
  }, []);

  return (
    <div className="section zubuz-extra-section">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Welcome Back</h2>
        </div>
        <div className="zubuz-account-wrap">
          <form onSubmit={handleSubmit}>
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
            <div className="zubuz-account-checkbox-wrap">
              <div className="zubuz-account-checkbox">
                <input
                  type="checkbox"
                  id="check"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="check">Remember me</label>
              </div>
              <Link className="forgot-password" href="reset-password">
                Forgot password?
              </Link>
            </div>
            <button id="zubuz-account-btn" type="submit">
              <span>{isSubmitting ? "Signing in..." : "Sign In"}</span>
            </button>
            <div className="zubuz-or">
              <p>or</p>
            </div>
            <Link href="#" className="zubuz-connect-login">
              <img src="/images/icon/google.svg" alt="" />
              Sign in with Google
            </Link>
            <Link href="#" className="zubuz-connect-login">
              <img src="/images/icon/facebook.svg" alt="" />
              Sign in with Facebook
            </Link>

            <div className="zubuz-account-bottom">
              <p>
                Not a member yet? <Link href="sign-up">Sign up here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
