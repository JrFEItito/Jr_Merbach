// Seleciona o container e a imagem
const container = document.querySelector('.container');
const img = document.querySelector('.imgProdutos');

// Adiciona o evento de clique na imagem
img.addEventListener('click', () => {
    // Adiciona a classe para ampliar e desaparecer a imagem
    img.classList.add('imgDesaparecendo');

    // Sincroniza o desaparecimento do container com o da imagem
    container.classList.add('hiddenBox');

    // Após a animação, esconde o container permanentemente
    container.addEventListener('animationend', () => {
        container.classList.add('hiddenBoxFinal');
    });
});
