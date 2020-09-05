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
router.post("/getDatas", (req, res) => {
  let findArgs = {};

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      findArgs[key] = req.body.filters[key];
    }
  }
  console.log("findargs", findArgs);

  Data.find(findArgs).exec((err, datas) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, datas });
  });
});

module.exports = router;
