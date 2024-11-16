// Seleciona o container e a imagem
const container = document.querySelector('.container');
const img = document.querySelector('.imgProdutos');
const bateria = document.querySelector('.bateria'); // Supondo que você tenha a classe para o elemento bateria

// Adiciona o evento de clique na imagem
img.addEventListener('click', (event) => {
    // Adiciona a classe para desaparecer a imagem
    img.classList.add('imgDesaparecendo');

    // Adiciona a classe para desaparecer o container
    container.classList.add('hiddenBox');

    // Após a animação de opacidade, remova o container do layout sem afetar o restante da página
    container.addEventListener('transitionend', () => {
        container.classList.add('hiddenBoxFinal');
    });

    // Diminui a opacidade da bateria (somente para efeito visual)
    bateria.style.opacity = '0';
});
