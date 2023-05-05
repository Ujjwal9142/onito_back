const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRoutes = require("./routes/users");

dotenv.config();
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

// Routes
app.use("/user", userRoutes);

// Error Handling Middleware
app.use((error, req, res, next) => {
  console.log(error, "error");
  const message =
    error.message ||
    "Something went wrong with the server, please try again later.";
  const status = error.statusCode || 500;
  const data = error.data;
  res.status(status).json({ message, data });
});

// Mongoose Setup
const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB connected.`);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
