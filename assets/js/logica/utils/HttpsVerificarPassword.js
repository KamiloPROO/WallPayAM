function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

       

            const metaData = JSON.parse(data)
            console.log(metaData);

            if (metaData.Response === 707){

                Swal.fire({
                    icon: 'success',
                    title: 'Confirmed',
                    text: 'we have successfully updated your password',
                }).then((result) => {
                    if(result.isConfirmed){
                        window.location.href = URL_API_BASE;
                        location.replace("sinIn.html");
                        location.href ="sinIn.html";   
                    }   
                })

            }else{

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario no existe',
                })

            }


        },
        error: function () {
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'server under maintenance',
            })
        }
    });
}