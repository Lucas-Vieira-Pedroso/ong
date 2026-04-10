document.getElementById("formAdocao").addEventListener("submit", function (e){
    e.preventDefault();

    let c;
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
    let pets = document.getElementById('input[name="pets"]:checked');

    if(nome.length < 3) return alert("Nome Inválido");
    if(idade < 18) return alert("Você ainda não pode adotar um cachorro");
    if(telefone.length < 8) return alert("Numero de telefone inválido");
    if(motivo.length < 10) return alert("Melhore o motivo");
    if(tempo >= 8) return alert("Você tem muito pouco tempo para o seu pet");
    if(pets.value === "sim") return (c = "")
    else (c = "poderá ter acompanhamento com a ONG");


    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});
const moradia = document.getElementById("moradia");
const permissaoap = document.getElementById("permissaoap");
const permissaocasa = document.getElementById("permissaocasa");
const quintals = document.getElementById("quintals").value;
const quintaln = document.getElementById("quintaln");

function sim(){
    if(moradia.value === "apartamento"){
        permissaoap.classList.remove("hidden");      
    } else {
        permissaoap.classList.add("hidden");
    }
    if(moradia.value === "casa"){
        permissaocasa.classList.remove ("hidden");
    } else {
        permissaocasa.classList.add("hidden");
    }
}
moradia.addEventListener("change", sim);
quintals.addEventListener("change", sim);
quintaln.addEventListener("change", sim);