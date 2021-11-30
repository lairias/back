"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var PlanillaCtrl = require("../controllers/PlanillaCtrl");

router.get("/", PlanillaCtrl.obtenerPlanilla);
router.get("/:cod", PlanillaCtrl.obtenerPlanillaPorCod);
router.post("/", PlanillaCtrl.agregarPlanilla);
router.put("/:cod", PlanillaCtrl.actualizarPlanilla);
router["delete"]("/:cod", PlanillaCtrl.eliminarPlanilla);
module.exports = router;