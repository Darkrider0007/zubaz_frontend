import dotenv from "dotenv";

import { app } from "./src/app.js";
import connectDB from "./src/db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => console.log(`Error: ${error}`));
    app.listen(process.env.PORT || 8000, () =>
      console.log(`⚙️  Server🚀 is running on port ${process.env.PORT}✨`)
    );
  })
  .catch((error) => console.log(error.message));
