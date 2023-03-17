var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    rota: "sensors",
  });
});

router.get("/identificador/:id", function (req, res) {
  res.json({
    identificador: req.params.id,
  });
});

router.get("/acedehpeixoto/:id", function (req, res) {
  axios
    .get("http://nosql.hpeixoto.me/api/sensors/" + req.params.id)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
