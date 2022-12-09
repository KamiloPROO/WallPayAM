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
                    text: 'We have sent a verification code to your phone number to renew your password',
                }).then((result) => {
                    if(result.isConfirmed){
                        window.location.href = URL_API_BASE;
                        location.replace("verificationCodePassword.html");
                        location.href ="verificationCodePassword.html";   
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