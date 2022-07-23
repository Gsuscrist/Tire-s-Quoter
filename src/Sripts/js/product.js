const conexion = require('./conexion');

var producto =JSON.parse( localStorage.getItem("product"));
var id_llanta;
var marca;
var modelo;
var medida;
var rC;
var rV;
var uso;
var precio;
var imagen;





$query = `select *from llanta where id_llanta='${producto}';`
conexion.query($query, function (err, rows) {
    if (err) {
        console.log("error en el query");
        console.log(err);
        return;
    } else {
        if(rows.length===0){
            
            alert("error 404")
        }else{
            
            let content=`
            <div class="div1">
            <img id="productimg" src="${rows[0].imagen}" alt="imagen del producto">
        </div>
        <div class="div2">
            <h2> ${rows[0].marca} ${rows[0].modelo}</h2><br>
            <h3>${rows[0].medida}</h3>
        </div>
        <div class="div3">
            <label>Descripcion</label>
            <section id=descripcion>
            </section>
            ${"Marca: " +rows[0].marca +"\n"+
            "Medida: " + rows[0].medida+"\n"+
            "Modelo: " +rows[0].modelo+"\n"+
            "Rango de Carga: "+rows[0].rango_carga+"\n"+
            "Rango de Velocidad: "+rows[0].rango_vel+"\n"
        }
            <br><br>
            <label id="stock">Stock disponible</label><br>
            <label>cantidad:</label>
            <select class="selection" id="Select" >
                <option value="">*Cantidad*</option>
                <option value="1">1 pieza</option>
                <option value="2">2 piezas</option>
                <option value="3">3 piezas</option>
                <option value="4">4 piezas</option>
                <option value=""><button>+piezas</button></option>
            </select>
            <label id="inventario"> ${rows[0].cantidad}  piezas disponible</label>
        </div>
        <div class="div4">
            <button type="button" class="bttn" id="bttnAdd" onclick="showSelected()">Agregar al carrito</button>
            <button type="button" class="bttn" id="bttnMark" onclick="addFav()">Marcar como favorito</button>
        </div>
       
            `;

id_llanta=rows[0].id_llanta;
marca=rows[0].marca;
modelo=rows[0].modelo;
medida=rows[0].medida;
rC=rows[0].rango_carga;
rV=rows[0].rango_vel;
uso=rows[0].uso;
precio=rows[0].precio;
imagen=rows[0].imagen


            productview.innerHTML+=content;
        }
    }

});


function showSelected(){
    var cod=document.getElementById("Select").value;
    var usuario= JSON.parse(localStorage.getItem("usuario"));

    $query=`insert into waitlist(id_llanta, marca, modelo, medida, rango_carga, rango_vel, uso, precio, cantidad, id_cliente, imagen)
    Values (${id_llanta}, '${marca}', '${modelo}', '${medida}',${rC},'${rV}','${uso}', ${precio}, ${cod}, ${usuario}, '${imagen}');`;
    conexion.query($query, function(err){
        if(err){
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            console.log("Exito");
            window.location.href="carrito.html";
        }
    })

    
}


function addFav(){
    
    var usuario= JSON.parse(localStorage.getItem("usuario"));
    $query=`insert into wishlist(id_llanta, marca, modelo, medida, rango_carga, rango_vel, uso, precio, id_cliente, imagen)
    Values (${id_llanta}, '${marca}', '${modelo}', '${medida}',${rC},'${rV}','${uso}', ${precio}, ${usuario}, '${imagen}');`;
    conexion.query($query,function(err){
        if(err){
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            console.log("Exito");
            window.location.href="favlist.html";

        }
    })

}


