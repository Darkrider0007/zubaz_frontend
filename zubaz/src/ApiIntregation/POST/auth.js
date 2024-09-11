import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";
// const BASE_URL = "https://zubaz-frontend.onrender.com/api/v1";

export const registrationApiIntegration = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/userRouter/register`, data);

    const { accessToken } = response.data.data;
    localStorage.setItem("accessToken", accessToken);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    return error.response;
  }
};

export const loginApiIntegration = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/userRouter/login`, data);

    const { accessToken } = response.data.data;
    localStorage.setItem("accessToken", accessToken);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    return error.response;
  }
};

export const selectTemplateApiIntegration = async (data) => {
  const url = `${BASE_URL}/userRouter/selectTemplate`;
  try {
    const response = await axios.put(url, data, {
      headers: {
        token: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error during template selection:", error);
    return error.response;
  }
};
