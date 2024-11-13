// Seleciona a imagem e o checkbox
const checkbox = document.getElementById('zoom_img');
const img = document.querySelector('.imgProdutos');

// Ouve quando a animação termina
img.addEventListener('animationend', () => {
    // Se a imagem estiver marcada para desaparecer, esconde-a permanentemente
    if (checkbox.checked) {
        img.classList.add('hidden');
    }
});
