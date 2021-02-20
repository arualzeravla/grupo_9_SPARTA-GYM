let express = require ("express")
let app = express()

let rutasProductos = require ("./routes/productos.js")
let rutasMain = require ("./routes/main.js")

let path = require ("path")

app.use(express.static("public"));
app.use ("/", rutasMain);
app.use("/productos",  rutasProductos)


app.listen (3000, () =>
console.log ("Servidor corriendo en el puerto 3000")
);





