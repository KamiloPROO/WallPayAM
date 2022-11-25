const btnlogin = document.getElementById("IniciarSesionLogin")

btnlogin.addEventListener('click', ()=> {

     const userNomLogin = document.getElementById("UserLogin").value
     const passwordLogin = document.getElementById("PasswordLogin").value

     if ( userNomLogin === null || userNomLogin === ""){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Usuario',
            
        })


     }else if (passwordLogin === null || passwordLogin === ""){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Contraseña',
            
        })


     }else{

        IniciarSesion();

     }

})