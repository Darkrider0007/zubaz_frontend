import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { extractPublicId } from "cloudinary-build-url";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return;

    console.log("Uploading file on Cloudinary", localFilePath);

    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // Clean up local file after successful upload
    // fs.unlinkSync(localFilePath);

    return result;
  } catch (error) {
    // Clean up local file even if upload fails
    if (fs.existsSync(localFilePath)) {
      // fs.unlinkSync(localFilePath);
    }

    console.log("Error while uploading file on Cloudinary", error);
    return null;
  }
};

const deleteFromCloudinary = async (url, resourceType = "image") => {
  const publicId = extractPublicId(url);
  try {
    const response = await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
    });
    return response;
  } catch (error) {
    console.error("Error while deleting file on Cloudinary", error);
    throw error; // Throw the error to handle it at a higher level or return null
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
