function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            console.log(data);

            if (data.ID === 0){

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Rejected Transaction Please rectify if you have available balance',
                    
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