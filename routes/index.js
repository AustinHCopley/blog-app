import express from "express";

export default express.Router().get("/", function (req, res, next) {
  res.render("index", { title: "Blog Site" });
});