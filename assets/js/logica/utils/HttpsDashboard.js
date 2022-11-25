document.addEventListener('DOMContentLoaded', e => {

    var numUser = localStorage.getItem("NombreUser");

    const nombre = document.getElementById("name");

    nombre.textContent = numUser;

    // $.ajax({
    //     type: "POST",
    //     url: "http://52.175.225.67:8059/api/stake/listaStakes",
    //     data: { "ID_USUARIO": idLogin },
    //     success: function (data) {


    //         console.log(data);

    //         for (const datos of data){

    //             const productList = document.getElementById("product-list");
    //             const element = document.createElement("div")
         
    //             element.innerHTML += `
    //             <div class="planess">
    //             <div class="cardInversion" id="plan2">
                    
    //                 <div class="">
    //                   <h3 style="color: #d79d13">STAKING</h3>
    //                   <br>
    //                   <h3>Fecha Inicial</h3>
    //                   <h3>${datos.FECHAINICIAL}</h3>
    //                   <br>
    //                   <h3>Fecha Final</h3>
    //                   <h3>${datos.FECHAFINAL}</h3>
    //                   <br>
    //                   <h3 style="background-color: rgb(247, 143, 7); width: 20%; margin-left: 40%">WPAY</h3>
    //                   <h3 style="color: #d79d13">${datos.VALOR}</h3>
    //                   <br>
    //                   <button type="button" class="btnCamiloStake correrBtn" id="copiarDireccion">UnStake</button>
    //                 </div>
                
    //             </div>
    //           </div>
    //          `;
         
    //          productList.appendChild(element)
    //      }

    //     },
    //     error: function () {
    //         alert("Ha ocurrido un error, por favor vuelva a intentarlo")
    //     }
    // });

})
