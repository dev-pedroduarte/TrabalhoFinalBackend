const Cliente = require('../models/Cliente');

async function criar(req, res) {
    try {
        const cliente = new Cliente(req.body);
        const clienteCriado = await cliente.save();
        res.status(201).json(clienteCriado);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar cliente!", erro: error.message });
    }
}

async function buscarTodos(req, res) {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar clientes!", erro: error.message });
    }
}

async function buscarPorID(req, res) {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ mensagem: "Cliente não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar cliente!", erro: error.message });
    }
}

async function atualizar(req, res) {
    try {
        const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (clienteAtualizado) {
            res.json(clienteAtualizado);
        } else {
            res.status(404).json({ mensagem: "Cliente não encontrado!" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar cliente!", erro: error.message });
    }
}

async function excluir(req, res) {
    try {
        const clienteExcluido = await Cliente.findByIdAndDelete(req.params.id);
        if (clienteExcluido) {
            res.json({
                mensagem: "Cliente excluído com sucesso!",
                clienteExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Cliente não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir cliente!", erro: error.message });
    }
}

module.exports = {
    criar,
    buscarTodos,
    buscarPorID,
    atualizar,
    excluir
};
