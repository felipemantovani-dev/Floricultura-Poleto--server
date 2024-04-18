const fs = require("fs");
const { findSourceMap } = require("module");

function getTodosProdutos() {
    return JSON.parse(fs.readFileSync("produtos.json"))
}

function getProdutoPorId(id) {
    const produtos = JSON.parse(fs.readFileSync("produtos.json"))

    const produtoFiltrado = produtos.filter( produto => produto.id === id ) [0]
    return produtoFiltrado
}

function insereProduto(novoProduto) {
    const produtos = JSON.parse(fs.readFileSync("produtos.json"))

    const novaListaDeProdutos = [ ...produtos, novoProduto ]

    fs.writeFileSync("produtos.json", JSON.stringify(novaListaDeProdutos))
}

function modificaProduto(modificacoes, id) {
    let produtosAtuais = JSON.parse(fs.readFileSync("produtos.json"));
    const indiceModificado = produtosAtuais.findIndex( produto => produto.id === id );

    const conteudoModificado = { ...produtosAtuais[indiceModificado], ...modificacoes }

    produtosAtuais[indiceModificado] = conteudoModificado

    fs.writeFileSync("produtos.json", JSON.stringify(produtosAtuais))
}

function deletaProdutoPorId(id) {
    const produtos = JSON.parse(fs.readFileSync("produtos.json"))

    const produtosFiltrados = produtos.filter( produto => produto.id !== id )
    fs.writeFileSync("produtos.json", JSON.stringify(produtosFiltrados))
}

module.exports = {
    getTodosProdutos,
    getProdutoPorId,
    insereProduto,  
    modificaProduto,
    deletaProdutoPorId
}