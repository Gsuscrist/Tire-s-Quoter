
const conexion = require('./conexion');

class producto{
    constructor( id, imagen, modelo, medida, rC, rV, uso, cantidad, precio){
        this.id=id;
        this.imagen=imagen;
        this.modelo=modelo;
        this.medida=medida;
        this.rC=rC;
        this.rV=rV;
        this.uso=uso;
        this.cantidad=cantidad;
        this.precio=precio;
    }
}

class Nodo{
    constructor(llave, obj){
        this.llave = llave
        this.obj = obj

        this.der = null
        this.izq = null
    }
}


class Tree {
    constructor() {
        this.raiz = null
    }

    isEmpty() {
        return this.raiz === null
    }

    Agregar(llave, obj) {
        // arbol no tiene elementos
        if (this.isEmpty()) {
            this.raiz = new Nodo(llave, obj);
            return;
        }

        var aux = this.raiz;

        while (aux) {
            // vamos hacia la izquierda
            if (llave < aux.llave) {
                if (aux.izq) {
                    aux = aux.izq;
                } else {
                    aux.izq = new Nodo(llave, obj);
                    return;
                }
            } else { // vamos hacia la derecha
                if (aux.der) {
                    aux = aux.der;
                } else {
                    aux.der = new Nodo(llave, obj);
                    return;
                }
            }
        }
    }



    Buscar(llave) { //! funcion de busqueda
        if (this.isEmpty()) {
            return null
        }

        var aux = this.raiz
        if (aux.llave === llave) {
            return aux
        }

        while (aux) {
            // si encontramos el nodo con el valor
            // paramos de iterar.
            if (aux.llave === llave) {
                break
            }
            // seguimos buscando a la derecha
            if (aux.llave < llave) {
                aux = aux.der
            } else if (aux.llave > llave) {
                // seguimos buscando a la izquierda
                aux = aux.izq
            }
        }
        // retornamos el nodo encontrado.
        // si no encontramos el nodo con el valor
        // aux, toma el valor null.
        return aux
    }

    Encontrando(Nodo = this.raiz) { //* funcion que ayuda a delete()
        if (!this.isEmpty()) {
            /**
             * siempre a la izquierda de cualquier nodo
             * estará el menor valor.
             * iteramos hasta el último menor.
             */
            while (Nodo.izq) {
                Nodo = Nodo.izq
            }
            return Nodo
        }
    }

    Borrar(llave, Nodo = this.raiz) { //! funcion de eliminar
        if (!Nodo) {
            return null
        }
        if (Nodo.llave === llave) {
            // no tiene hijos
            if (!Nodo.izq && !Nodo.der) {
                return null
            }
            // no tiene hijo izquierdo
            if (!Nodo.izq) {
                return Nodo.der
            }
            // no tiene hijo derecho
            if (!Nodo.der) {
                return Nodo.izq
            }

            // tiene dos hijos
            // buscamos el menor de los hijos
            var temp = this.Encontrando(Nodo.der)
            // con ese valor reemplazamos el valor del nodo que queremos eliminar.
            Nodo.llave = temp.llave;
            // seguimos iterando para reemplazar la rama que cambio,
            // eliminando el nodo que está repetido
            Nodo.der = this.Borrar(temp.llave, Nodo.der)
            return Nodo;
        }
        // buscamos a la derecha
        if (Nodo.llave < llave) {
            Nodo.der = this.Borrar(llave, Nodo.der)
            return Nodo
        }
        // buscamos a la izquierda
        if (Nodo.llave > llave) {
            Nodo.izq = this.Borrar(llave, Nodo.izq)
            return Nodo
        }
    }
 //! funciones para la imprension en consola
 print(Nodo = this.raiz) {
    if (!Nodo) {
        return
    }
    this.print(Nodo.izq)
    console.log('llave: ' + Nodo.llave + '\n\t', Nodo.obj)
    this.print(Nodo.der)
}
/**
 * recorre primero toda la rama izquierda
 * de izquierda al centro.
 * Luego imprime la raíz, y finalmente
 * recorre la rama derecha, del centro hacia
 * la derecha.
 */
inOrder(Nodo = this.raiz) {
    if (!Nodo) {
        return;
    }
    this.inOrder(Nodo.izq);
    console.log('llave: ' + Nodo.llave + '\n\t', Nodo.obj);
    datos.push(Nodo);
    imagen.push(Nodo.obj.imagen);
    id.push(Nodo.obj.id);
    marca.push(Nodo.llave);
    modelo.push(Nodo.obj.modelo);
    medida.push(Nodo.obj.medida);
    rango_carga.push(Nodo.obj.rC);
    rango_vel.push(Nodo.obj.rV);
    uso.push(Nodo.obj.uso);
    precio.push(Nodo.obj.precio);
    cantidad.push(Nodo.obj.cantidad);


    this.inOrder(Nodo.der);
}

}


