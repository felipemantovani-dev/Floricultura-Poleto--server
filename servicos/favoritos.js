const fs = require("fs");

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritoPorId(id) {
    const produtos = JSON.parse(fs.readFileSync("favoritos.json"))

    const produtosFiltrados = produtos.filter( produto => produto.id !== id )
    fs.writeFileSync("favoritos.json", JSON.stringify(produtosFiltrados))
}

function insereFavorito(id) {
    const produtos = JSON.parse(fs.readFileSync("produtos.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const produtoInserido = produtos.find( produto => produto.id === id)
    const novaListaDeFavoritos = [ ... favoritos, produtoInserido ]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos))
}


module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
}