console.log("Hello tech insiders");
console.log("Hoje é dia de javascript");

function loginBackend() {
    let credenciais = {
        "funcional": document.getElementById("login").value,
        "password": document.getElementById("password").value
    }

    console.log("inicio da conexao com backend")

    const options = {
        method: "POST",
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        // },
        body: JSON.stringify(credenciais)
    }

    const url = "https://bend-byte.herokuapp.com/login";
    fetch(url, options)
        .then(function (response) {
            if (response.status == 200) {

                for (var pair of response.headers.entries()) {
                if (pair[0] == "Authorization") {
                    this.setState({token: pair[1]})
                }
                }

            }
        })
        .catch(function (error) {
            console.error(error)
        })

    console.log("final da funçao carregar dados")



function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}
}
