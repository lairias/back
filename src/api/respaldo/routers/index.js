const { Router } = require("express");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Importer = require("mysql-import");
const { validationResult } = require("express-validator");

var Fichero;
const fecha = new Date();
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/UPLOAD");},
  filename: (req, file, cb) => {
    const SQL =
      file.fieldname+fecha.getFullYear()+fecha.getMonth()+
      "-" +
      fecha.getDate() +
      "-" +
      fecha.getHours() +
      "-" +
      fecha.getMinutes();

    cb(null, SQL + path.extname(file.originalname));
    Fichero = SQL;
    console.log(Fichero);
  },
});
const upload = multer({ storage });
const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const importer = new Importer({ host, user, password, database });
const Respaldo = require("../controllers/RespaldoCtrl");
router.get("/", Respaldo.CrearRespaldo);
router.post("/upload", upload.single("file"), async (req, res, next) => {
  try {
    console.log("********************************************")
    await importer.onProgress((progress) => {
      let percent =
        Math.floor((progress.bytes_processed / progress.total_bytes) * 10000) /
        100;
      console.log(`${percent}% Completed`);
    });
    await importer
      .import(`./src/UPLOAD/${Fichero}.sql`)
      .then(() => {
        console.log('SQL file(s) imported.');
      })
      .catch((err) => {
        console.log(err);
        next();
      });
    return res.redirect("http://3.16.169.17:8000/admin/respaldos");
  } catch (error) {
    console.log(error);
    next();
  }
});

module.exports = router;

