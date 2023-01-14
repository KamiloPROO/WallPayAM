document.addEventListener('DOMContentLoaded', e => {

    var idCompraS = localStorage.getItem("IdCompraFinal");
    var idCfUser = localStorage.getItem("idCfLogin");
    var idToken = localStorage.getItem("tokenLogin");
    var refeComprar = localStorage.getItem("referenciaComprar");
    var loading = document.getElementById('cargando')


   
    var header = document.getElementById("HtmlHeader");
    var htmlBody2 = document.getElementById("HtmlBody2");
    var imageMeP = document.getElementById("ImgMeP");
    var cantiMaxi = document.getElementById("cantidadMaxima");
    var optionNumRefe = document.getElementById("optionCuenta");
    var medioP = document.getElementById("metodoPagoDes");
  

    // optionNumRefe.textContent = refeComprar;
    

    $.ajax({
        type: "POST",
        url: "https://appwollpay.app/Api/GetDetalleProductoMonedaVentaHtml",
        data: { "Id": idCompraS, "IdCf": idCfUser, "Token": idToken, "so": "android", "IdApp": 2 },
        success: function (data) {

            loading.style.display = 'none'

            var formData = JSON.parse(data);
            console.log(formData);

            optionNumRefe.textContent = refeComprar;

            // const header1 = formData.HtmlHeader;
            // const body2 = formData.HtmlBody2;
            
        //    const limTiempo = formData.TiempoLimite;
           const tasaCambio = formData.TasaCambio;
           const cantMinima = formData.CantidadMinima;
           const cantMaxima = formData.CantidadMaxima;
        //    const cantidadMinima = tasaCambio * cantMinima;
        //    const cantidadMaxima = tasaCambio * cantMaxima;

            //  header.textContent = header1; 
            //  htmlBody2.textContent = body2;

            // tiempo.textContent = limTiempo; 
            // tasaCam.textContent = tasaCambio;
            // cantiMini.textContent = cantidadMinima;
            // cantiMaxi.textContent = cantidadMaxima;
            
           localStorage.setItem("TasaCambioK",tasaCambio);
           localStorage.setItem("CantiMin", cantMinima)
           localStorage.setItem("CantiMax", cantMaxima)

           
           var metPago = formData.MediosPagoHolders[0].Json;

           var metPagoObject = JSON.parse(metPago);
        
          
           const meDescri = metPagoObject.Descripcion;
           const imagenP = metPagoObject.Imagen

        //    imageMeP.textContent = imagenP;
        //    medioP.textContent = meDescri;

        const productList = document.getElementById("product-list");
        const element = document.createElement("div")

        element.innerHTML += `
        <div class="planess">
        <div class="cardInversionMela" id="plan2">
            
           <div style="display: flex">
           <div style="width: 100%">
              <br>
             
              <h3 class="correrHeader" >${formData.HtmlHeader}</h3>
              
              <br>
              <div class="correrBody">
              <b class="diseñoBody"> ${formData.HtmlBody}</b>
              </div>
              
              <div class="correrBody2">
              <b class="diseñoBody2">${formData.HtmlBody2}</b>
              </div>
            </div>
            </div>
            <br>
            <div class="mediosDePago">
                         <h3 class="tituMP">Medios De Pago</h3>
                         <br>
                         <div style="display: flex;">
                            
                         <img src="${imagenP}" style="width: 35px; margin-left: 0px;" class="imagenMeP" >
                          
                         <h2 class="nomMePa">${meDescri}</h2>

                         </div>
                    </div>

        </div>
      </div>
     `;

        productList.appendChild(element)

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
