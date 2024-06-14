const Produto = require('../models/Produto');

async function criar(req, res) {
    try {
        const produto = new Produto(req.body);
        const produtoCriado = await produto.save();
        res.status(201).json(produtoCriado);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar produto!", erro: error.message });
    }
}

async function buscarTodos(req, res) {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar produtos!", erro: error.message });
    }
}

async function buscarPorID(req, res) {
    try {
        const produto = await Produto.findById(req.params.id);
        if (produto) {
            res.json(produto);
        } else {
            res.status(404).json({ mensagem: "Produto não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar produto!", erro: error.message });
    }
}

async function atualizar(req, res) {
    try {
        const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (produtoAtualizado) {
            res.json(produtoAtualizado);
        } else {
            res.status(404).json({ mensagem: "Produto não encontrado!" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar produto!", erro: error.message });
    }
}

async function excluir(req, res) {
    try {
        const produtoExcluido = await Produto.findByIdAndDelete(req.params.id);
        if (produtoExcluido) {
            res.json({
                mensagem: "Produto excluído com sucesso!",
                produtoExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Produto não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir produto!", erro: error.message });
    }
}

module.exports = {
    criar,
    buscarTodos,
    buscarPorID,
    atualizar,
    excluir
};
