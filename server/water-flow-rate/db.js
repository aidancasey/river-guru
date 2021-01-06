// const flowReadingModel = require('../models/flowReading.model');

function Save(model) {
/*     var model1 = new flowReadingModel();
    model1.river ="Lee";
    model1.location = "Dam";
    model1.level = Math.random();
    model1.recordedAt =  new Date(); */

  model.save((err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(result);
    }
  });
}

module.exports.Save = Save;
