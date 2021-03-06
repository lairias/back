"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Importing the packages required for the project.
var _require = require("express-validator"),
    validationResult = _require.validationResult;

var mysqlConnection = require("../../../config/db"); //const express = require('express-validator');
// CRUD Methods
//Get all Employees


exports.obternerRecurso = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var query, recursos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = "CALL SHOW_RECURSOS;";
            _context.prev = 1;
            _context.next = 4;
            return mysqlConnection.query(query);

          case 4:
            recursos = _context.sent;
            return _context.abrupt("return", res.json(recursos["0"]));

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

exports.obternerRecursoPorCod = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var cod, query, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cod = req.params.cod;
            query = "CALL SHOW_RECURSOS_COD(?)";
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

exports.agregarRecurso = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var errors, _req$body, des_recurso, serie_recurso, almacen, usr_registro, cantidad, query, result;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", res.status(422).json({
              errors: errors.array()
            }));

          case 3:
            _req$body = req.body, des_recurso = _req$body.des_recurso, serie_recurso = _req$body.serie_recurso, almacen = _req$body.almacen, usr_registro = _req$body.usr_registro, cantidad = _req$body.cantidad;
            query = "CALL INSERT_RECURSO(?, ?, ?, ?,?);";
            _context3.prev = 5;
            _context3.next = 8;
            return mysqlConnection.query(query, [des_recurso, serie_recurso, almacen, usr_registro, cantidad]);

          case 8:
            result = _context3.sent;
            return _context3.abrupt("return", res.json({
              Status: "Recurso Agregado"
            }));

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](5);
            console.log(_context3.t0);
            next();

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 12]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.buscarRecurso = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var rtn, query, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            rtn = req.params.rtn;
            query = "SELECT * FROM  tbl_recursos   where  serie_recurso like  '%".concat(rtn, "%' and  estado = '1';");
            _context4.prev = 2;
            _context4.next = 5;
            return mysqlConnection.query(query);

          case 5:
            result = _context4.sent;
            return _context4.abrupt("return", res.json(result));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            next();

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 9]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.actualizarRecurso = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var errors, _req$body2, des_recurso, serie_recurso, almacen, usr_registro, cantidad, estado, cod, query, result;

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
            _req$body2 = req.body, des_recurso = _req$body2.des_recurso, serie_recurso = _req$body2.serie_recurso, almacen = _req$body2.almacen, usr_registro = _req$body2.usr_registro, cantidad = _req$body2.cantidad, estado = _req$body2.estado;
            cod = req.params.cod;
            query = "CALL UPDATE_RECURSO(?, ?, ?, ?, ?,?);";
            _context5.prev = 6;
            _context5.next = 9;
            return mysqlConnection.query(query, [cod, des_recurso, serie_recurso, almacen, usr_registro, cantidad, estado]);

          case 9:
            result = _context5.sent;
            return _context5.abrupt("return", res.json({
              Status: "Recurso Actualizado"
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

exports.actualizarRecursoCantidad = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
    var cantidad, cod, query, result;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            cantidad = req.body.cantidad;
            cod = req.params.cod;
            query = "CALL UPDATE_RECURSO_CANTIDAD_MENOS(?, ?);";
            _context6.prev = 3;
            _context6.next = 6;
            return mysqlConnection.query(query, [cod, cantidad]);

          case 6:
            result = _context6.sent;
            return _context6.abrupt("return", res.json({
              Status: "Recurso Actualizado"
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

exports.actualizarRecursoCantidad_mas = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res, next) {
    var cantidad, cod, query, result;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            cantidad = req.body.cantidad;
            cod = req.params.cod;
            query = "CALL UPDATE_RECURSO_CANTIDAD_MAS(?, ?);";
            _context7.prev = 3;
            _context7.next = 6;
            return mysqlConnection.query(query, [cod, cantidad]);

          case 6:
            result = _context7.sent;
            return _context7.abrupt("return", res.json({
              Status: "Recurso Actualizado"
            }));

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](3);
            console.log(_context7.t0);
            next();

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 10]]);
  }));

  return function (_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

exports.eliminarRecurso = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res, next) {
    var usr_registro, cod, query, result;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            usr_registro = req.body.usr_registro;
            cod = req.params.cod;
            query = "CALL DELETE_RECURSO(?, ?);";
            _context8.prev = 3;
            _context8.next = 6;
            return mysqlConnection.query(query, [cod, usr_registro]);

          case 6:
            result = _context8.sent;
            return _context8.abrupt("return", res.json({
              Status: "Recurso Eliminado"
            }));

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](3);
            console.log(_context8.t0);
            next();

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[3, 10]]);
  }));

  return function (_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();