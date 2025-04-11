function analiseTecnica() {
    var cepInserido = cepArmazenado;

    var planoResumo = "*Resumo do Plano escolhido:*\n" +
                      "- Roteador Wi-Fi Turbo (incluso, sem cobrança)\n" +
                      "- Instalação (incluso, sem cobrança)\n" +
                      "- Suporte 24h, todos os dias\n" +
                      "- Clube Certo, o clube de vantagens da KONNET\n" +
                      "- ExitLag\n" +
                      "- Tocalivros\n" +
                      "- Deezer\n" +
                      "- Plano de 1000MB fibra óptica\n" +
                      "- Valor mensal de R$149,90\n";

    var mensagem = encodeURIComponent(`Olá, vim pelo site da KONNET Telecom. Gostaria de verificar a disponibilidade de instalação no meu endereço, CEP: ${cepInserido}.\n\n${planoResumo}`);

    var numeroTelefone = '40034088';
    var linkWhatsapp = 'https://wa.me/' + numeroTelefone + '?text=' + mensagem;

    window.open(linkWhatsapp, '_blank');
}