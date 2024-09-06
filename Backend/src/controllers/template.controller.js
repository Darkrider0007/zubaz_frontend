import Template from "../models/template.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the directory
const directory = path.join(__dirname, "public/test");

// Function to delete all files in the directory
const deleteFilesInDirectory = () => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err.message}`);
      return;
    }

    // Loop through each file and delete it
    files.forEach((file) => {
      const filePath = path.join(directory, file);

      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file: ${filePath}, ${err.message}`);
        } else {
          console.log(`Deleted file: ${filePath}`);
        }
      });
    });
  });
};

const addTemplate = asyncHandler(async (req, res) => {
  try {
    const {
      homePageHeading,
      homePageDescription,
      featurePageDescription,
      newsDescription,
      contactUs,
    } = req.body;

    const { _id, template, subDomain } = req.user;

    const userID = _id;
    const templateId = template;
    const subdomain = subDomain;

    // Check if required fields are provided
    if (!homePageHeading || !homePageDescription || !contactUs) {
      throw new ApiError(400, "Please provide all the required fields");
    }

    // Upload images to Cloudinary one by one
    const homePageImageURL = req.files.homePageImage[0].path
      ? (await uploadOnCloudinary(req.files.homePageImage[0].path)).secure_url
      : null;

    console.log(homePageImageURL);

    const featureCards = [];
    for (let i = 0; i < 6; i++) {
      if (
        req.body[`featureCardsName${i}`] &&
        req.body[`featureCardsDescription${i}`] &&
        req.files[`featureCardsIcon${i}`][0].path
      ) {
        const icon = req.files[`featureCardsIcon${i}`]
          ? (
              await uploadOnCloudinary(
                req.files[`featureCardsIcon${i}`][0].path
              )
            ).secure_url
          : null;

        if (icon) {
          //   throw new ApiError(400, "Please provide all the required fields");
          featureCards.push({
            name: req.body[`featureCardsName${i}`],
            description: req.body[`featureCardsDescription${i}`],
            icon,
          });
        }
      }
    }

    const projectCards = [];
    for (let i = 0; i < 6; i++) {
      if (
        req.body[`projectCardsTitle${i}`] &&
        req.body[`projectCardsDescription${i}`] &&
        req.body[`projectCardsCategory${i}`][0].path
      ) {
        const image = req.files[`projectCardsImage${i}`]
          ? (
              await uploadOnCloudinary(
                req.files[`projectCardsImage${i}`][0].path
              )
            ).secure_url
          : null;

        if (image) {
          projectCards.push({
            title: req.body[`projectCardsTitle${i}`],
            description: req.body[`projectCardsDescription${i}`],
            category: req.body[`projectCardsCategory${i}`],
            image,
          });
        }
      }
    }

    const companies = [];
    for (let i = 0; i < 6; i++) {
      if (
        req.body[`companiesName${i}`] &&
        req.files[`companiesIcon${i}`][0].path
      ) {
        const icon = req.files[`companiesIcon${i}`]
          ? (await uploadOnCloudinary(req.files[`companiesIcon${i}`][0].path))
              .secure_url
          : null;

        if (icon) {
          companies.push({
            name: req.body[`companiesName${i}`],
            icon,
          });
        }
      }
    }

    const newsCards = [];
    for (let i = 0; i < 6; i++) {
      if (
        req.files[`newsCardsImage${i}`] &&
        req.body[`newsCardsTitle${i}`] &&
        req.body[`newsCardsDescription${i}`][0].path
      ) {
        const image = req.files[`newsCardsImage${i}`]
          ? (await uploadOnCloudinary(req.files[`newsCardsImage${i}`][0].path))
              .secure_url
          : null;
        if (image) {
          newsCards.push({
            title: req.body[`newsCardsTitle${i}`],
            description: req.body[`newsCardsDescription${i}`],
            image,
          });
        }
      }
    }

    // Create the template
    const newTemplate = await Template.create({
      userID,
      templateId,
      subdomain,
      homePageImage: homePageImageURL,
      homePageHeading,
      homePageDescription,
      featurePageDescription,
      featureCards,
      projectCards,
      testimonials: req.body.testimonials || [],
      companies,
      newsDescription,
      newsCards,
      contactUs: {
        phoneNumber: contactUs.phoneNumber,
        email: contactUs.email,
        location: contactUs.location,
      },
    });

    if (!newTemplate) {
      throw new ApiError(500, "Error in saving template");
    }

    deleteFilesInDirectory();

    // Send success response
    return res
      .status(201)
      .json(new ApiResponse(201, "Template created successfully", newTemplate));
  } catch (error) {
    console.error("Error in uploading images and saving template:", error);
    deleteFilesInDirectory();
    throw new ApiError(500, "Error in uploading images and saving template");
  }
});

const getTemplateBySubDomain = asyncHandler(async (req, res) => {
  const { subdomain } = req.params;

  const template = await Template.findOne({ subdomain });

  if (!template) {
    throw new ApiError(404, "Template not found");
  }

  return res.status(200).json(new ApiResponse(200, "Template found", template));
});

const updateTemplate = asyncHandler(async (req, res) => {});

const deleteTemplate = asyncHandler(async (req, res) => {});

export { addTemplate, getTemplateBySubDomain, updateTemplate, deleteTemplate };
