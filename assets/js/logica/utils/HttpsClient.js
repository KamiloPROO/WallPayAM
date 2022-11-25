function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {
                alert("Se registro exitosamente")                
                window.location.reload
                location.replace("https://wallpay.app");
                location.href ='https://wallpay.app';
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}