document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confirm-button").addEventListener("click", function () {
        const email = document.getElementById("email-input").value;
        console.log("Botão clicado. E-mail inserido:", email); // Log para depuração
        
        if (email && email.includes("@")) {
            // Recupera o array de e-mails do local storage, ou inicializa um novo array se estiver vazio
            let emails = JSON.parse(localStorage.getItem('userEmails')) || [];
            
            // Adiciona o novo e-mail ao array
            emails.push(email);
            
            // Armazena o array atualizado no local storage
            localStorage.setItem('userEmails', JSON.stringify(emails));
            
            alert('E-mail registrado com sucesso!');
            console.log("E-mails salvos no Local Storage:", emails); // Log para depuração
            
            // Redireciona para a próxima página
            window.location.href = "Recuperar Senha 2.html";
        } else {
            // Exibe uma mensagem de erro
            alert("Por favor, insira um endereço de e-mail válido.");
            console.log("E-mail inválido inserido."); // Log para depuração
        }
    });
});

// Função para acessar os e-mails salvos
function getEmailsFromLocalStorage() {
    const savedEmails = JSON.parse(localStorage.getItem('userEmails')) || [];
    if (savedEmails.length > 0) {
        console.log('E-mails salvos:', savedEmails);
        // Faça algo com os e-mails salvos, se necessário
    } else {
        console.log('Nenhum e-mail salvo no Local Storage.');
    }
}

// Chame essa função onde for necessário para acessar os e-mails salvos
getEmailsFromLocalStorage();

// Seleciona o botão de confirmação e o campo de entrada de e-mail
const confirmButton = document.getElementById('confirm-button');
const emailInput = document.getElementById('email-input');

// Adiciona um evento de clique ao botão
confirmButton.addEventListener('click', function() {
    const email = emailInput.value;

    // Verifica se o e-mail não está vazio
    if (email) {
        // Simula o envio do código para o e-mail
        console.log(`Código enviado para o e-mail: ${email}`);

        // Redireciona para a página de inserção do código
        window.location.href = 'RecuperarSenha2.html';
    } else {
        alert('Por favor, insira um endereço de e-mail válido.');
    }
});

