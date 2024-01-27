import pool from "../../config/db/DBconnection.js";
import bcrypt from "bcryptjs";
import format from "pg-format";

const createUser = async (email, password, rol, lenguage) => {
  console.log(email, password, rol, lenguage);
  //Encryption
  const hashedPassword = await bcrypt.hashSync(password);
  //Query
  const SQLQueryTemplate =
    "INSERT INTO %I (email, password, rol, lenguage) VALUES (%L, %L, %L, %L) RETURNING *;";
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

const checkByEmail = async (email) => {
  const SQLQueryTemplate = "SELECT * FROM %I WHERE email = %L;";
  const SQLTable = "usuarios";
  const SQLFormatted = format(SQLQueryTemplate, SQLTable, email);
  const response = await pool.query(SQLFormatted);
  return response.rows[0];
};
export { createUser, checkByEmail };
