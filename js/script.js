function radioSelecionado(){
    var res = '';
    const itens = document.getElementsByName('genero');
    for (var i = 0; i < itens.length; i++) {
        if (itens[i].checked){
            res = itens[i].value
            break;
        }
    }
    return res;
}

function verificar() {
    var res = radioSelecionado();

    var nome = document.getElementById("nmSobrenomeId")
    var email = document.getElementById("emailId")
    var cpf = document.getElementById("cpfId")
    var nascimento = document.getElementById("dataNascimentoId")
    var motivacao = document.getElementById("motivacaoId")
    var link = document.getElementById("linkIndex")

    if(nome.value == ""){
        alert("Nome não informado")
    }else if (email.value == ""){
        alert("E-mail não informado")
    }else if(cpf.value == ""){
        alert("CPF não informado")
    }else if (res === '') {
        alert('Nenhum gênero selecionado')
    }else if(nascimento.value == ""){
        alert("Data de nascimento não informado")
    }else if(motivacao.value == ""){
        alert("Informe a sua motivação para a viagem")
    }else{
        alert("Dados cadastrados com sucesso!")
        link.href = "./index.html";
    }
}



