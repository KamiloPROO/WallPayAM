function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            if (data.approveres === false) {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Rejected Transaction Please rectify if you have available balance',
                })
            }else{
 
                window.location.href = URL_API_BASE;
                location.replace("staking.html");
                location.href = "staking.html";

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