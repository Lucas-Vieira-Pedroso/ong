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
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;

    if(nome.length < 3) return alert("Nome Inválido");
    if(idade < 18) return alert("Você ainda não pode adotar um cachorro");
    if(telefone.length < 8) return alert("Numero de telefone inválido");
    if(motivo.length < 10) return alert("Melhore o motivo");


    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});
const moradia = document.getElementById("moradia");
const permissaoap = document.getElementById("permissaoap");
const permissaocasa = document.getElementById("permissaocasa");
const quintals = document.getElementById("quintals");
const quintaln = document.getElementById("quintaln");

function sim(){
    if(moradia.value === "apartamento"){
        permissaoap.classList.remove("hidden");      
    } else {
        permissaoap.classList.add("hidden");
    }
    if(moradia.value === "casa" && quintals.checked){
        permissaocasa.classList.remove ("hidden");
    } else {
        permissaocasa.classList.add("hidden");
    }
}
moradia.addEventListener("change", sim);
quintals.addEventListener("cange", sim);
quintaln.addEventListener("cange", sim);