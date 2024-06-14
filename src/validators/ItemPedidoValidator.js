const yup = require('yup');

const schema = yup.object().shape({
    idItem: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    idPedido: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    idProduto: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    quantidade: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    precoUnitario: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    subtotal: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório')
});

function itemPedidoValidador(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            console.log(err);
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                };
                return erro;
            });
            res.status(400).json({
                mensagem: "Falha na validação dos campos",
                erros: errors
            });
        });
}

module.exports = {
    itemPedidoValidador
};
