"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router();

var asistenciasCtrl = require("../controllers/asistenciasCtrl");

router.get("/", asistenciasCtrl.obternerAsistencia);
router.get("/:cod", asistenciasCtrl.obternerAsistenciaCod);
router.post("/", asistenciasCtrl.agregarAsistencia);
router.put("/:cod", asistenciasCtrl.actualizarAsistencia);
router["delete"]("/:cod", asistenciasCtrl.eliminarAsistencia);
module.exports = router;