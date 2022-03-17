const mainController = {
    index: (request, response) => {
        const servicos = [
            {
                descricao: "Banho pequeno porte",
                valor: 40
            },
            {
                descricao: "Banho médio porte",
                valor: 60
            },
            {
                descricao: "Banho grande porte",
                valor: 80
            }
        ]

        response.render('index', {title: 'Express', servicos});
    }
}

module.exports = mainController