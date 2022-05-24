const botaoEnviar = document.getElementById("btnEnviar")

botaoEnviar.addEventListener("click", validaCampos)

function validaCampos(){
    const campos = document.querySelectorAll("input[type='text'],input[type='email'],input[type='date'], textarea")

    for(let x = 0; x < campos.length ; x++){
            if(campos[x].value == ""){
                alert("O CAMPO " + campos[x].name + " está sem preenchimento!")
                return
            }
    }

}

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
    if (res === '') {
        alert('Nenhum gênero selecionado')
    }
}
