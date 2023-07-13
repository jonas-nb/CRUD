import express, { urlencoded } from "express";
import mustacheExpress from "mustache-express";
import mainRouter from "./routes/homeRouter";
//configure express
const app = express();
const port = 4000;
app.use(express.urlencoded({ extended: true }));

//configure mustache
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

//acesso a pasta de arquivos statics
app.use(express.static(__dirname + "/public"));

//front
app.use(mainRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
