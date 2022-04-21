const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  activity: [
    {
      id: {
        type: String,
        minlength: [5],
        maxLength: [6],
      },
      name: {
        type: String,
        minlength: [3],        
      },
      src: {
        type: String,
        minlength: [17],
      },
      type: {
        type: String,        
      },
    },
  ],
  actDate: { type: String, length:[10] },
  quantity: { type: String, minlength: [3, "Quantity should contains at least 3 char"] },
  duration: { type: String, } ,
  timestamp: { type: Date }
});

const RecordModel = mongoose.model("Record", recordSchema, "records");

module.exports = RecordModel;