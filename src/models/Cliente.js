const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema(
    {
        idCliente: {
            type: Number,
            required: true,
            unique: true
        },
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
        endereco: {
            type: String,
            required: true
        },
        dataCadastro: {
            type: Date,
            required: true
        },
        ultimaAtualizacao: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
