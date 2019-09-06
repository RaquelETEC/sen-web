window.onload = function () {
    console.warn("Ola mundo")

    let meuForm = $("form#formAluno")

    console.log(meuForm)
    meuForm.on("submit", function (event) {
        event.preventDefault()

        console.log("Cadastrado")
        let botao = $("form button")
        console.log(botao)

        let botaoQGira = Ladda.create(botao[0])
        botaoQGira.start()
        //fecth coloca o site num servidor
        //parametro do fetch
        fetch("http://localhost:8080/sen-api/test.php").then(function (resposta) {
            return resposta.json()
        }).then(function (dados) {
            alert(dados.raquel)
        })
    })
}
