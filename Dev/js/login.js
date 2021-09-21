function login(){

    let usuario = document.getElementById ("name").value;
    let contrasena = document.getElementById ("password").value;

    if (usuario == "vendedor" && contrasena=="123456") {
        document.write("Se ha logueado como vendedor")
        window.location="paginaVendedor.html";
    }
    else if (usuario == "admin" && contrasena=="1234") {
        document.write("Se ha logeado como administrador");
        window.location="paginaAdministrador.html";
    }
    else{
        alert("Por favor, verifique los datos ingresados");
    }
}
        