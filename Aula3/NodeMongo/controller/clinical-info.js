let ClinicalInfoModel = require("../model/sensor");

module.exports.newClinicalInfo = async (
  clinicalinfoid,
  admDate,
  bed,
  bodyTemp,
  systolic,
  diastolic,
  bpm,
  sato2,
  timestamp
) => {
  console.log("id- " + clinicalinfoid);
  console.log("sato2- " + sato2);
  try {
    let bloodPressObj = { systolic: systolic, diastolic: diastolic };
    let clinicalInfo = new ClinicalInfoModel({
      clinicalInfoID: clinicalinfoid,
      admDate,
      bed,
      bodyTemp,
      bloodPress: bloodPressObj,
      bpm,
      sato2,
      timestamp,
    });
    console.log("id: " + clinicalInfo.clinicalInfoID);
    console.log("sato2: " + clinicalInfo.sato2);
    let response = await clinicalInfo.save();
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
