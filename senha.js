const botaoEnviar = document.querySelector('#botao')
const senhaLegal = document.querySelector('#senha')

function enviarSenha(){
    const valor = senhaLegal.value
    if(valor === "INFINITA CRIAÇÃO POSSIBILIDADES"){
        const novaJanela = window.open("", "_blank", "width=400,height=200");
        novaJanela.document.write("<h1>RESPOSTA CERTA! = CHAVE</h1>");
        novaJanela.document.close();
    }else alert("RESPOSTA ERRADA IDIOTA!")

}

 botaoEnviar.addEventListener('click',enviarSenha)
 