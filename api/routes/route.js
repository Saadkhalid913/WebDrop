const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const path = __dirname + "\\Capture.PNG"
  res.header("Content-Type", "image/png")
  res.sendFile(path)
})

module.exports = router