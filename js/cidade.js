document.addEventListener('DOMContentLoaded', function () {
    var cidades = [
        { nome: "Alpercata - MG", tipoConexao: "Fibra Óptica" },
        { nome: "Baguari - MG", tipoConexao: "Rádio" },
        { nome: "Barra do Cuieté - MG", tipoConexao: "Fibra Óptica" },
        { nome: "Conselheiro Pena - MG", tipoConexao: "Fibra Óptica" },
        { nome: "Frei Inocêncio - MG", tipoConexao: "Rádio" },
        { nome: "Governador Valadares - MG", tipoConexao: "Fibra Óptica" },
        { nome: "Ipatinga - MG", tipoConexao: "Fibra Óptica" },
        { nome: "Periquito - MG", tipoConexao: "Rádio" },
        { nome: "Pontal - MG", tipoConexao: "Rádio" },
        { nome: "Resplendor - MG", tipoConexao: "Fibra Óptica" },
        { nome: "São José do Itueto - MG", tipoConexao: "Rádio" }
    ];

    var buscaCidade = document.getElementById('busca-cidade');
    var resultadoBusca = document.getElementById('resultado');
    var mensagemErro = document.getElementById('mensagem-erro');
    var limparBuscaBtn = document.getElementById('limpar-busca');
    var cidadeSelecionadaElement = document.getElementById('cidadeSelecionada');

    mostrarResultado(cidades);

    buscaCidade.addEventListener('input', function () {
        var query = buscaCidade.value.toLowerCase();
        var matchingCidades = cidades.filter(function (cidade) {
            return cidade.nome.toLowerCase().includes(query);
        });

        mostrarResultado(matchingCidades);
    });

    limparBuscaBtn.addEventListener('click', function () {
        buscaCidade.value = '';
        mostrarResultado(cidades);
    });

    function mostrarResultado(resultado) {
        resultadoBusca.innerHTML = '';
    
        if (resultado.length === 0) {
            mensagemErro.textContent = 'Cidade fora da área de cobertura';
        } else {
            mensagemErro.textContent = '';
            var cidadeSelecionada = localStorage.getItem('cidadeSelecionada') || resultado[0].nome;
            localStorage.setItem('cidadeSelecionada', cidadeSelecionada);
    
            var cidadeSelecionadaElement = document.getElementById('cidadeSelecionada');
    
            resultado.forEach(function (result) {
                var link = document.createElement('a');
                link.textContent = result.nome;
    
                if (result.tipoConexao === "Fibra Óptica") {
                    link.href = '/ofertas-fibra/home-fibra.html';
                } else {
                    link.href = '/ofertas-radio/home-radio.html';
                }
    
                link.addEventListener('click', function () {
                    localStorage.setItem('cidadeSelecionada', result.nome);
                    cidadeSelecionadaElement.textContent = result.nome;
                });
    
                resultadoBusca.appendChild(link);
            });
        }
    }    
});

// LIMPAR BUSCA:
function limparBusca() {
    var buscaCidade = document.getElementById('busca-cidade');
    var resultadoBusca = document.getElementById('resultado');
    var mensagemErro = document.getElementById('mensagem-erro');

    buscaCidade.value = '';
    mensagemErro.textContent = '';
    mostrarResultado(cidades);
}
