function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {
            
            console.log(data);

            var formData = JSON.parse(data);

            if (formData.Response === 302){

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El correo ingresado ya se encuentra registrado',
                    
                })

            }else if (formData.Response === 301){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El numero de celular ya se encuentra registrado',
                    
                })

            }else if (formData.Response === 707){

                Swal.fire({
                    icon: 'success',
                    title: 'Magnificent',
                    text: 'Para ingresar usa tu numero de celular como usuario y como contraseña la que ingresaste',
                }).then((result) => {

                    if(result.isConfirmed){
                        window.location.href = URL_API_BASE;
                        location.replace("sinIn.html");
                        location.href = "sinIn.html";  
                    }   
                })


            }else{

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error al crear la cuenta',
                })

            }



        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo fallo todo")            
        }
    });
}