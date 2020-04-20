const mongoose = require("mongoose");
const PatientInfo = require("../models/patientinfo");

exports.getAll = (req, res, next) => {
  PatientInfo.find()
    .select(
      "createdAt updatedAt Name Age Gender HR O2Sat Temp SBP MAP DBP Resp EtCO2 BaseExcess HCO3 FiO2 pH PaCO2 SaO2 AST BUN Alkalinephos Calcium Chloride Creatinine Bilirubin_direct Glucose LactateMagnesium Phosphate Potassium Bilirubin_total TroponinI Hct Hgb PTT WBC Fibrinogen Platelets HospAdmTime ICULOS ap1 ap2 ap3"
    )
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        patients: docs.map((doc) => {
          return {
            _id: doc._id,
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
            Name: doc.Name,
            Age: doc.Age,
            Gender: doc.Gender,
            HR: doc.HR,
            O2Sat: doc.O2Sat,
            Temp: doc.Temp,
            SBP: doc.SBP,
            MAP: doc.MAP,
            DBP: doc.DBP,
            Resp: doc.Resp,
            EtCO2: doc.EtCO2,
            BaseExcess: doc.BaseExcess,
            HCO3: doc.HCO3,
            FiO2: doc.FiO2,
            pH: doc.pH,
            PaCO2: doc.PaCO2,
            SaO2: doc.SaO2,
            AST: doc.AST,
            BUN: doc.BUN,
            Alkalinephos: doc.Alkalinephos,
            Calcium: doc.Calcium,
            Chloride: doc.Chloride,
            Creatinine: doc.Creatinine,
            Bilirubin_direct: doc.Bilirubin_direct,
            Glucosedoc: doc.Glucose,
            LactateMagnesium: doc.LactateMagnesium,
            Phosphate: doc.Phosphate,
            Potassium: doc.Potassium,
            Bilirubin_total: doc.Bilirubin_total,
            TroponinI: doc.TroponinI,
            Hct: doc.Hct,
            Hgb: doc.Hgb,
            PTT: doc.PTT,
            WBC: doc.WBC,
            Fibrinogen: doc.Fibrinogen,
            Platelets: doc.Platelets,
            HospAdmTime: doc.HospAdmTime,
            ICULOS: doc.ICULOS,
            ap1: doc.ap1,
            ap2: doc.ap2,
            ap3: doc.ap3,
            request: {
              type: "GET",
              url: "http://localhost:3000/patientinfo/" + doc._id,
            },
          };
        }),
      };
      // if(docs.length >= 0){
      res.status(200).json(response);
      // } else{
      // 	res.status(404).json({message: "No entires found"})
      // }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.post = (req, res, next) => {
  const patient = new PatientInfo({
    _id: new mongoose.Types.ObjectId(),
    Name: req.body.Name,
    Age: req.body.Age,
    Gender: req.body.Gender,
    HR: req.body.HR,
    O2Sat: req.body.O2Sat,
    Temp: req.body.Temp,
    SBP: req.body.SBP,
    MAP: req.body.MAP,
    DBP: req.body.DBP,
    Resp: req.body.Resp,
    EtCO2: req.body.EtCO2,
    BaseExcess: req.body.BaseExcess,
    HCO3: req.body.HCO3,
    FiO2: req.body.FiO2,
    pH: req.body.pH,
    PaCO2: req.body.PaCO2,
    SaO2: req.body.SaO2,
    AST: req.body.AST,
    BUN: req.body.BUN,
    Alkalinephos: req.body.Alkalinephos,
    Calcium: req.body.Calcium,
    Chloride: req.body.Chloride,
    Creatinine: req.body.Creatinine,
    Bilirubin_direct: req.body.Bilirubin_direct,
    Glucosedoc: req.body.Glucose,
    LactateMagnesium: req.body.LactateMagnesium,
    Phosphate: req.body.Phosphate,
    Potassium: req.body.Potassium,
    Bilirubin_total: req.body.Bilirubin_total,
    TroponinI: req.body.TroponinI,
    Hct: req.body.Hct,
    Hgb: req.body.Hgb,
    PTT: req.body.PTT,
    WBC: req.body.WBC,
    Fibrinogen: req.body.Fibrinogen,
    Platelets: req.body.Platelets,
    HospAdmTime: req.body.HospAdmTime,
    ICULOS: req.body.ICULOS,
    ap1: req.body.ap1,
    ap2: req.body.ap2,
    ap3: req.body.ap3,
  });
  patient
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Created patient successfully",
        createdPatient: {
          _id: result._id,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
          time: result.time,
          Name: result.Name,
          Age: result.Age,
          Gender: result.Gender,
          HR: result.HR,
          O2Sat: result.O2Sat,
          Temp: result.Temp,
          SBP: result.SBP,
          MAP: result.MAP,
          DBP: result.DBP,
          Resp: result.Resp,
          EtCO2: result.EtCO2,
          BaseExcess: result.BaseExcess,
          HCO3: result.HCO3,
          FiO2: result.FiO2,
          pH: result.pH,
          PaCO2: result.PaCO2,
          SaO2: result.SaO2,
          AST: result.AST,
          BUN: result.BUN,
          Alkalinephos: result.Alkalinephos,
          Calcium: result.Calcium,
          Chloride: result.Chloride,
          Creatinine: result.Creatinine,
          Bilirubin_direct: result.Bilirubin_direct,
          Glucosedoc: result.Glucose,
          LactateMagnesium: result.LactateMagnesium,
          Phosphate: result.Phosphate,
          Potassium: result.Potassium,
          Bilirubin_total: result.Bilirubin_total,
          TroponinI: result.TroponinI,
          Hct: result.Hct,
          Hgb: result.Hgb,
          PTT: result.PTT,
          WBC: result.WBC,
          Fibrinogen: result.Fibrinogen,
          Platelets: result.Platelets,
          HospAdmTime: result.HospAdmTime,
          ICULOS: result.ICULOS,
          ap1: result.ap1,
          ap2: result.ap2,
          ap3: result.ap3,
          request: {
            type: "GET",
            url: "http://localhost:3000/patientinfo/" + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.getSingle = (req, res, next) => {
  const id = req.params.id;
  PatientInfo.findById(id)
    .select(
      "createdAt updatedAt Name Age Gender HR O2Sat Temp SBP MAP DBP Resp EtCO2 BaseExcess HCO3 FiO2 pH PaCO2 SaO2 AST BUN Alkalinephos Calcium Chloride Creatinine Bilirubin_direct Glucose LactateMagnesium Phosphate Potassium Bilirubin_total TroponinI Hct Hgb PTT WBC Fibrinogen Platelets HospAdmTime ICULOS ap1 ap2 ap3"
    )
    .exec()
    .then((doc) => {
      console.log(`From DB: ${doc}`);
      if (doc) {
        res.status(200).json({
          patient: doc,
          request: {
            type: "GET",
            url: "http://localhost:3000/products/",
          },
        });
      } else {
        res.status(404).json({ message: "Requested data not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.getNameSingle = (req, res, next) => {
  const name = req.params.name;
  PatientInfo.find({ Name: name })
    .select(
      "createdAt updatedAt Name Age Gender HR O2Sat Temp SBP MAP DBP Resp EtCO2 BaseExcess HCO3 FiO2 pH PaCO2 SaO2 AST BUN Alkalinephos Calcium Chloride Creatinine Bilirubin_direct Glucose LactateMagnesium Phosphate Potassium Bilirubin_total TroponinI Hct Hgb PTT WBC Fibrinogen Platelets HospAdmTime ICULOS ap1 ap2 ap3"
    )
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        patients: docs.map((doc) => {
          return {
            _id: doc._id,
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
            Name: doc.Name,
            Age: doc.Age,
            Gender: doc.Gender,
            HR: doc.HR,
            O2Sat: doc.O2Sat,
            Temp: doc.Temp,
            SBP: doc.SBP,
            MAP: doc.MAP,
            DBP: doc.DBP,
            Resp: doc.Resp,
            EtCO2: doc.EtCO2,
            BaseExcess: doc.BaseExcess,
            HCO3: doc.HCO3,
            FiO2: doc.FiO2,
            pH: doc.pH,
            PaCO2: doc.PaCO2,
            SaO2: doc.SaO2,
            AST: doc.AST,
            BUN: doc.BUN,
            Alkalinephos: doc.Alkalinephos,
            Calcium: doc.Calcium,
            Chloride: doc.Chloride,
            Creatinine: doc.Creatinine,
            Bilirubin_direct: doc.Bilirubin_direct,
            Glucosedoc: doc.Glucose,
            LactateMagnesium: doc.LactateMagnesium,
            Phosphate: doc.Phosphate,
            Potassium: doc.Potassium,
            Bilirubin_total: doc.Bilirubin_total,
            TroponinI: doc.TroponinI,
            Hct: doc.Hct,
            Hgb: doc.Hgb,
            PTT: doc.PTT,
            WBC: doc.WBC,
            Fibrinogen: doc.Fibrinogen,
            Platelets: doc.Platelets,
            HospAdmTime: doc.HospAdmTime,
            ICULOS: doc.ICULOS,
            ap1: doc.ap1,
            ap2: doc.ap2,
            ap3: doc.ap3,
            request: {
              type: "GET",
              url: "http://localhost:3000/patientinfo/" + doc._id,
            },
          };
        }),
      };
      // if(docs.length >= 0){
      res.status(200).json(response);
      // } else{
      // 	res.status(404).json({message: "No entires found"})
      // }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.patch = (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};
  for (const key in req.body) {
    //or const key of Object.keys(req.body)
    updateOps[key] = req.body[key];
  }

  PatientInfo.update(
    { _id: id },
    {
      $set: updateOps,
    }
  )
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "PatientInfo updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/patientinfo/" + id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;
  PatientInfo.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "PatientInfo deleted!",
        request: {
          type: "POST",
          url: "http://localhost:3000/patientinfo/",
          body: {
            Name: "String",
            Age: "String",
            Gender: "String",
            HR: "String",
            O2Sat: "String",
            Temp: "String",
            SBP: "String",
            MAP: "String",
            DBP: "String",
            Resp: "String",
            EtCO2: "String",
            BaseExcess: "String",
            HCO3: "String",
            FiO2: "String",
            pH: "String",
            PaCO2: "String",
            SaO2: "String",
            AST: "String",
            BUN: "String",
            Alkalinephos: "String",
            Calcium: "String",
            Chloride: "String",
            Creatinine: "String",
            Bilirubin_direct: "String",
            Glucose: "String",
            LactateMagnesium: "String",
            Phosphate: "String",
            Potassium: "String",
            Bilirubin_total: "String",
            TroponinI: "String",
            Hct: "String",
            Hgb: "String",
            PTT: "String",
            WBC: "String",
            Fibrinogen: "String",
            Platelets: "String",
            HospAdmTime: "String",
            ICULOS: "String",
            ap1: "String",
            ap2: "String",
            ap3,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.send(500).json({ error: err });
    });
};
