//const flowReadingModel = require('../models/flowReading.model');

function Save (model)
{
/*     var model1 = new flowReadingModel();
    model1.river ="Lee";
    model1.location = "Dam";
    model1.level = Math.random();
    model1.recordedAt =  new Date(); */

        model.save(function(err, doc) {
      if (err) return console.error(err);
      console.log("level doc inserted succussfully!");
    }
        );

}

module.exports.Save = Save;
