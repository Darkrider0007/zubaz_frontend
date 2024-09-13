import axios from "axios";

// const BASE_URL = "http://localhost:8000/api/v1";
const BASE_URL = "https://zubaz-frontend.onrender.com/api/v1";

export const getTemplateData = async ({ subDomain }) => {
  try {
    const response = await axios.get(`${BASE_URL}/template/${subDomain}`);
    return response.data;
  } catch (error) {
    console.error("Error during template selection:", error);
    return error.response;
  }
};
