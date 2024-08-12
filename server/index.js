const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const bannerRoutes = require("./routes/bannerRoutes");
const fileUpload = require("express-fileupload");

const { cloudinaryConnect } = require("./config/cloudinary");

require("dotenv").config();

const app = express();

app.use(express.json({ limit: "100mb" }));
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp",
    })
);

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

app.use("/api", bannerRoutes);

cloudinaryConnect();

sequelize
    .sync()
    .then(() => {
        console.log("Database connected and synced");
    })
    .catch((err) => console.log("Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
