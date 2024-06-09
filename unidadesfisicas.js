function unidadesfisicas() {
    var Produto = document.getElementById("Produto");

    // Verificar se os elementos foram encontrados
    if (!Produto || !Quantidade || !Local) {
        alert("Alguns campos não foram encontrados. Verifique os IDs dos elementos.");
        return;
    }

    ...
}
