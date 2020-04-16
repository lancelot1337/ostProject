const mongoose = require("mongoose");

const patientInfoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: {
    type: String,
    default: "undefined",
  },
  Age: {
    type: String,
    default: "undefined",
  },
  Gender: {
    type: String,
    default: "undefined",
  },
  HR: {
    type: String,
    default: "undefined",
  },
  O2Sat: {
    type: String,
    default: "undefined",
  },
  Temp: {
    type: String,
    default: "undefined",
  },
  SBP: {
    type: String,
    default: "undefined",
  },
  MAP: {
    type: String,
    default: "undefined",
  },
  DBP: {
    type: String,
    default: "undefined",
  },
  Resp: {
    type: String,
    default: "undefined",
  },
  EtCO2: {
    type: String,
    default: "undefined",
  },
  BaseExcess: {
    type: String,
    default: "undefined",
  },
  HCO3: {
    type: String,
    default: "undefined",
  },
  FiO2: {
    type: String,
    default: "undefined",
  },
  pH: {
    type: String,
    default: "undefined",
  },
  PaCO2: {
    type: String,
    default: "undefined",
  },
  SaO2: {
    type: String,
    default: "undefined",
  },
  AST: {
    type: String,
    default: "undefined",
  },
  BUN: {
    type: String,
    default: "undefined",
  },
  Alkalinephos: {
    type: String,
    default: "undefined",
  },
  Calcium: {
    type: String,
    default: "undefined",
  },
  Chloride: {
    type: String,
    default: "undefined",
  },
  Creatinine: {
    type: String,
    default: "undefined",
  },
  Bilirubin_direct: {
    type: String,
    default: "undefined",
  },
  Glucose: {
    type: String,
    default: "undefined",
  },
  LactateMagnesium: {
    type: String,
    default: "undefined",
  },
  Phosphate: {
    type: String,
    default: "undefined",
  },
  Potassium: {
    type: String,
    default: "undefined",
  },
  Bilirubin_total: {
    type: String,
    default: "undefined",
  },
  TroponinI: {
    type: String,
    default: "undefined",
  },
  Hct: {
    type: String,
    default: "undefined",
  },
  Hgb: {
    type: String,
    default: "undefined",
  },
  PTT: {
    type: String,
    default: "undefined",
  },
  WBC: {
    type: String,
    default: "undefined",
  },
  Fibrinogen: {
    type: String,
    default: "undefined",
  },
  Platelets: {
    type: String,
    default: "undefined",
  },
  HospAdmTime: {
    type: String,
    default: "undefined",
  },
  ICULOS: {
    type: String,
    default: "undefined",
  },
  ap1: {
    type: String,
    default: "undefined",
  },
  ap2: {
    type: String,
    default: "undefined",
  },
  ap3: {
    type: String,
    default: "undefined",
  },
});

//model gives a constructor
module.exports = mongoose.model("PatientInfo", patientInfoSchema);
