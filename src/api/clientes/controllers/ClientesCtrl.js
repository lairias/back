// Importing the packages required for the project.
const { validationResult } = require("express-validator");
const mysqlConnection = require("../../../config/db");

//const express = require('express-validator');

// CRUD Methods
//Get all Employees

exports.buscarClientes = async (req, res, next) => {
  const { rtn } = req.params;
  const query = `SELECT tbl_clientes.cod_cliente,
tbl_clientes.cod_persona,
tbl_personas.primer_nom,
tbl_personas.primer_apel,
tbl_personas.rtn_persona,
tbl_clientes.nom_empresa, 
tbl_clientes.correo_electronico, 
tbl_contratos.cod_contratos, 
tbl_contratos.des_contrato, 
tbl_contratos.fec_ini_contrato, 
tbl_contratos.fec_fin_contrato, 
tbl_contratos.tipo_contrato,
tbl_clientes.usr_registro,
tbl_clientes.fec_registro,
tbl_clientes.estado
 FROM tbl_clientes
 INNER JOIN rel_cli_contratos ON rel_cli_contratos.cod_cliente = tbl_clientes.cod_cliente
 INNER JOIN tbl_contratos ON tbl_contratos.cod_contratos = rel_cli_contratos.cod_contratos
 INNER JOIN tbl_personas ON tbl_personas.cod_persona = tbl_clientes.cod_persona   where rtn_persona like  '%${rtn}%' and  tipo_persona = 'Cliente' and tbl_clientes.estado = "1"`;
  try {
    const result = await mysqlConnection.query(query);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.obternerCliente = async (req, res, next) => {
  const query = "CALL SHOW_CLIENTES;";

  try {
    const clientes = await mysqlConnection.query(query);
    return res.json(clientes["0"]);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.obternerClientePorCod = async (req, res, next) => {
  const { cod } = req.params;
  const query = "CALL SHOW_CLIENTES_COD(?)";

  try {
    const result = await mysqlConnection.query(query, [cod]);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.agregarCliente = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    cod_persona,
    nom_empresa,
    correo_electronico,
    des_contrato,
    fec_ini_contrato,
    fec_fin_contrato,
    usr_registro,
  } = req.body;

  const query = `CALL INSERT_CLIENTE(?, ?, ?, ?, ?, ?, ?);`;

  try {
    const result = await mysqlConnection.query(query, [
      cod_persona,
      nom_empresa,
      correo_electronico,
      des_contrato,
      fec_ini_contrato,
      fec_fin_contrato,
      usr_registro,
    ]);
    return res.json({ Status: "Cliente Agregado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.actualizarCliente = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    nom_empresa,
    correo_electronico,
    des_contrato,
    fec_ini_contrato,
    fec_fin_contrato,
    usr_registro,
    des_baja,
    estado,
  } = req.body;

  const { cod } = req.params;

  const query = "CALL UPDATE_CLIENTE(?, ?, ?, ?, ?, ?, ?,?,?);";

  try {
    const result = await mysqlConnection.query(query, [
      cod,
      nom_empresa,
      correo_electronico,
      des_contrato,
      fec_ini_contrato,
      fec_fin_contrato,
      usr_registro,
      des_baja,
      estado,
    ]);
    return res.json({ Status: "Cliente Actualizado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.eliminarCliente = async (req, res, next) => {
  const { usr_registro } = req.body;
  const { cod } = req.params;
  const query = "CALL DELETE_CLIENTE(?, ?);";

  try {
    const result = await mysqlConnection.query(query, [cod, usr_registro]);
    return res.json({ Status: "Cliente Eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};
