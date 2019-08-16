window.onload = function(){
 console.warn("Ola mundo")   

let meuForm = $("form#formAluno")
console.log(meuForm)
meuForm.on("submit",function(event){
event.preventDefault()

    console.log("Cadastrado")
    let botao = $("form button")
    console.log(botao)

    let botaoQGira = Ladda.create(botao[0])
    botaoQGira.start()
}) 
}
