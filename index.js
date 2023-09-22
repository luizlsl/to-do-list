const express = require("express");
const app = express();

//Express ultilizando EJS como View engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var nome = "Luiz Silva"; //Criando a variável nome
  var lang = "Python, JS, c++"; //Criando a variável lang
  var fram = "Django, React, ExpressJS e PyQT"; //Cria variavel fram
  var area = "Pricipal Front-End e o necessario do Back-End"; //Cria variavel area
  var lings = [
    {nome:"HTML", n:"65%"},
    {nome:"CSS", n:"45%"},
    {nome:"python", n:"39%"},
    {nome:"javaScript", n:"10%"}
  ]
  res.render("index",{
    nome: nome,
    lang: lang,
    fram: fram,
    area: area,
    lings: lings
  }); // Renderiza o index.js na tela
  //Ultilizando o "Render" ele olha automaticamente o arquivo que está na pasta "views"
});

app.listen(8080, () => {
  console.log("App rodando!");
});
