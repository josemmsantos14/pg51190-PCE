var express = require("express");
var router = express.Router();
var axios = require("axios");
var SensorModel = require("../model/sensor.js");

router.get("/", (req, res) => {
  res.json({
    rota: "sensores",
  });
});

router.get("/identificador/:id", (req, res) => {
  res.json({
    identificador: req.params.id,
  });
});

router.get("/list", (req, res) => {
  SensorModel.find({})
    .then(async (response) => {
      res.json({ Sensors: response });
    })
    .catch((err) => {
      // console.log(err);
      res.json(err);
    });
});

router.get("/list/:id", (req, res) => {
  SensorModel.findOne({ sensorid: req.params.id })
    .then(async (response) => {
      res.json({ Sensor: response });
    })
    .catch((err) => {
      // console.log(err);
      res.json(err);
    });
});

module.exports = router;
