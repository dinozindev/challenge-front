

document.addEventListener("DOMContentLoaded", function() {
    const senhaInput = document.getElementById("senha");
    const confirmaSenhaInput = document.getElementById("ConfirmaSenha");

    function validarConfirmaSenha() {
        const senha = senhaInput.value;
        const confirmaSenha = confirmaSenhaInput.value;

        if (senha !== confirmaSenha) {
            confirmaSenhaInput.setCustomValidity("As senhas não coincidem.");
        } else {
            confirmaSenhaInput.setCustomValidity("");
        }
    }

    confirmaSenhaInput.addEventListener("input", validarConfirmaSenha);


});

function HideClear(){
    let hideeye = document.getElementById("Eye1");
    hideeye.classList.toggle("some")
    
    let senhaInput = document.getElementById('senha');
    if (senhaInput.type == "password"){
        senhaInput.type = "text";
    }
    else{
        senhaInput.type = "password";
    }

    let olhoClear = document.getElementById("Eye2");
    Eye2.classList.toggle("olhoCortado");

}




function HideClear2(){
    let tiraOlhoCortado = document.getElementById("OlhoConfirmaSenha");
    tiraOlhoCortado.classList.toggle("some")
    

    let olhoSemCorte = document.getElementById("OlhoConfirma2");
    olhoSemCorte.classList.toggle("aparece");

    let senhaInput = document.getElementById('ConfirmaSenha');
    if (senhaInput.type == "password"){
        senhaInput.type = "text";
    }
    else{
        senhaInput.type = "password";
    }


}
