import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

////////////////////// Generate Access Token //////////////////////

const generateAccessTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();

    return { accessToken };
  } catch (error) {
    console.log("error: ", error);
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access token"
    );
  }
};

////////////////////// Register User //////////////////////

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { email, fullName, password } = req.body;

    if ([email, fullName, password].some((field) => field?.trim() === "")) {
      return res.status(400).json(new ApiError(400, "All fields are required"));
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(409)
        .json(new ApiError(409, "User with this email already exists"));
    }

    const user = await User.create({
      email,
      fullName,
      password,
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
      return res
        .status(500)
        .json(new ApiError(500, "Something went wrong, User creation failed"));
    }

    const { accessToken } = await generateAccessTokens(user._id);

    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          { createdUser, accessToken },
          "User created Successfully"
        )
      );
  } catch (error) {
    console.log("error: ", error);
    return res
      .status(500)
      .json(
        new ApiError(500, "Something went wrong while creating a new user")
      );
  }
});

////////////////////// Login User //////////////////////

const login = asyncHandler(async (req, res) => {
  // Gating the required fields from the request body and verify the fields are not empty
  // Check if the user exists and if not return an error
  // Check if the password is correct and if not return an error
  //Generate a new access token and return the user details

  try {
    const { email, password } = req.body;

    if ([email, password].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "All fields are required");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(404, "User with email not found");
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);

    if (!isPasswordCorrect) {
      throw new ApiError(401, "Invalid credentials");
    }

    const { accessToken } = await generateAccessTokens(user._id);

    return res.status(200).json(
      new ApiResponse(200, {
        user: {
          _id: user._id,
          email: user.email,
          fullName: user.fullName,
          subDomain: user.subDomain || "",
          template: user.template,
        },
        accessToken,
      })
    );
  } catch (error) {
    console.log("error: ", error);
    throw new ApiError(500, "Something went wrong while finding the user");
  }
});

////////////////////// Select the Template //////////////////////

const selectTemplate = asyncHandler(async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const { template, subDomain } = req.body;

    if (!template || !subDomain) {
      throw new ApiError(400, "All fields are required");
    }

    const userData = await User.findById(user._id);

    if (!userData) {
      throw new ApiError(404, "User not found");
    }

    userData.template = template;
    userData.subDomain = subDomain;

    userData.markModified("template");

    await userData.save();

    return res.status(200).json(
      new ApiResponse(200, "Template selected successfully", {
        user: userData,
      })
    );
  } catch (error) {
    console.log("error: ", error);
    throw new ApiError(
      500,
      "Something went wrong while selecting the template"
    );
  }
});

export { registerUser, login, selectTemplate };
