function login(){
    var user, password
    user = document.getElementById("username").value;
    password = document.getElementById("password").value;
    
    if(user=="Admin" && password=="1234"){
        alert("Iniciaste Sesion")

        window.location=("index_admin.html");
        

    }else if(user=="Delegado" && password=="1234"){
        window.location=("index_delegado.html");

    }else if(user=="Invitado" && password=="1234"){
        window.location=("index_invitado.html");
    }

}

function logout(){
    alert("Has cerrado Sesion")
    window.location=("index_login.html");

}