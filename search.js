
const conexion = require('./conexion');


const buscar = () => {
    var medida = document.getElementById("txtSearch").value;
    $query = `select *from llanta where medida ='${medida}';`

    let tablaR = document.getElementById("table");
    conexion.query($query, function (err, rows) {
        if (err) {
            console.log("error en el query");
            console.log(err);
            return;
        }
        else {
            //Lo que se extrae de la BD, queda guardado en ROWS que se vuelve una lista de objetos
            var long = rows.length;//Se obtiene el tamaño de la lista
            for (i = 0; i < long; i++) {//Se utiliza para recorrer la lista
                //cadena += rows[i].id + ' ' + rows[i].nombre +  ' ' + rows[i].contraseña +'\n';//Registro
                var newRow = tablaR.insertRow(-1);
                var celdamarca = newRow.insertCell(0);
                var celdamodelo = newRow.insertCell(1);
                var celdamedida = newRow.insertCell(2);
                var celdarangoW = newRow.insertCell(3);
                var celdarangoV = newRow.insertCell(4);
                var celdauso = newRow.insertCell(5);
                var celdaprecio = newRow.insertCell(6);
                var celdacant = newRow.insertCell(7);

                var txtmarca = document.createTextNode(rows[i].marca);
                var txtmodelo = document.createTextNode(rows[i].modelo);
                var txtmedida = document.createTextNode(rows[i].medida);
                var txtrangoW = document.createTextNode(rows[i].rango_carga);
                var txtrangoV = document.createTextNode(rows[i].rango_vel);
                var txtuso = document.createTextNode(rows[i].uso);
                var txtprecio = document.createTextNode(rows[i].precio);
                var txtcant = document.createTextNode(rows[i].cantidad);

                celdamarca.appendChild(txtmarca);
                celdamodelo.appendChild(txtmodelo);
                celdamedida.appendChild(txtmedida);
                celdarangoW.appendChild(txtrangoW);
                celdarangoV.appendChild(txtrangoV);
                celdauso.appendChild(txtuso);
                celdaprecio.appendChild(txtprecio);
                celdacant.appendChild(txtcant);
            }
            //alert(cadena);

        }
    });
}


const organizar=()=>{

    
}