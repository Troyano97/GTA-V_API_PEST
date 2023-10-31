import express from "express";

const app = express();

app.use(express.json());

app.use(corse());

app.get("/", (req, res) => {
    res.json ({atributo: "<h1> pos 2 </h1>"});
});

app.get("/", (req, res) => {
    res.send ("<h1> MUY BUENAS A TODOS GUAPUSIMOS </h1>");
});

app.get("/api", (req, res) => {
    res.send ("<h1> MUY BUENAS A TODOS </h1>");
});

app.get("/api/:id", (req, res) => {
    console.log (req.param)
    res.send ("<h1> MUY BUENAS GUAPUSIMOS </h1>");
});

app.get("/api", (req, res) =>{
    console.log(req.query);
    res.send ('<h1> hola 3 ${req.query.param3}</h1>');
})

app.get("/api", (req, res) =>{
    console.log(req.params);
    res.send ('<h1> hola 3 ${req.params.id}</h1>');
})

app.put("/api", (req, res)=>{
    res.json({atributo: "<h1> PUT </h1>"});
});

app.delete("/api", (req, res)=>{
    res.json({atributo: "<h1> DELETE </h1>"});
});

/* app.listen(4000, ()=>{
    console.log("servidor activo");
}) */

app.listen(process.env.PORT || 4000, ()=>{
    console.log("servidor activo",process.env.PORT || 4000);
})

app.post("/api", (req,res)=>{
    res.send(`<h1>POST!</h1>`);
})


app.use((req, res )=>{
    res.send ("<h1>404 NOT FOUND </h1>");
})