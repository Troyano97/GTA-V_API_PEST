import express from "express";
import { param } from "express/lib/application";

const app = express();

app.get("/", (req, res) => {
    res.json ({atributo: "<h1> pos 2 </h1>"});
});

app.get("/", (req, res) => {
    res.send ("<h1> MUY BUENAS A TODOS GUAPUSIMOS </h1>");
});

app.get("/api", (req, res) => {
    res.send ("<h1> MUY BUENAS A TODOS </h1>");
});

app.get("/api :id", (req, res) => {
    console.log (req, param)
    res.send ("<h1> MUY BUENAS A TODOS GUAPUSIMOS </h1>");
});

app.listen(4000, ()=>{
    console.log("servidor activo");
})

app.use((req, res )=>{
    res.send ("<h1>404 NOT FOUND </h1>");
})