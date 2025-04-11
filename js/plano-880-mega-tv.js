function analiseTecnica() {
    var cepInserido = cepArmazenado;

    var planoResumo = "*Resumo do Plano escolhido:*\n" +
                      "- Roteador Wi-Fi Plus (incluso, sem cobrança)\n" +
                      "- Instalação (incluso, sem cobrança)\n" +
                      "- Suporte 24h, todos os dias\n" +
                      "- Clube Certo, o clube de vantagens da KONNET\n" +
                      "- KONNET TV\n" +
                      "- Tocalivros\n" +
                      "- Deezer\n" +
                      "- Plano de 880MB fibra óptica\n" +
                      "- Valor mensal de R$129,90\n";

    var mensagem = encodeURIComponent(`Olá, vim pelo site da KONNET Telecom. Gostaria de verificar a disponibilidade de instalação no meu endereço, CEP: ${cepInserido}.\n\n${planoResumo}`);

    var numeroTelefone = '40034088';
    var linkWhatsapp = 'https://wa.me/' + numeroTelefone + '?text=' + mensagem;

    window.open(linkWhatsapp, '_blank');
}