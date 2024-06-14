const Avaliacao = require('../models/Avaliacao');

async function criar(req, res) {
    try {
        const avaliacao = new Avaliacao(req.body);
        const avaliacaoCriada = await avaliacao.save();
        res.status(201).json(avaliacaoCriada);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar avaliação!", erro: error.message });
    }
}

async function buscarTodos(req, res) {
    try {
        const avaliacoes = await Avaliacao.find();
        res.json(avaliacoes);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar avaliações!", erro: error.message });
    }
}

async function buscarPorID(req, res) {
    try {
        const avaliacao = await Avaliacao.findById(req.params.id);
        if (avaliacao) {
            res.json(avaliacao);
        } else {
            res.status(404).json({ mensagem: "Avaliação não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar avaliação!", erro: error.message });
    }
}

async function atualizar(req, res) {
    try {
        const avaliacaoAtualizada = await Avaliacao.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (avaliacaoAtualizada) {
            res.json(avaliacaoAtualizada);
        } else {
            res.status(404).json({ mensagem: "Avaliação não encontrada!" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar avaliação!", erro: error.message });
    }
}

async function excluir(req, res) {
    try {
        const avaliacaoExcluida = await Avaliacao.findByIdAndDelete(req.params.id);
        if (avaliacaoExcluida) {
            res.json({
                mensagem: "Avaliação excluída com sucesso!",
                avaliacaoExcluida
            });
        } else {
            res.status(404).json({ mensagem: "Avaliação não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir avaliação!", erro: error.message });
    }
}

module.exports = {
    criar,
    buscarTodos,
    buscarPorID,
    atualizar,
    excluir
};
