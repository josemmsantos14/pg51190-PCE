let ServiceModel = require("../model/service");

module.exports.newService = async (serviceID, serviceDesc) => {
  try {
    let service = new ServiceModel({
      serviceID,
      serviceDesc,
    });
    let response = await service.save();
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
