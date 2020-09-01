const express = require("express");
const router = express.Router();
const { Data } = require("../models/Data");
const { auth } = require("../middleware/auth");

router.post("/uploadData", (req, res) => {
  const data = new Data(req.body);
  data.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});
router.get("/getDatas", (req, res) => {
  Data.find().exec((err, datas) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, datas });
  });
});

module.exports = router;