var tree =new Tree();

let datos=[];
let imagen=[];
let id=[];
let marca=[];
let modelo=[];
var medida=[];
let rango_carga=[];
let rango_vel=[];
let uso=[];
let precio=[];
let cantidad=[];

function home(){
    //accion de limpieza de tabla
    const $elemento = document.querySelector("#table");
    $elemento.innerHTML=`<table class="table" id="table">
    <th class="column" id="imagen"></th>
    <th class="column" id="marca">Marca</th>
    <th class="column" id="modelo">Modelo</th>
    <th class="column" id="medida">Medida</th>
    <th class="column" id="cw">Rango de Carga</th>
    <th class="column" id="cv">Rango de Velocidad</th>
    <th class="column" id="uso">Tipo de Uso</th>
    <th class="column" id="precio">Precio</th>
    <th class="column" id="cant"> Cantidad</th>
    <th class="column" id="opc"> Opciones</th>
</table>`;
    //metodo de busqueda y organizacion
    $query = `select *from llanta;`
    let tablaR = document.getElementById("table");

    conexion.query($query, function (err, rows) {

        if (err) {
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            if(rows.length===0){
                alert("Producto no encontrado")
            }else{
                for(i=0;i<rows.length;i++){
                    tree.Agregar(rows[i].marca, new producto(rows[i].id_llanta, rows[i].imagen, rows[i].modelo, rows[i].medida, rows[i].rango_carga, rows[i].rango_vel, rows[i].uso, rows[i].cantidad, rows[i].precio))
                }
                tree.inOrder();
                for(i=0;i<datos.length;i++){
                    //aca creas las columnas
                    var newRow = tablaR.insertRow(-1);
                    var celdaimg = newRow.insertCell(0)
                    var celdamarca = newRow.insertCell(1);
                    var celdamodelo = newRow.insertCell(2);
                    var celdamedida = newRow.insertCell(3);
                    var celdarangoW = newRow.insertCell(4);
                    var celdarangoV = newRow.insertCell(5);
                    var celdauso = newRow.insertCell(6);
                    var celdaprecio = newRow.insertCell(7);
                    var celdacant = newRow.insertCell(8);
                    var celdaopc = newRow.insertCell(9);
                    //aca dices la informacion
                    var txtimg = `<img class="size" src="${imagen[i]}">`;
                    var txtmarca = document.createTextNode(marca[i]);
                    var txtmodelo = document.createTextNode(modelo[i]);
                    var txtmedida = document.createTextNode(medida[i]);
                    var txtrangoW = document.createTextNode(rango_carga[i]);
                    var txtrangoV = document.createTextNode(rango_vel[i]);
                    var txtuso = document.createTextNode(uso[i]);
                    var txtprecio = document.createTextNode(precio[i]);
                    var txtcant = `<input class="merchcant" id="txtMerch${id[i]}" type="text" placeholder="nueva cantidad">`;
                    var txtopc =`<button id="btnver" class="bttnsee" value="${id[i]}">Actualizar</button>`
                    //aca dices que poner y donde
                    celdaimg.innerHTML+=txtimg;
                celdamarca.appendChild(txtmarca);
                celdamodelo.appendChild(txtmodelo);
                celdamedida.appendChild(txtmedida);
                celdarangoW.appendChild(txtrangoW);
                celdarangoV.appendChild(txtrangoV);
                celdauso.appendChild(txtuso);
                celdaprecio.appendChild(txtprecio);
                celdacant.innerHTML+=txtcant;
                celdaopc.innerHTML+=txtopc;
                }

            }

            var boton=document.querySelectorAll('.bttnsee')
                boton.forEach(el=>{
                    el.addEventListener('click',(e)=>{
                        console.log(e.target.value);
                        localStorage.setItem("product", JSON.stringify(e.target.value));
                        var newcant=document.getElementById(`txtMerch${e.target.value}`).value
                        alert(newcant)

                        $query=`UPDATE llanta SET cantidad=${newcant} WHERE id_llanta=${e.target.value}`
                        conexion.query($query, function(err, rows){
                            if(err){
                                console.log("error en el query");
                                console.log(err);
                            }else{
                                console.log("actualizacion exitosa");
                                alert("Actualizacion exitosa");
                            }
                        })
                  
                    })
    
                })
        }
    });
}
