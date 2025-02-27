const mongoose = require("mongoose");
const joi = require("joi");

const conactSchema = mongoose.Schema;

const createSchema = new conactSchema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

// const createSchema = new conactSchema(
//   {
//     contactID: {

//       type: mongoose.Schema.Types.ObjectId,
//       auto: true,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     phoneNumber: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true
//   }
// );

module.exports = mongoose.model("Conatct", createSchema);
