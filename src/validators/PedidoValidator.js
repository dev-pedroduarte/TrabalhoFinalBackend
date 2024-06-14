const yup = require('yup');

const schema = yup.object().shape({
    idPedido: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    dataPedido: yup
        .date('Data inválida')
        .required('Campo obrigatório'),
    idCliente: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    totalPedido: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    statusPedido: yup
        .string('Campo precisa ser um texto')
        .oneOf(['Pendente', 'Entregue', 'Cancelado'], 'Status inválido')
        .required('Campo obrigatório'),
    formaPagamento: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatório')
});

function pedidoValidador(req, res, next) {
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
    pedidoValidador
};
