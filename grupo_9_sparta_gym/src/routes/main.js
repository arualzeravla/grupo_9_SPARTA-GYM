let express = require ('express');
let router = express.Router();

let path = require ("path")

router.get ("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/home.html"))
});

router.get ("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/register.html"))
});

router.get ("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/login.html"))
});

router.get ("/carrito", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/carrito.html"))
});

module.exports = router;