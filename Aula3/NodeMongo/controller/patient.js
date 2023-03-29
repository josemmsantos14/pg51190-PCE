let PatientModel = require("../model/patient");

module.exports.newPatient = async (
  patientID,
  patientName,
  patientBirthdate,
  patientAge
) => {
  try {
    let patient = new PatientModel({
      patientID,
      patientName,
      patientBirthdate,
      patientAge,
    });
    let response = await patient.save();
    return {
      success: true,
      response,
    };
  } catch (error) {
    console.log(err);
    return {
      success: false,
      response: err,
    };
  }
};
