function CallEndPointPostPublicarVenta(url, jsonArgs) {

    var loading = document.getElementById('cargando')
    loading.style.display = 'flex'

    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {


            const metaData = JSON.parse(data)
            console.log(metaData);

            loading.style.display = 'none'

            if (metaData.Response == 707){

                loading.style.display = 'none'

                Swal.fire({
                    icon: 'success',
                    title: 'Confirmed',
                    text: 'Publication created with success',
                }).then((result) => {
                    if(result.isConfirmed){
                        window.location.href = URL_API_BASE;
                        location.replace("Dash.html");
                        location.href ="Dash.html";   
                    }   
                })

            }else if (metaData.Response == 404 && metaData.ResponseText == "Seleccione otra vez la cuenta de fondos"){
                loading.style.display = 'none'
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Revisa tu cuenta de fondos',
                })
            }else if (metaData.Response == 404 && metaData.ResponseText == "Ocurrio un error al publicar el producto"){
                loading.style.display = 'none'
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Fondos insuficientes',
                })
            }else{
                loading.style.display = 'none'
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'We could not publish your sale check your account or log in again',
                })
            }

        },
        error: function () {
            loading.style.display = 'none'
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'server under maintenance',
            })

            
        }
    });
}