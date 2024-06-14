const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema(
    {
        idPedido: {
            type: Number,
            required: true,
            unique: true
        },
        dataPedido: {
            type: Date,
            required: true
        },
        idCliente: {
            type: Number,
            required: true
        },
        totalPedido: {
            type: Number,
            required: true
        },
        statusPedido: {
            type: String,
            required: true,
            enum: ['Pendente', 'Entregue', 'Cancelado'] // Exemplos de status
        },
        formaPagamento: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
