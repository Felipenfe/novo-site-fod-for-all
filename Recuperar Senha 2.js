// RecuperarSenha2.js

// Seleciona o botão de verificação e o campo de entrada de código
const verifyButton = document.getElementById('verify-button');
const codeInput = document.getElementById('code-input');

// Adiciona um evento de clique ao botão
verifyButton.addEventListener('click', function() {
    const code = codeInput.value;

    // Verifica se o código tem 8 dígitos
    if (code.length === 8) {
        console.log('Código verificado com sucesso.');

        // Redireciona para a página de redefinição de senha
        window.location.href = 'Recuperar Senha 3.html';
    } else {
        alert('Código incorreto. Por favor, tente novamente.');
    }
});
