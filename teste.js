const fs = require("fs");

const dadosAtual = JSON.parse(fs.readFileSync("produtos.json"))
const dadosNovos = { id: "3", nome: "suculenta"}

fs.writeFileSync("produtos.json", JSON.stringify([...dadosAtual, dadosNovos ]))

console.log(JSON.parse(fs.readFileSync("produtos.json")))