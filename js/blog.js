// EFEITO NAVBAR BLOG:

document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    let navbar = document.getElementById("navbarBlog");
    let originalBackgroundColor = window.getComputedStyle(navbar).backgroundColor;

    navbar.style.transition = "top 0.4s ease-in-out, background-color 0.4s ease-in-out";

    window.addEventListener("scroll", function() {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-140px";
        } else {
            navbar.style.top = "0";

            if (scrollTop === 0) {
                navbar.style.transitionDelay = ".4s ease-in-out";
                navbar.style.backgroundColor = originalBackgroundColor;
            } else {
                navbar.style.transitionDelay = "0s";
                navbar.style.backgroundColor = "var(--preto)";
            }
        }
        lastScrollTop = scrollTop;
    });
});

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