 
function clicarNoBotao(){
    var email = document.getElementById("campo-email").value
    var senha = document.getElementById("campoSenha").value

    document.getElementById("campo-email").classList.remove("input-error")
    document.getElementById("campoSenha").classList.remove("input-error")


    if(email === ""){
        //document.getElementById('campo-email').style = "border-color: red"
        document.getElementById("campo-email").classList.add("input-error")
    }else if(senha === ""){
        document.getElementById("campoSenha").classList.add("input-error")
 
    }else{
        document.getElementById("button-loggin").disabled = true
        document.getElementById("button-loggin").style.opacity = 0.5
        document.getElementById("button-loggin").innerText = "Logando ..."
    }
   
    window.location.href = "./feed.html"
}

 