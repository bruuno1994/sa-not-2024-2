import conn from "../database/db.js";

const controller = {};

controller.login = function (req, res) {
  res.render("sql-injection/login", {
    title: "Autentique-se",
    username: "",
    password: "",
    message: "",
  });
};

controller.processLogin = async function (req, res) {
  try {
    // Usando concatenação de valores em SQL de forma insegura para reproduzir SQL Injection

    const sql = `SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}'`

      console.log('-'.repeat(80));
      console.log(sql);
      console.log('-'.repeat(80));

    const result = await conn.query(sql)

    if (result.rowCount > 0) res.render("sql-injection/success", { title: "Autenticado" });
    else
      res.render("sql-injection/login", {
        title: "Autentique-se",
        username: req.body.username,
        password: req.body.password,
        message: "Usuário ou senha inválidos",
      });
  } catch (error) {
    console.error(error);
    res.render("sql-injection/login", {
      title: "Autentique-se",
      username: req.body.username,
      password: req.body.password,
      message: "Usuário ou senha inválidos",
    });
  }
};

export default controller;