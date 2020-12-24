const flowReadingModel = require('../models/flowReading.model');
const User = require('../models/user.model');


function Save ()
{
 

    var model1 = new flowReadingModel();
    model1.level = "102";

        model1.save(function(err, doc) {
      if (err) return console.error(err);
      console.log("level doc inserted succussfully!");
    }
        );

}

module.exports.Save = Save;
