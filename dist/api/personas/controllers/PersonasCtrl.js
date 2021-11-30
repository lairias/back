"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Importing the packages required for the project.
var _require = require("express-validator"),
    validationResult = _require.validationResult;

var mysqlConnection = require("../../../config/db"); //const express = require('express-validator');
// CRUD Methods
//Get all Employees


exports.obternerPersona = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var query, personas;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = "CALL SHOW_PERSONAS;";
            _context.prev = 1;
            _context.next = 4;
            return mysqlConnection.query(query);

          case 4:
            personas = _context.sent;
            return _context.abrupt("return", res.json(personas["0"]));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            next();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.obternerPersonaPorCod = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var cod, query, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cod = req.params.cod;
            query = "CALL SHOW_PERSONAS_COD(?)";
            _context2.prev = 2;
            _context2.next = 5;
            return mysqlConnection.query(query, [cod]);

          case 5:
            result = _context2.sent;
            return _context2.abrupt("return", res.json(result));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);
            next();

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.buscarPersona = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var rtn, query, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            rtn = req.params.rtn;
            query = "SELECT tbl_personas.cod_persona,\n tbl_personas.primer_nom,\n tbl_personas.segundo_nom,\n tbl_personas.primer_apel,\n tbl_personas.sexo,\n tbl_personas.edad,\n tbl_personas.tipo_persona,\n tbl_personas.fec_nac_persona,\n tbl_personas.rtn_persona,\n tbl_direcciones.cod_direc,\n tbl_direcciones.des_direc,\n tbl_direcciones.municipio,\n tbl_direcciones.departamento,\n tbl_telefonos.cod_tel,\n tbl_telefonos.num_tel,\n tbl_telefonos.tipo_tel,\n tbl_personas.usr_registro,\n tbl_personas.fec_registro,\n tbl_personas.estado\n FROM tbl_personas\n INNER JOIN rel_personas_dir ON rel_personas_dir.cod_persona = tbl_personas.cod_persona\n INNER JOIN tbl_direcciones ON tbl_direcciones.cod_direc = rel_personas_dir.cod_direc\n INNER JOIN rel_personas_tel ON rel_personas_tel.cod_persona = tbl_personas.cod_persona\n INNER JOIN tbl_telefonos ON tbl_telefonos.cod_tel = rel_personas_tel.cod_tel  WHERE  rtn_persona like  '%".concat(rtn, "%'  AND  tbl_personas.estado = \"1\"");
            _context3.prev = 2;
            _context3.next = 5;
            return mysqlConnection.query(query);

          case 5:
            result = _context3.sent;
            return _context3.abrupt("return", res.json(result));

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            next();

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 9]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.agregarPersona = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var errors, _req$body, primer_nom, segundo_nom, primer_apel, sexo, edad, tipo_persona, fec_nac_persona, rtn_persona, des_direc, municipio, departamento, num_tel, tipo_tel, usr_registro, query;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", res.status(422).json({
              errors: errors.array()
            }));

          case 3:
            _req$body = req.body, primer_nom = _req$body.primer_nom, segundo_nom = _req$body.segundo_nom, primer_apel = _req$body.primer_apel, sexo = _req$body.sexo, edad = _req$body.edad, tipo_persona = _req$body.tipo_persona, fec_nac_persona = _req$body.fec_nac_persona, rtn_persona = _req$body.rtn_persona, des_direc = _req$body.des_direc, municipio = _req$body.municipio, departamento = _req$body.departamento, num_tel = _req$body.num_tel, tipo_tel = _req$body.tipo_tel, usr_registro = _req$body.usr_registro;
            query = "CALL INSERT_PERSONA(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
            _context4.prev = 5;
            _context4.next = 8;
            return mysqlConnection.query(query, [primer_nom, segundo_nom, primer_apel, sexo, edad, tipo_persona, fec_nac_persona, rtn_persona, des_direc, municipio, departamento, num_tel, tipo_tel, usr_registro]);

          case 8:
            return _context4.abrupt("return", res.json({
              Status: "Persona Agregada"
            }));

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](5);
            console.log(_context4.t0);
            next();

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[5, 11]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.actualizarPersona = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var errors, _req$body2, primer_nom, segundo_nom, primer_apel, sexo, edad, tipo_persona, fec_nac_persona, rtn_persona, des_direc, municipio, departamento, num_tel, tipo_tel, usr_registro, des_baja, estado, cod, query, result;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt("return", res.status(422).json({
              errors: errors.array()
            }));

          case 3:
            _req$body2 = req.body, primer_nom = _req$body2.primer_nom, segundo_nom = _req$body2.segundo_nom, primer_apel = _req$body2.primer_apel, sexo = _req$body2.sexo, edad = _req$body2.edad, tipo_persona = _req$body2.tipo_persona, fec_nac_persona = _req$body2.fec_nac_persona, rtn_persona = _req$body2.rtn_persona, des_direc = _req$body2.des_direc, municipio = _req$body2.municipio, departamento = _req$body2.departamento, num_tel = _req$body2.num_tel, tipo_tel = _req$body2.tipo_tel, usr_registro = _req$body2.usr_registro, des_baja = _req$body2.des_baja, estado = _req$body2.estado;
            cod = req.params.cod;
            query = "CALL UPDATE_PERSONA( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?);";
            _context5.prev = 6;
            _context5.next = 9;
            return mysqlConnection.query(query, [cod, primer_nom, segundo_nom, primer_apel, sexo, edad, tipo_persona, fec_nac_persona, rtn_persona, des_direc, municipio, departamento, num_tel, tipo_tel, usr_registro, des_baja, estado]);

          case 9:
            result = _context5.sent;
            return _context5.abrupt("return", res.json({
              Status: "Persona Actualizada"
            }));

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](6);
            console.log(_context5.t0);
            next();

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[6, 13]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.eliminarPersona = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
    var usr_registro, cod, query, result;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            usr_registro = req.body.usr_registro;
            cod = req.params.cod;
            query = "CALL DELETE_PERSONA(?, ?);";
            _context6.prev = 3;
            _context6.next = 6;
            return mysqlConnection.query(query, [cod, usr_registro]);

          case 6:
            result = _context6.sent;
            return _context6.abrupt("return", res.json({
              Status: "Persona Eliminada"
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](3);
            console.log(_context6.t0);
            next();

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 10]]);
  }));

  return function (_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();