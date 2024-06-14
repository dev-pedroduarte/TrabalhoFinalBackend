const ItemPedido = require('../models/ItemPedido');

async function criar(req, res) {
    try {
        const itemPedido = new ItemPedido(req.body);
        const itemPedidoCriado = await itemPedido.save();
        res.status(201).json(itemPedidoCriado);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar item do pedido!", erro: error.message });
    }
}

async function buscarTodos(req, res) {
    try {
        const itensPedido = await ItemPedido.find();
        res.json(itensPedido);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar itens do pedido!", erro: error.message });
    }
}

async function buscarPorID(req, res) {
    try {
        const itemPedido = await ItemPedido.findById(req.params.id);
        if (itemPedido) {
            res.json(itemPedido);
        } else {
            res.status(404).json({ mensagem: "Item do pedido não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar item do pedido!", erro: error.message });
    }
}

async function atualizar(req, res) {
    try {
        const itemPedidoAtualizado = await ItemPedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (itemPedidoAtualizado) {
            res.json(itemPedidoAtualizado);
        } else {
            res.status(404).json({ mensagem: "Item do pedido não encontrado!" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar item do pedido!", erro: error.message });
    }
}

async function excluir(req, res) {
    try {
        const itemPedidoExcluido = await ItemPedido.findByIdAndDelete(req.params.id);
        if (itemPedidoExcluido) {
            res.json({
                mensagem: "Item do pedido excluído com sucesso!",
                itemPedidoExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Item do pedido não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir item do pedido!", erro: error.message });
    }
}

module.exports = {
    criar,
    buscarTodos,
    buscarPorID,
    atualizar,
    excluir
};
