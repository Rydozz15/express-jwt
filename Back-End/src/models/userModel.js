import pool from "../../config/db/DBconnection";
import bcrypt from "bcryptjs";
import format from "pg-format";

const createUser = async ({ email, password, rol, lenguage }) => {
  //Encryption
  const salt = await bcrypt.genSaltSync(2024); //Extra layer of security
  const hashedPassword = await bcrypt.hashSync(password, salt);

  //Query
  const SQLQueryTemplate =
    "INSERT INTO %I (email, password, rol, lenguage) VALUES (%I, %I, %L, %I) RETURNING *";
  const SQLTable = "usuarios";
  const SQLFormatted = format(
    SQLQueryTemplate,
    SQLTable,
    email,
    hashedPassword,
    rol,
    lenguage
  );

  //Response
  const response = await pool.query(SQLFormatted);
  return response.rows[0];
};

const checkByEmail = async ({ email }) => {
  const SQLQueryTemplate = "SELECT * FROM %I WHERE = %I";
  const SQLTable = "usuarios";
  const SQLFormatted = format(SQLQueryTemplate, SQLTable, email);
  const response = await pool.query(SQLFormatted);
  return response.rows[0];
};
export { createUser, checkByEmail };
