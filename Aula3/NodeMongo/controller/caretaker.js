let CareTakerModel = require("../model/caretaker");

module.exports.newCaretaker = async (id, name) => {
  try {
    let caretaker = new CareTakerModel({
      id,
      name,
    });
    let response = await caretaker.save();
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
