import mongoose, { Schema } from "mongoose";

// Sub-schema for feature cards
const FeatureCardSchema = new Schema({
  icon: {
    type: String,
    default: null, // File path or URL
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

// Sub-schema for project cards
const ProjectCardSchema = new Schema({
  image: {
    type: String,
    default: null, // File path or URL
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Branding", "Designing", "Photography", "Development"], // Valid categories
    required: true,
  },
});

// Sub-schema for testimonials
const TestimonialSchema = new Schema({
  rating: {
    type: String, // Assuming string; change to Number if numeric
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

// Sub-schema for companies
const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: null, // File path or URL
  },
});

// Sub-schema for news cards
const NewsCardSchema = new Schema({
  image: {
    type: String,
    default: null, // File path or URL
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Main template schema
const templateSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
    required: true,
    enum: ["1", "2", "3"],
  },
  subdomain: {
    type: String,
    required: true,
  },
  homePageImage: {
    type: String,
    default: null,
  },
  homePageHeading: {
    type: String,
  },
  homePageDescription: {
    type: String,
  },
  featurePageDescription: {
    type: String,
  },
  featureCards: [FeatureCardSchema],
  projectCards: [ProjectCardSchema],

  testimonials: [TestimonialSchema],
  companies: [CompanySchema],
  newsDescription: {
    type: String,
  },
  newsCards: [NewsCardSchema],
  contactUs: {
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.model("Template", templateSchema);
