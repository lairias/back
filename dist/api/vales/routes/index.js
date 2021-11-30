"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router();

var ValesCrl = require("../controllers/ValesCtrl");

router.get("/", ValesCrl.obternerVale);
router.get("/:cod", ValesCrl.obternerValeCod);
router.post("/", ValesCrl.agregarVale);
router.put("/:cod", ValesCrl.actualizarVale);
router["delete"]("/:cod", ValesCrl.eliminarVale);
router.get("/monto_vale/:cod", ValesCrl.obtenerValesEmpleado);
module.exports = router;