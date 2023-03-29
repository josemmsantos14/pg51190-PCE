let ClinicalInfoModel = require("../model/sensor");

module.exports.newClinicalInfo = async (
  clinicalinfoid,
  admDate,
  bed,
  bodyTemp,
  systolic,
  diastolic,
  bpm,
  stato2,
  timestamp
) => {
  try {
    let bloodPressObj = { systolic: systolic, diastolic: diastolic };
    let clinicalInfo = new ClinicalInfoModel({
      clinicalInfoID: clinicalinfoid,
      admDate,
      bed,
      bodyTemp,
      bloodPress: bloodPressObj,
      bpm,
      stato2,
      timestamp,
    });
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
