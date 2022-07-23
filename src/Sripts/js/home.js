const conexion = require('./conexion');




$query = 'select *from llanta;';
conexion.query($query, function (err, rows) {
    if (err) {
        console.log("error en el query");
        console.log(err);
        return;
    }
    else {
        //Lo que se extrae de la BD, queda guardado en ROWS que se vuelve una lista de objetos  

        for (i = 1; i <= 10; i++) {

            let content = `  
    
    <a>
    <div class="div${i}">
    <div> <img class="size" src="${rows[i - 1].imagen}"> </div>
    <div><b><label id="tagMarca" value="${rows[i - 1].marca}">${rows[i - 1].marca}</label><br>
    
    <label id="tagMedida" value="${rows[i - 1].medida}">${rows[i - 1].medida}</label></b>
    <br>
    <br>
    ${"Marca: " + rows[i - 1].marca + "\n" +
                "Medida: " + rows[i - 1].medida + "\n" +
                "Modelo: " + rows[i - 1].modelo + "\n" +
                "Rango de Carga: " + rows[i - 1].rango_carga + "\n" +
                "Rango de Velocidad: " + rows[i - 1].rango_vel + "\n"
                }
<br>
<div>
<button>${"$" + rows[i - 1].precio}</button><br>
<button class="verID" id="bttnver" value="${rows[i - 1].id_llanta}">Ver</button>
</div>   
</div>
    </div>
   </a> ` ;

            list.innerHTML += content;
        }

        //prueba
        var botones = document.querySelectorAll('.verID')
        botones.forEach(el => {
            el.addEventListener('click', (e) => {

                console.log(e.target.value);
                localStorage.setItem("product", JSON.stringify(e.target.value));

                window.location.href = "product.html"
            });
        });

    }
});





/** 
function ver(){
    let producto;
   

    producto = id_llanta.textContent;

        localStorage.setItem("product",JSON.stringify( producto));
        alert(JSON.parse( localStorage.getItem("product")));
        localStorage.clear();
    }
*/


