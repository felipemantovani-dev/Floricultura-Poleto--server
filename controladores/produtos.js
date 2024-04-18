const { getTodosProdutos, getProdutoPorId, insereProduto, modificaProduto, deletaProdutoPorId} = require("../servicos/produtos")


function getProdutos (req, res) {
    try {
        const produto = getTodosProdutos()
        res.send(produto)
    } catch (error) {
        res.status(500)
        res.send(error.mensage)
    }
    
}

function getProduto(req, res) {
    try {
        const id = req.params.id
        
        if (id && Number(id)) {
            const produto = getProdutoPorId(id)
            res.send(produto) 
        } else {
            res.status(422)
            res.send("ID inválido")
        }  
    } catch (error) {
        res.status(500)
        res.send(error.mensage)
    }
}

function postProduto(req, res) {
    try {
        const novoProduto = req.body
        if (req.body.name) {
            insereProduto(novoProduto)
            res.status(201)
            res.send("Produto inserido com sucesso")
        } else {
            res.status(422)
            res.send("O campo 'name' é obrigatório")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchProduto (req, res ) {
    try {
        const id = req.params.id
        
        if (id && Number(id)) {
            const body = req.body
            modificaProduto(body, id)
            res.send("item modificado com sucesso!")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteProduto (req, res) {
    try {
        const id = req.params.id
        
        if (id && Number(id)) {
            deletaProdutoPorId(id)
            res.send("Produto deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.mensage)
    }
}

module.exports = {
    getProdutos,
    getProduto,
    postProduto,
    patchProduto,
    deleteProduto
}