const mongoose = require('mongoose');

const itemPedidoSchema = new mongoose.Schema(
    {
        idItem: {
            type: Number,
            required: true,
            unique: true
        },
        idPedido: {
            type: Number,
            required: true
        },
        idProduto: {
            type: Number,
            required: true
        },
        quantidade: {
            type: Number,
            required: true
        },
        precoUnitario: {
            type: Number,
            required: true
        },
        subtotal: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const ItemPedido = mongoose.model('ItemPedido', itemPedidoSchema);

module.exports = ItemPedido;
