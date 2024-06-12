// RecuperarSenha2.js

// Seleciona o botão de verificação e o campo de entrada de código
const verifyButton = document.getElementById('verify-button');
const codeInput = document.getElementById('code-input');

// Adiciona um evento de clique ao botão
verifyButton.addEventListener('click', function() {
    const code = codeInput.value;

    // Simula a verificação do código
    if (code === '123456') { // Substitua '123456' pelo código correto para verificação
        console.log('Código verificado com sucesso.');

        // Redireciona para a página de redefinição de senha
        window.location.href = 'Recuperar Senha 3.html';
    } else {
        alert('Código incorreto. Por favor, tente novamente.');
    }
});
