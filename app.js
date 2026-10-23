// Task1: initiate app and run server at 3000
const express = require("express");
const app = new express();
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const { employeeModel } = require("./model/employeeList");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + "/dist/Frontend")));
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Task2: create mongoDB connection
const MONGODB_URI = process.env.MONGODB_URL || process.env.MONGO_URI || "mongodb+srv://<username>:<password>@cluster0.mongodb.net/EmployeeDB?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log("Error connecting to database:", err.message);
  });

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below

//TODO: get data from db  using api '/api/employeelist'
app.get("/api/employeelist", async (req, res) => {
  try {
    const data = await employeeModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//TODO: get single data from db  using api '/api/employeelist/:id'
app.get("/api/employeelist/:id", async (req, res) => {
  try {
    const data = await employeeModel.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.post("/api/employeelist", async (req, res) => {
  try {
    const data = new employeeModel(req.body);
    const savedData = await data.save();
    res.status(200).json(savedData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//TODO: delete a employee data from db by using api '/api/employeelist/:id'
app.delete("/api/employeelist/:id", async (req, res) => {
  try {
    const result = await employeeModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "ok", result: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.put("/api/employeelist", async (req, res) => {
  try {
    const id = req.body._id;
    const result = await employeeModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ status: "ok", result: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Support update with ID in URL parameter as well
app.put("/api/employeelist/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await employeeModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ status: "ok", result: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//! dont delete this code. it connects the front end file.
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/Frontend/index.html"));
});

//Server listening on http://localhost:3000/api/

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
