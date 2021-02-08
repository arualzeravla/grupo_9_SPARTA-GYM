let express = require ("express")
let app = express()

const path = require ("path")

app.use(express.static("public"));


app.listen (3000, () =>
console.log ("Servidor corriendo en el puerto 3000")
);

app.get ("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get ("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get ("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.get ("/leonidas", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/leonidas.html"))
});

app.get ("/anaxandro", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/anaxandro.html"))
});

app.get ("/bandas", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/bandas.html"))
});

app.get ("/helena", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/helena.html"))
});

app.get ("/speedrope", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/speedrope.html"))
});

