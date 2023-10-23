document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);
function validaFormulario() {
    if (document.getElementById("username").value !== "" && document.getElementById("email").value !== "" && document.getElementById("telefone").value !== "") {
        alert("prontinho!");
    } else {
        alert("Ops! Preencha os campos nome, email e telefone.");
      }
    }
                                         