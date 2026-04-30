
const formLogin = document.getElementById("formLogin");

if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const mensagem = document.getElementById("mensagemErro");

        mensagem.innerText = "";

        if (email === "admin@solerota.com" && senha === "123456") {
            mensagem.style.color = "green";
            mensagem.innerText = "Login realizado com sucesso";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);

        } else {
            mensagem.style.color = "red";
            mensagem.innerText = "Email ou senha incorretos";
        }
    });
}



const campoCep = document.getElementById("cep");

if (campoCep) {
    campoCep.addEventListener("blur", () => {

        const cep = campoCep.value.replace(/\D/g, '');
        const erro = document.getElementById("msgErro");

        if (erro) erro.innerText = "";

        if (cep.length !== 8) {
            if (erro) erro.innerText = "CEP inválido";
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(dados => {

                if (dados.erro) {
                    if (erro) erro.innerText = "CEP não encontrado";
                    return;
                }

                document.getElementById("rua").value = dados.logradouro;
                document.getElementById("bairro").value = dados.bairro;
                document.getElementById("cidade").value = dados.localidade;
                document.getElementById("estado").value = dados.uf;

            })
            .catch(() => {
                if (erro) erro.innerText = "Erro ao buscar CEP";
            });
    });
}



const formCadastro = document.getElementById("formCadastro");

if (formCadastro) {
    formCadastro.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nomeCad").value;
        const email = document.getElementById("emailCad").value;
        const cep = document.getElementById("cep").value;
        const senha = document.getElementById("senhaCad").value;

        const erro = document.getElementById("msgErro");
        const sucesso = document.getElementById("msgSucesso");

        if (erro) erro.innerText = "";
        if (sucesso) sucesso.innerText = "";

        
        if (!nome || !email || !cep || !senha) {
            if (erro) erro.innerText = "Preencha todos os campos!";
            return;
        }

        const usuario = {
            nome,
            email,
            cep
        };

        console.log("Usuário cadastrado:", usuario);

        if (sucesso) {
            sucesso.innerText = "Cadastro realizado com sucesso!";
        }
    });
}