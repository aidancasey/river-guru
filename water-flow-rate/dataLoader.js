var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/riverdb", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connection Successful!");
});


function Save ()
{
    var schema = mongoose.Schema({
        name: String,
        age: Number
      });
      
      var Model = mongoose.model("model", schema, "myCollection");
      
      var doc1 = new Model({ name: "Aidan", age: 46 });
      
      doc1.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
      });

}

module.exports.Save = Save;
