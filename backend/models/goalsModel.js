const mongoose = require("mongoose");

//define any resources the db have
const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Goals", goalSchema);
