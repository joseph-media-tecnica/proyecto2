function validateform() {
    const usarname = document.getElementById("usarname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;

    document.getElementById("name-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("passwor-error").innerHTML = "";
    document.getElementById("password2-error").innerHTML = "";

    let isvalid = true;

    if (username === "") {
        document.getElementById("name-error").innerHTML = "Usuario no puede estar vacio"
        isvalid = false;
    }

    if (email === "") {
        document.getElementById("email-error").innerHTML = "Email no puede estar vacio"
        isvalid = false;
    }

    if (password === "") {
        document.getElementById("password-error").innerHTML = "Contraseña no puede estar vacio"
        isvalid = false;
    }

    if (password2 === "") {
        document.getElementById("password-error").innerHTML = "Confirmar contraseña no puede estar vacio"
        isvalid = false;
    }

    return isvalid;

}
