function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {
                
            var formData = JSON.parse(data);
            console.log(formData);
             
            if(formData.Response == 707){

                Swal.fire({
                    icon: 'success',
                    title: 'Solicitud Confirmada',
                    text: 'Se realizó con exito tu solicitud de compra',
                }).then((result) => {
                    if(result.isConfirmed){
                        window.location.href = URL_API_BASE;
                        location.replace("mis_compras.html");
                        location.href ="mis_compras.html";   
                    }   
                })

            }else if (formData.Response == 404){

                Swal.fire({
                    icon: 'error',
                    title: 'Solicitud Rechazada',
                    text: 'Revisa tu cuenta tron o inicia sesion nuevamente',
                }).then((result) => {
                    if(result.isConfirmed){
                        window.location.href = URL_API_BASE;
                        location.replace("Dash.html");
                        location.href ="Dash.html";   
                    }   
                })

            }

        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}