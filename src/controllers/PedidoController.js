const Pedido = require('../models/Pedido');
const { validarID } = require('../validators/IdValidator.js');
const { pedidoValidador } = require('../validators/PedidoValidator.js');

async function criar(req, res) {
    try {
        const pedido = new Pedido(req.body);
        const pedidoCriado = await pedido.save();
        res.status(201).json(pedidoCriado);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar pedido!", erro: error.message });
    }
}

async function buscarTodos(req, res) {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar pedidos!", erro: error.message });
    }
}

async function buscarPorID(req, res) {
    try {
        const pedido = await Pedido.findById(req.params.id);
        if (pedido) {
            res.json(pedido);
        } else {
            res.status(404).json({ mensagem: "Pedido não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar pedido!", erro: error.message });
    }
}

async function atualizar(req, res) {
    try {
        const pedidoAtualizado = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (pedidoAtualizado) {
            res.json(pedidoAtualizado);
        } else {
            res.status(404).json({ mensagem: "Pedido não encontrado!" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar pedido!", erro: error.message });
    }
}

async function excluir(req, res) {
    try {
        const pedidoExcluido = await Pedido.findByIdAndDelete(req.params.id);
        if (pedidoExcluido) {
            res.json({
                mensagem: "Pedido excluído com sucesso!",
                pedidoExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Pedido não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir pedido!", erro: error.message });
    }
}

module.exports = {
    criar,
    buscarTodos,
    buscarPorID,
    atualizar,
    excluir
};
