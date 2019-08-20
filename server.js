const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db =
  "mongodb+srv://<username>:<passwd>@cluster0-zwqus.mongodb.net/<collection name>?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

  .then(con => {
    // console.log(con.connection);
  });

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: [true, "Name should be included"]
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, "Price is not there"]
  }
});

const tour = mongoose.model("Tour", tourSchema);

const test = new tour({
  name: "ololdsnmt",
  rating: 4.8,
  price: 30
});

test
  .save()
  .then(doc => {
    console.log(doc);
  })
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log("conected....");
});
