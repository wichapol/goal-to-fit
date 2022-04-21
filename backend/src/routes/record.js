const express = require("express");
const RecordModel = require("../models/record");

const router = express.Router();

router.use("/:recordId", async (req, res, next) => {
  const recordId = req.params.recordId;

  // Check if recordId is a valid mongodb objectId
  if (recordId && !recordId.match(/^[0-9a-fA-F]{24}$/)) {
    // You can response 400 too since client should request with valid it
    // But this way it's easier to handle status code
    return res.status(404).send("Record not found");
  }
  const foundRecord = await RecordModel.findById(recordId);
  if (!foundRecord) {
    return res.status(404).send("Record not found");
  }

  req.record = foundRecord;
  req.recordIndex = recordId;
  return next();
});

router.get("/:recordId", (req, res, next) => {
  
  return res.send(req.record);
});

router.get("/", async (req, res, next) => {
  const records = await RecordModel.find({});
  res.send(records);
  
});

router.post("/", async (req, res, next) => {
  const body = req.body;

  const newRecord = new RecordModel(body);

  const errors = newRecord.validateSync();
  if (errors) {
    const errorFieldNames = Object.keys(errors.errors);
    if (errorFieldNames.length > 0) {
      return res.status(400).send(errors.errors[errorFieldNames[0]].message);
    }
  }

  await newRecord.save();

  return res.status(201).send(newRecord);
});

router.put("/:recordId", async (req, res, next) => {
  const body = req.body;
  const index = req.recordIndex;
  // find the request doc by it's id
  const recordToBeUpdated = req.record;

  const errors = recordToBeUpdated.validateSync();
  if (errors) {
    const errorFieldName = object.keys(errors.errors);
    if (errorFieldName.length > 0) {
      return res.status(400).send(errors.errors[errorFieldName[0]].message);
    }
  }
  // prepare data to update by using object dot operator
  const updatedRecord = {
    _id: index,
    ...body,
  };
  // log out what we get for updating document
  console.log("updated data", updatedRecord);
  // update exist doc by using Model.overwrite method
  recordToBeUpdated.overwrite(updatedRecord);
  await recordToBeUpdated.save();
  // return res.status(201).send(records[index]);
  return res.status(201).send(recordToBeUpdated);
});

router.delete("/:recordId", async (req, res, next) => {
  await RecordModel.deleteOne({ _id: req.params.recordId });
  return res.status(204).send(`RecordId ${req.params.recordId} successfully removed`); // 204 = No content which mean it successfully removed
});

module.exports = router;