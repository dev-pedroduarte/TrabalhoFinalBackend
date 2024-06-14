const { toString, objectRegExp } = require('express/lib/router');
const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema(
    {
        idProduto: {
            type: Number,
            required: true,
            unique: true
        },
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        marca: {
            type: String,
            required: true
        },
        preco: {
            type: Number,
            required: true
        },
        quantidadeEmEstoque: {
            type: Number,
            required: true
        },
        tamanhoDisponivel: {
            type: String,
            required: true
        },
        cor: {
            type: String,
            required: true
        },
        categoria: {
            type: String,
            required: true
        },
        material: {
            type: String,
            required: true
        },
        colecao: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;
// get type for error message
function gettype(obj) {
  var type = typeof obj;

  if (type !== 'object') {
    return type;
  }

  // inspect [[Class]] for objects
  return toString.call(obj)
    .replace(objectRegExp, '$1');
}
exports.gettype = gettype;
