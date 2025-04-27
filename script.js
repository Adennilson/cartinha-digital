window.onload = function() {
    const carouselImages = document.querySelectorAll('.carousel-img img');
    let currentIndex = 0;
  
    function moveCarousel() {
      carouselImages.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none';
      });
      currentIndex = (currentIndex + 1) % carouselImages.length;
    }
  
    setInterval(moveCarousel, 3000);
  };


const dataInicio = new Date('2024-06-30');

function atualizarCronometro() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const segundos = Math.floor(diferenca / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  const segundosRestantes = segundos % 60;
  const minutosRestantes = minutos % 60;
  const horasRestantes = horas % 24;


  document.getElementById('countdown').innerHTML = `${dias} dias, ${horasRestantes} horas, ${minutosRestantes} minutos e ${segundosRestantes} segundos`;
}

atualizarCronometro();
setInterval(atualizarCronometro, 1000);
