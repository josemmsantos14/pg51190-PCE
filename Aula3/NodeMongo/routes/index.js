var express = require("express");
var router = express.Router();
var SensorController = require("../controller/sensor.js");
var ServiceController = require("../controller/service");
var PatientController = require("../controller/patient");
var CaretakerController = require("../controller/caretaker");
var ClinicalInfoController = require("../controller/clinical-info");
var axios = require("axios");

router.get("/", (req, res) => {
  res.json({
    rota: "index",
  });
});

router.get("/acedehpeixoto/:id", (req, res) => {
  axios
    .get("http://nosql.hpeixoto.me/api/sensor/" + req.params.id)
    .then(async (response) => {
      const { sensorid, sensornum, type_of_sensor } = response.data;
      const { servicecod, servicedesc } = response.data;
      const { patient } = response.data;
      const { careteam } = response.data;
      const { admdate, bed, bodytemp, bloodpress, bpm, sato2, timestamp } =
        response.data;

      //SENSOR----------------------------------------------------
      let newSensorResponse = await SensorController.newSensor(
        sensorid,
        sensornum,
        type_of_sensor
      );

      //SERVICE----------------------------------------------------
      let newServiceResponse = await ServiceController.newService(
        servicecod,
        servicedesc
      );

      //PATIENT----------------------------------------------------
      let newPatientResponse = await PatientController.newPatient(
        patient.patientid,
        patient.patientname,
        patient.patientbirthdate,
        patient.patientage
      );

      //CARETEAM----------------------------------------------------
      for (let i = 0; i < careteam.length; i++) {
        var newCaretakerResponse = await CaretakerController.newCaretaker(
          careteam[i].id,
          careteam[i].nome
        );
      }

      //CLINICAL-INFO----------------------------------------------------
      // let newClinicalInfoResponse =
      //   await ClinicalInfoController.newClinicalInfo(
      //     admdate,
      //     bed,
      //     bodytemp,
      //     bloodpress.systolic,
      //     bloodpress.diastolic,
      //     bpm,
      //     sato2,
      //     timestamp
      //   );
      // console.log(newClinicalInfoResponse);

      if (
        newSensorResponse.success &&
        newServiceResponse.success &&
        newPatientResponse.success &&
        newCaretakerResponse.success //&&
        // newClinicalInfoResponse.success
      ) {
        res.status(200).json({ info: "Adicionado com sucesso" });
      } else {
        res.status(200).json({ info: "Erro ao adicionar novo" });
      }
    })
    .catch((err) => {
      console.log("ERRO: " + err);
      res.json(err);
    });
});

module.exports = router;
