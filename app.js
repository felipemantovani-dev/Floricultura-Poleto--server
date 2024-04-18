const express = require("express");
const rotaProduto = require("./rotas/produto.js")

const app = express();
app.use(express.json())

app.use('/produtos', rotaProduto)

const port = 8000;

app.listen(port, () => {
    console.log(`Im listening at ${port}`)
})
