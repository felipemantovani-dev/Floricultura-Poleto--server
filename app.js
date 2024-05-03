const express = require("express");
const rotaProduto = require("./rotas/produto.js")
const rotaFavoritos = require("./rotas/favoritos.js")
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors({origin:"*"}))

app.use('/produtos', rotaProduto)
app.use('/favoritos', rotaFavoritos)

const port = 8000;

app.listen(port, () => {
    console.log(`Im listening at ${port}`)
})
