const yup = require('yup');

const schema = yup.object().shape({
    idProduto: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    nome: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatório'),
    descricao: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatório'),
    marca: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatório'),
    preco: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    quantidadeEmEstoque: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    tamanhoDisponivel: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatório'),
    cor: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatório'),
    categoria: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatório'),
    material: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatório'),
    colecao: yup
        .string('Campo precisa ser um texto')
});

function produtoValidador(req, res, next) {
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
    produtoValidador
};
