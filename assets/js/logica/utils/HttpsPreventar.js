function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {


            if (data.ID === 0){

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Rejected Transaction Please rectify if you have available balance',
                }).then((result) => {
                    if(result.isConfirmed){
                        window.location.href = URL_API_BASE;
                        location.replace("preventa.html");
                        location.href ="preventa.html";   
                    }   
                })

            }else{

                window.location.href = URL_API_BASE;
                location.replace("preventa.html");
                location.href = "preventa.html";

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