const express = require("express");
const path = require("path");
const courseRoutes = require("./routes/courseRoutes");
const registrationRoutes = require("./routes/registrationRoutes");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api/courses", courseRoutes);
app.use("/api/registrations", registrationRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Course Registration System API"
  });
});

module.exports = app;