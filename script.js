document.getElementById("formAdocao").addEventListener("submit", function (e){
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let tempo = document.getElementById("tempo").value;
    let motivo = document.getElementById("motivo").value;

    if(nome.length < 3) return alert("Nome Inválido");
    if(idade < 18) return alert("Você ainda não pode adotar um cachorro");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});