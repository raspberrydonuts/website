const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const PORT = 4000;
app.use(cors());
app.use("/", router);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

const mongoose = require("mongoose");
mongoose.connect("mongodb://3.132.140.197:27017/details", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;


connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
});

let detail = require("./model");

router.route("/getVisits").get(function(req, res) {
    detail.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

router.get("/addVisit", function(req, res) {
    detail.findOneAndUpdate({name: "siteVisits"}, { $inc: { count: 1 }}, {useFindAndModify: false}, function(err, result) {
       if (err) throw err;
       if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
 });
 
// when route hits the homepage, it needs to update the siteVisits.count

// router.get('/', function(req, res, next) {
//     Stat.findOne({name:"counter"}, function(err, counter){
//      if (err) throw err;
//      if(!counter){
//       console.log('unable to fetch data');
//      } 
//     });
//    });