document.addEventListener("DOMContentLoaded", () => {
    const carSection = document.getElementById("carSection");
    const car = document.getElementById("car");
    let animationTriggered = false;
  
    window.addEventListener("scroll", () => {
      const carSectionPosition = carSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
  
      if (carSectionPosition < screenPosition && !animationTriggered) {
        car.classList.add("drift");
  
        // Após a animação de drift, faz o carro aparecer fixo
        setTimeout(() => {
          car.classList.remove("drift");
          car.classList.add("appear");
        }, 2000);
  
        animationTriggered = true;
      }
    });
  });
  