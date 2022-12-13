document.addEventListener('DOMContentLoaded', e => {

    var idcfLogin = localStorage.getItem("idCfLogin");
    var tokenLogin = localStorage.getItem("tokenLogin");
    var loading = document.getElementById('cargando2');
    

    $.ajax({
        type: "GET",
        url: "http://52.175.225.67:8094/Api/GetComprasHtml",
        data: { "IdCf": idcfLogin, "Token": tokenLogin , "Skip": 1 , "Take":30},
        success: function (data) {
 
            loading.style.display = 'none'
            var formData = JSON.parse(data);

            for ( const compras of formData) {
                
                var formData1 = JSON.parse(compras.Json);
                
                console.log(formData1);

                console.log(formData1.TextColorHeader);
                
                const productList = document.getElementById("product-list");
                const element = document.createElement("div")
         
                element.innerHTML += `
                <div class="planess">
                <div class="cardInversion" id="plan2">
                    
                    <div>
                      <br>
                      <div style="display: flex">
                      <h3 style="color: ${formData1.ColorEstado}">${formData1.Estado}</h3>
                      <b style="width: 90px; margin-left: 70px; ">${formData1.Fecha}</b>
                      </div>
                      <br>
                      <br>
                      <h3 style="margin-left: 0px; color: ${formData1.ColorExplicacion} ;">${formData1.Explicacion}</h3>
                      <br>
                      <h3>${formData1.HtmlHeader}</h3>
                      <h3 style="margin-left: -260px; color: red ;">${formData1.HtmlBody}</h3>
                      <b style="margin-left: -230px; color: ${formData1.TextColorBody2};">${formData1.HtmlBody2}</b>
                    </div>
                
                </div>
              </div>
             `;
         
             productList.appendChild(element)
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

})