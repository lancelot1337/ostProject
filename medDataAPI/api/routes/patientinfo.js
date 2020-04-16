const express = require("express");
//for verbs and endpoints
const router = express.Router();

//for multer
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); //pass potential errors and dirname
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

//mime filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    //accept a file
    cb(null, true);
  } else {
    //reject a file
    cb(null, false);
  }
};

//or pass {dest: 'uploads/'}
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter: fileFilter,
});

//for controller
const PatientInfoController = require("../controller/patientinfo");

router.get("/", PatientInfoController.getAll);

router.post("/", PatientInfoController.post);

router.get("/:id", PatientInfoController.getSingle);

router.patch("/:id", PatientInfoController.patch);

router.delete("/:id", PatientInfoController.delete);

module.exports = router;
