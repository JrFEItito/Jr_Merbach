const pageContainer = document.querySelector(".container")

//Ao aplicarmos esse smooth: true, e linkando esse sxript lá no html, o scroll do site fica suave
const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true
})