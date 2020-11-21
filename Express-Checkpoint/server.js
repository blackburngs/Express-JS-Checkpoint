const express = require("express");
const hbs = require("hbs");
const PORT = 2000 || 4000;

const app = express();

const timeVerification = (req, res, next) => {
  let time = new Date();
  if (
    time.getDay() <= 5 &&
    time.getDay() >= 0 &&
    time.getHours <= 16 &&
    time.getHours >= 9
  ) {
    next();
  } else res.render("closed.hbs", { time: time.toUTCString() });
};

app.use(timeVerification);

app.set("view-engine", hbs);
app.use(express.static("main"));

app.get("/homePage", (req, res, next) => {
  res.render("homePage.hbs", {
    image: "image/back.jpg",
    style: "css/style.css",
  });
});

app.get("/contactUs", (req, res, next) => {
  res.render("contactUs.hbs", {
    image: "image/back.jpg",
    style: "css/style.css",
  });
});

app.get("/ourServices", (req, res, next) => {
  res.render("ourServices.hbs", {
    image: "image/back.jpg",
    style: "css/style.css",
  });
});

app.get("/closed", (req, res, next) => {
  res.render("closed.hbs");
});

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
