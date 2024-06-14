const mongoose = require('mongoose');

const avaliacaoSchema = new mongoose.Schema(
    {
        idAvaliacao: {
            type: Number,
            required: true,
            unique: true
        },
        idCliente: {
            type: Number,
            required: true
        },
        idProduto: {
            type: Number,
            required: true
        },
        nota: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        comentario: {
            type: String
        },
        dataAvaliacao: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Avaliacao = mongoose.model('Avaliacao', avaliacaoSchema);

module.exports = Avaliacao;
