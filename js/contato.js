// FORMATAÇÃO DO DOCUMENTO (CPF OU CNPJ):

function formatarDocumento() {
    let numeroDocumento = document.getElementById('numero_documento');
    let valor = numeroDocumento.value.replace(/\D/g, '');

    if (valor.length === 11) {
        numeroDocumento.value = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    } else if (valor.length === 14) {
        numeroDocumento.value = valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    } else {
        numeroDocumento.value = valor;
    }
}

function validarFormulario() {
    let numeroDocumento = document.getElementById('numero_documento');
    let erroDocumento = document.getElementById('erro_documento');
    let valor = numeroDocumento.value.replace(/\D/g, '');

    if (valor.length !== 11 && valor.length !== 14) {
        erroDocumento.textContent = "Informe um número no formato 999.999.999-99 ou 99.999.999/9999-99";
        return false;
    }

    erroDocumento.textContent = "";
    return true;
}

var dadosDoFormulario = {};

//FORMATAÇÃO DO NÚMERO DE TELEFONE:

function formatarTelefone(inputTelefone) {
    var telefoneFormatado = inputTelefone.value.replace(/\D/g, '');
    telefoneFormatado = telefoneFormatado.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1)$2-$3");
    inputTelefone.value = telefoneFormatado;
}

// COMPLETA OS CAMPOS "CIDADE" E "RUA" CONFORME O CEP:

function formatarCEP(inputCEP) {
    var cepFormatado = inputCEP.value.replace(/\D/g, '');
    cepFormatado = cepFormatado.replace(/^(\d{5})(\d{3})$/, "$1-$2");
    cepFormatado = cepFormatado.slice(0, 9);
    inputCEP.value = cepFormatado;
    if (cepFormatado.length === 9) {
        buscarCidadePorCep(cepFormatado);
    }
}

function buscarCidadePorCep(cep) {
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            var resposta = JSON.parse(xhr.responseText);
            if (resposta.localidade && resposta.logradouro) {
                document.getElementById('cidade').value = resposta.localidade;
                document.getElementById('rua').value = resposta.logradouro;
            } else {
                console.error('Resposta da API do Via CEP sem as propriedades "localidade" e/ou "logradouro".');
            }
        } else {
            console.error('Erro ao fazer a solicitação à API do Via CEP. Status:', xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error('Erro de rede ao fazer a solicitação à API do Via CEP.');
    };
    xhr.send();
}

function validarFormulario() {
    return true;
}

// ARMAZENAR DADOS E RESTAURAR FORMULÁRIO APÓS ENVIO:

function armazenarDadosDoFormulario() {
    dadosDoFormulario.numero_documento = document.getElementById('numero_documento').value;
    dadosDoFormulario.cep = document.getElementById('cep').value;
    dadosDoFormulario.cidade = document.getElementById('cidade').value;
    dadosDoFormulario.rua = document.getElementById('rua').value;
    dadosDoFormulario.telefone = document.getElementById('telefone').value;
    dadosDoFormulario.nome_completo = document.getElementById('nome_completo').value;
    dadosDoFormulario.email = document.getElementById('email').value;
    dadosDoFormulario.mensagem = document.getElementById('mensagem').value;
}

function restaurarFormulario() {
    document.getElementById('numero_documento').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('nome_completo').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
}

function validarFormulario() {
    armazenarDadosDoFormulario();
    restaurarFormulario();
    return true;
}