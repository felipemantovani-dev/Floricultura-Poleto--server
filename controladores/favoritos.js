const { getTodosFavoritos, deletaFavoritoPorId, insereFavorito } = require("../servicos/favoritos")

function getFavoritos (req, res) {
    try {
        const produto = getTodosFavoritos()
        res.send(produto)
    } catch (error) {
        res.status(500)
        res.send(error.mensage)
    }
    
}

function deleteFavorito (req, res) {
    try {
        const id = req.params.id
        
        if (id && Number(id)) {
            deletaFavoritoPorId(id)
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


function postFavorito(req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.status(201)
        res.send("Favorito inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getFavoritos,
    deleteFavorito,
    postFavorito
}
