const { Schema, model } = require("mongoose");

const subscribeSchema = new Schema({
  email: { type: String, required: true },
  deleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create model
const Subscribe = model("subscribe", subscribeSchema);

module.exports = Subscribe;
