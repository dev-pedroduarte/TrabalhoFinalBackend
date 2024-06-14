const yup = require('yup');

const schema = yup.object().shape({
    idCliente: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    nome: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatório'),
    email: yup
        .string('Campo precisa ser um texto')
        .email('E-mail inválido')
        .required('Campo obrigatório'),
    telefone: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatório'),
    endereco: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatório'),
    dataCadastro: yup
        .date('Data inválida')
        .required('Campo obrigatório'),
    ultimaAtualizacao: yup
        .date('Data inválida')
        .required('Campo obrigatório')
});

function clienteValidador(req, res, next) {
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
    clienteValidador
};
