// EFEITO NAVBAR:

let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-140px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

navbar.style.transition = "top 0.4s ease-in-out";

// CIDADE SELECIONADA:

document.addEventListener('DOMContentLoaded', function () {
    var cidadeSelecionada = localStorage.getItem('cidadeSelecionada');
    var cidadeElement = document.querySelector('.principalNav-conteudo-ladoDireito-cidade');

    if (cidadeSelecionada && cidadeElement) {
        cidadeElement.textContent = cidadeSelecionada;
    }
});

// BOTÃO DE VOLTAR AO INÍCIO:

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// OCULTAR BENEFÍCIOS

document.addEventListener('DOMContentLoaded', function () {
    const verBeneficios = document.getElementById('verBeneficios');
    const secaoBeneficios = document.querySelector('.secao-beneficios');

    verBeneficios.addEventListener('click', function () {
        if (secaoBeneficios.style.display === 'none') {
            secaoBeneficios.style.display = 'block';
            verBeneficios.textContent = 'Ocultar Benefícios';
        } else {
            secaoBeneficios.style.display = 'none';
            verBeneficios.textContent = 'Ver Benefícios';
        }
    });
});

// EFEITO SCROLL DA SEÇÃO PLANOS:

let planosScroll = document.getElementById('planosScroll');
let clicado = false;
let posicaoInicial = 0;
let scrollInicial = 0;

planosScroll.addEventListener('mousedown', function (e) {
    clicado = true;
    posicaoInicial = e.clientX;
    scrollInicial = planosScroll.scrollLeft;
    planosScroll.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function (e) {
    if (!clicado)
        return;
    let deslocamento = posicaoInicial - e.clientX;
    planosScroll.scrollLeft = scrollInicial + deslocamento;
});

document.addEventListener('mouseup', function () {
    clicado = false;
    planosScroll.style.cursor = 'grab';
});

// NAVEGAÇÃO ENTRE OS DESTAQUES:

document.addEventListener("DOMContentLoaded", function () {
    const divAtualElement = document.getElementById(`destaque1`);
    divAtualElement.style.display = 'flex';
});

let divAtual = 1;
const quantidadeDivs = 3;

function anteriorDiv() {
    const divAtualElement = document.getElementById(`destaque${divAtual}`);
    divAtualElement.style.display = 'none';

    divAtual = (divAtual - 2 + quantidadeDivs) % quantidadeDivs + 1;
    const proximaDivElement = document.getElementById(`destaque${divAtual}`);
    proximaDivElement.style.display = 'flex';
}

function proximaDiv() {
    const divAtualElement = document.getElementById(`destaque${divAtual}`);
    divAtualElement.style.display = 'none';

    divAtual = (divAtual % quantidadeDivs) + 1;
    const proximaDivElement = document.getElementById(`destaque${divAtual}`);
    proximaDivElement.style.display = 'flex';
}

// NAVEGAÇÃO ENTRE OS PLANOS:

document.querySelector('.left').addEventListener('click', function () {
    document.querySelector('.planos-conteudo-cards').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

document.querySelector('.right').addEventListener('click', function () {
    document.querySelector('.planos-conteudo-cards').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('.planos-conteudo-cards');
    const leftButton = document.querySelector('.btn-navegacao.left');
    const rightButton = document.querySelector('.btn-navegacao.right');

    function showButtons() {
        leftButton.style.opacity = '1';
        rightButton.style.opacity = '1';
    }

    function hideButtons() {
        leftButton.style.opacity = '0';
        rightButton.style.opacity = '0';
    }

    cardsContainer.addEventListener('mouseenter', showButtons);
    cardsContainer.addEventListener('mouseleave', hideButtons);

    leftButton.addEventListener('mouseenter', showButtons);
    rightButton.addEventListener('mouseenter', showButtons);

    leftButton.addEventListener('mouseleave', hideButtons);
    rightButton.addEventListener('mouseleave', hideButtons);
});