function cadastroLogin() {
    var Email = document.getElementById("Email");
    var Senha = document.getElementById("Senha");

    // Verificar se os elementos foram encontrados
    if (!Email || !Senha ) {
        alert("Alguns campos não foram encontrados. Verifique os IDs dos elementos.");
        return;
    }

    var dados = JSON.parse(localStorage.getItem("dadosProduto"));

    if (dados == null) {
        dados = [];
    }

    var auxRegistro = {
        email: Email.value,
        senha: Senha.value,
    };

    dados.push(auxRegistro);

    localStorage.setItem("dadosLogin", JSON.stringify(dados));
    alert("Login Realizado");

    window.location.href ="Realização da Doação.html"
    
    // Limpar os campos
    Email.value = "";
    Senha.value = "";
}
