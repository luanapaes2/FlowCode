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


function Cadastrar() {
  window.location = "cadastro.html";
}

function Entrar() {
  window.location = "tela-arquivos.html";
}
  