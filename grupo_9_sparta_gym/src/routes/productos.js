let express = require ('express');
let router = express.Router();

let path = require ("path")

router.get ("/leonidas", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/leonidas.html"))
});

router.get ("/anaxandro", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/anaxandro.html"))
});

router.get ("/bandas", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/bandas.html"))
});

router.get ("/helena", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/helena.html"))
});

router.get ("/speedrope", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/speedrope.html"))
});

module.exports = router;