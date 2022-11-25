function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "GET",
        url: url,
        data: jsonArgs,
        success: function (data) {

          console.log(data);

          var formData = JSON.parse(data);

        console.log(formData);

              if (formData.Response === 707 ){
                
                window.location.href = URL_API_BASE;
                location.replace("Wallet.html");
                location.href ="Wallet.html";
                

              }else{
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'No pudimos crear tu cuenta',
                })
              };
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}