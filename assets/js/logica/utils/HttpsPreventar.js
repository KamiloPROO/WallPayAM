function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            console.log(data);

            var formData = JSON.parse(data);

            console.log(formData);


        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
}