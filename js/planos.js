var cepArmazenado;

function verificarCobertura() {
    var cep = document.getElementById('cep').value;

    cepArmazenado = cep;

    if (cep.trim() === '') {
        var mensagemCepVazio = document.getElementById('mensagemCepVazio');
        mensagemCepVazio.textContent = 'Por favor, insira um CEP válido.';
        mensagemCepVazio.style.display = 'block';
        return;
    } else {
        document.getElementById('mensagemCepVazio').style.display = 'none';
    }

    var faixasCepComCobertura = [
        ['35138-000', '35139-999'],
        ['35240-000', '35245-999'],
        ['35112-000', '35112-999'],
        ['35000-001', '35099-999'],
        ['35150-001', '35168-999'],
        ['35118-000', '35119-999'],
        ['35230-000', '35239-999']
    ];

    var cepCorrespondente = false;

    for (var i = 0; i < faixasCepComCobertura.length; i++) {
        var inicioFaixa = faixasCepComCobertura[i][0].replace('-', '');
        var fimFaixa = faixasCepComCobertura[i][1].replace('-', '');
        var cepNumerico = cep.replace('-', '');

        if (cepNumerico >= inicioFaixa && cepNumerico <= fimFaixa) {
            cepCorrespondente = true;
            break;
        }
    }

    var resultadoDiv = document.getElementById('resultado');
    var botoesDiv = document.getElementById('botoes');

    while (botoesDiv.firstChild) {
        botoesDiv.removeChild(botoesDiv.firstChild);
    }

    if (cep.startsWith('3') && cepCorrespondente) {
        resultadoDiv.textContent = 'Área com provável cobertura. Por favor, clique em "Confirmar" e preencha seus dados para que possamos entrar em contato com você.';
        var coberturaButton = document.createElement('button');
        coberturaButton.textContent = 'Confirmar';
        coberturaButton.onclick = coberturaConfirmada;
        coberturaButton.style.backgroundColor = 'rgb(179, 252, 179)';
        coberturaButton.style.border = '1px solid darkgreen';
        coberturaButton.style.color = 'darkgreen';
        botoesDiv.appendChild(coberturaButton);
    } else if (!cep.startsWith('3')) {
        resultadoDiv.textContent = 'Desculpe, não atendemos fora do estado de Minas Gerais.';
    } else {
        resultadoDiv.textContent = 'Área sem cobertura ou sujeita a análise de viabilidade técnica. Por favor, clique em "Solicitar Avaliação" para que possamos fazer uma análise técnica no local.';
        var analiseButton = document.createElement('button');
        analiseButton.textContent = 'Solicitar Avaliação';
        analiseButton.onclick = analiseTecnica;
        analiseButton.style.backgroundColor = 'lightgoldenrodyellow';
        analiseButton.style.border = '1px solid darkorange';
        analiseButton.style.color = 'darkorange';
        botoesDiv.appendChild(analiseButton);
    }

    resultadoDiv.classList.remove('hidden');
    botoesDiv.classList.remove('hidden');

    document.getElementById('cep').value = '';
}


function coberturaConfirmada() {
    var formulario = document.createElement('form');

    var campos = [
        { label: 'Informações Pessoais', type: 'header'},
        { label: 'Nome:', type: 'text', id: 'nome', required: true},
        { label: 'Sexo:', type: 'radio', id:'genero', name: 'sexo', options: ['Masculino', 'Feminino']},
        { label: 'CPF:', type: 'text', id: 'cpf', required: true},
        { label: 'RG:', type: 'text', id: 'rg', required: true},
        { label: 'Data de Nascimento:', type: 'date', id: 'dataNascimento', required: true},
        { label: 'Email:', type: 'email', id: 'email', required: true},
        { label: 'Contato', type: 'header'},
        { label: 'Telefone Fixo:', type: 'tel', id: 'telefoneFixo'},
        { label: 'Celular:', type: 'tel', id: 'celular', required: true},
        { label: 'Endereço', type: 'header'},
        { label: 'CEP:', type: 'text', id: 'cep', required: true},
        { label: 'Rua:', type: 'text', id: 'rua', required: true},
        { label: 'Número:', type: 'text', id: 'numero', required: true},
        { label: 'Bairro:', type: 'text', id: 'bairro', required: true},
        { label: 'Complemento:', type: 'text', id: 'complemento'},
        { label: 'Referência:', type: 'text', id: 'referencia'},
        { label: 'Cidade:', type: 'text', id: 'cidade', required: true},
        { label: 'Entendo que tal solicitação se trata de um pré-cadastro para a solicitação do serviço. Sabendo que será necessário comparecer a uma de nossas lojas para efetivar a contratação.', type: 'checkbox', id: 'confirmacao', required: true}
    ];

    campos.forEach(function (campo) {
        if (campo.type === 'header') {
            var header = document.createElement('h3');
            header.textContent = campo.label;
            formulario.appendChild(header);
        } else {
            var label = document.createElement('label');
            label.textContent = campo.label;

            var input;

            if (campo.type === 'radio') {
                input = document.createElement('div');
                campo.options.forEach(function (option) {
                    var radio = document.createElement('input');
                    radio.type = 'radio';
                    radio.name = campo.name;
                    radio.value = option;

                    var optionLabel = document.createElement('label');
                    optionLabel.textContent = option;

                    input.appendChild(radio);
                    input.appendChild(optionLabel);
                });
            } else if (campo.type === 'checkbox') {
                input = document.createElement('input');
                input.type = 'checkbox';
                input.id = campo.id;
                input.required = true;
            } else {
                input = document.createElement('input');
                input.type = campo.type;
                input.id = campo.id;
                if (campo.required) {
                    input.required = true;
                }
            }

            formulario.appendChild(label);
            formulario.appendChild(input);
            formulario.appendChild(document.createElement('br'));
        }
    });

    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Enviar';
    formulario.appendChild(submitButton);

    var divFormulario = document.getElementById('formularioContainer');
    divFormulario.innerHTML = '';
    divFormulario.appendChild(formulario);

    var popup = document.getElementById('popupFormulario');
    popup.style.display = 'block';

    formulario.addEventListener('submit', function(event) {
        var confirmacaoCheckbox = document.getElementById('confirmacao');
        if (!confirmacaoCheckbox.checked) {
            alert('Por favor, confirme que você entende os termos antes de enviar o formulário.');
            event.preventDefault();
        }
    });
}

function fecharPopupFormulario() {
    var popup = document.getElementById('popupFormulario');
    popup.style.display = 'none';
}

// FORMATAR CEP:

function formatarCEP(input) {
    var cep = input.value.replace(/\D/g, '');
    if (cep.length === 8) {
        cep = cep.substring(0, 5) + '-' + cep.substring(5);
        input.value = cep;
    }
}