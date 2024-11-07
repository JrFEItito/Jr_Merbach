// Aqui, eu estou querendo dizer que vou pegar um elemento do html que se chama last-one
const myObserver = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('show')
        } else {
            entrada.target.classList.remove('show')
        }
    })
})

// O querySelectorAll vai buscar TODOS os elementos que possuem a classe hidden
const elements = document.querySelectorAll(".hidden")

// O forEach vai observar todos os elementos que contém a classe do hidden (e no caso, esses elementos estão sendo passados na const elements)
elements.forEach((element) => myObserver.observe(element))