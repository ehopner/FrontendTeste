console.log("Hello tech insiders");
console.log("Hoje é dia de javascript");

//var idade = prompt("Digite sua idade");
//console.log("Minha idade é de: " + idade);

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}

function cadastroPessoa() {

    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let entrada = {
        "nome" : nome,
        "telefone" : telefone
    }


    // myHeaders.append('Content-Type', 'image/jpeg');


    console.log("inicio da funçao carregar dados")
    //Verbos HTTP
    // GET --> Recuperar itens
    // POST --> Enviar novos itens
    // PUT --> Atualizacao de itens pre existentes
    // DELETE --> Remove itens existentes
    const options = {
        method: "POST",
        body: entrada
    }

    const url = "https://apibasica.herokuapp.com/pessoas";

    fetch(url, options)
        .then(function (response) {
            if (response.status == 200) {

                response.json()
                    .then(function (json) {
                        document.getElementById("respostaCadastro").innerHTML = "Usuário Cadastrado!"
                    })
                    .catch(function (err) {
                        console.error(err)
                    })

            }
        })
        .catch(function (error) {
            console.error(error)
        })

    console.log("final da funçao carregar dados")

}

