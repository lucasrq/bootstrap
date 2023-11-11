// aqui estamoos usando o jquery para fazer uma mascara no formulario no input telefone
$(document).ready(function () {
    $('#Telefone').mask('(00) 00000-0000', { placeholder: '(00) 00000-0000' })
})

// pegando o elemento e trasformando em um variavel
let form = document.querySelector('.FormularioValidad')

// pegando o valor do checkbox
let checkBox = document.getElementById('aceito-termos')



form.addEventListener('submit', function (e) {
    e.preventDefault()
    const nome = form.elements.nome.value;
    const email = form.elements.email.value;
    const telefone = form.elements.telefone.value;
    const checkBoxValue = checkBox.checked;

    if (checkBoxValue == true) {
        listaEvento(nome, email, telefone)

        limparCampo()

        adicionarLinha(nome, email, telefone)
    } else {
        alert('Voce nao concordou com os termos')
    }
})
function listaEvento(nome, email, telefone) {
    console.log('Nome:' + nome)
    console.log('Email :' + email)
    console.log('Telefone :' + telefone)
    console.log(' ')
}
// Resetando o form para receber mas valores
function limparCampo() {
    form.elements.nome.value = ''
    form.elements.email.value = ''
    form.elements.telefone.value = ''
}

function adicionarLinha(nome, email, telefone) {
    var tbody = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];

    // Cria uma nova linha e células
    var novaLinha = tbody.insertRow();
    var celulaNome = novaLinha.insertCell(0);
    var celulaEmail = novaLinha.insertCell(1);
    var celulaTelefone = novaLinha.insertCell(2);

    // Define o conteúdo das células com os valores obtidos
    celulaNome.innerHTML = nome;
    celulaEmail.innerHTML = email;
    celulaTelefone.innerHTML = telefone;
}

