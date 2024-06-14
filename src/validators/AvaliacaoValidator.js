const yup = require('yup');

const schema = yup.object().shape({
    idAvaliacao: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    idCliente: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    idProduto: yup
        .number('Campo precisa ser um número')
        .required('Campo obrigatório'),
    nota: yup
        .number('Campo precisa ser um número entre 1 e 5')
        .min(1, 'A nota mínima é 1')
        .max(5, 'A nota máxima é 5')
        .required('Campo obrigatório'),
    comentario: yup
        .string('Campo precisa ser um texto')
        .optional(),
    dataAvaliacao: yup
        .date('Data inválida')
        .required('Campo obrigatório')
});

function avaliacaoValidador(req, res, next) {
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
    avaliacaoValidador
};
