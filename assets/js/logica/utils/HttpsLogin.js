function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {


            var formData = JSON.parse(data);
            console.log(formData);


            const idcfLogin = formData.IdCf;
            const tokenLogin = formData.Token;
            const idPersonaLogin = formData.Id;
            const name = formData.Nombres; 

            if (formData.Response === 707) {

                localStorage.setItem("idPersonaLogin",idPersonaLogin);
                localStorage.setItem("idCfLogin", idcfLogin);
                localStorage.setItem("tokenLogin", tokenLogin);
                localStorage.setItem("NombreUser", name);
                window.location.href = URL_API_BASE;
                location.replace("micuenta.html");
                location.href = "micuenta.html";

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario o Contraseña Incorrectas',

                })
            }



        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
}