const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: {
      type: String,
      required: true // обязателен или нет title
    },
    body: {
      type: String
    }
  },
  {
    timestamps: true // дата создания и дата редактирования
  }
);

schema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("Post", schema);
