function BtnCadastrar() {
  window.location = "cadastro.html";
}

function Entrar() {
  window.location.href = "tela-arquivos.html";
}

document.getElementById('olho').addEventListener('mousedown', function() {
document.getElementById('pass').type = 'text';
});

document.getElementById('olho').addEventListener('mouseup', function() {
document.getElementById('pass').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho').addEventListener('mousemove', function() {
document.getElementById('pass').type = 'password';
});



//abre hamburguer
const hamburguerIcon = document.querySelector('.hamburguer');
const sidebar = document.querySelector('.sidebar');

hamburguerIcon.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

//muda a cor da estrela
function changeColor(button) {
  button.classList.toggle("selected");
}

//abre opções - descrição dos cards
document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector(".btnOptions");
  var options = button.querySelector(".options");

  button.addEventListener("click", function() {
      options.style.display = options.style.display === "none" ? "block" : "none";
  });

  options.addEventListener("click", function(event) {
      event.stopPropagation(); // Impede que o clique nas opções feche o menu
  });

  document.addEventListener("click", function() {
      options.style.display = "none"; // Fecha o menu quando qualquer área fora do menu é clicada
  });
});
