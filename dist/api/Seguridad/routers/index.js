"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var _require2 = require("../controllers/SeguridadCtrl"),
    Parametro = _require2.Parametro,
    fecha_sistem = _require2.fecha_sistem,
    Parametros = _require2.Parametros,
    UpateParametro = _require2.UpateParametro;

router.get("/:cod", Parametro);
router.get("/parametros/:cod", Parametros);
router.put("/upparametro/:cod", UpateParametro);
router.get("/", fecha_sistem);
module.exports = router;