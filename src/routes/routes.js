const express = require('express');
const router = express.Router();

// Controllers
const ProdutoController = require('../controllers/ProdutoController');
const PedidoController = require('../controllers/PedidoController');
const AvaliacaoController = require('../controllers/AvaliacaoController');
const ItemPedidoController = require('../controllers/ItemPedidoController');
const ClienteController = require('../controllers/ClienteController');

// Validators
const { validarID } = require('../validators/IdValidator.js');
const { produtoValidador } = require('../validators/ProdutoValidator.js');
const { pedidoValidador } = require('../validators/PedidoValidator.js');
const { avaliacaoValidador } = require('../validators/AvaliacaoValidator.js');
const { itemPedidoValidador } = require('../validators/ItemPedidoValidator.js');
const { clienteValidador } = require('../validators/ClienteValidator.js');

// Produto
router.get('/produto', produtoValidador, ProdutoController.buscarTodos);
router.get('/produto/:id', validarID, produtoValidador, ProdutoController.buscarPorID);
router.post('/produto', produtoValidador, ProdutoController.criar);
router.put('/produto/:id', validarID, produtoValidador, ProdutoController.atualizar);
router.delete('/produto/:id', validarID, ProdutoController.excluir);

// Pedido
router.get('/pedido', PedidoController.buscarTodos);
router.get('/pedido/:id', validarID, PedidoController.buscarPorID);
router.post('/pedido', PedidoController.criar);
router.put('/pedido/:id', validarID, PedidoController.atualizar);
router.delete('/pedido/:id', validarID, PedidoController.excluir);

// Avaliação
router.get('/avaliacao', AvaliacaoController.buscarTodos);
router.get('/avaliacao/:id', validarID, AvaliacaoController.buscarPorID);
router.post('/avaliacao',  AvaliacaoController.criar);
router.put('/avaliacao/:id', validarID, AvaliacaoController.atualizar);
router.delete('/avaliacao/:id', validarID, AvaliacaoController.excluir);

// ItemPedido
router.get('/itempedido', ItemPedidoController.buscarTodos);
router.get('/itempedido/:id', validarID, ItemPedidoController.buscarPorID);
router.post('/itempedido', ItemPedidoController.criar);
router.put('/itempedido/:id', validarID, ItemPedidoController.atualizar);
router.delete('/itempedido/:id', validarID, ItemPedidoController.excluir);

// Cliente
router.get('/cliente', ClienteController.buscarTodos);
router.get('/cliente/:id', validarID, ClienteController.buscarPorID);
router.post('/cliente', ClienteController.criar);
router.put('/cliente/:id', validarID, ClienteController.atualizar);
router.delete('/cliente/:id', validarID, ClienteController.excluir);

module.exports = router;
