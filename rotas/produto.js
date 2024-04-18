const {Router} = require("express");
const { getProdutos, getProduto, postProduto, patchProduto, deleteProduto } = require("../controladores/produtos")

const router = Router();

router.get('/', getProdutos)

router.get('/:id', getProduto)

router.post('/', postProduto)

router.patch('/:id', patchProduto)

router.delete('/:id', deleteProduto)

module.exports = router 