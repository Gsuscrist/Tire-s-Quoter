const conexion = require('./conexion');

const registrar=()=>{
var email=document.getElementById("txtMail").value;
var user= document.getElementById("txtUser").value;
var pass = document.getElementById("txtPass").value;
var rcpass = document.getElementById("txtPassR").value;

if(pass==rcpass){
    $query=`INSERT INTO usuario(email, user_name, contraseña) VALUES('${email}','${user}','${pass}')`;
    conexion.query($query, function(err){
        if(err){
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            alert("Registro exitoso.")
            window.location.href="home.html";
        }
    });
}else{
    alert("Las contraseñas no Coincide");
}

}

const inicioSesion=()=>{
    var user = document.getElementById("txtmail").value;
    var pass = document.getElementById("txtpssw").value;

    $query = `select *from usuario where email ='${user}';`
    conexion.query($query, function (err, rows) {
        if(err){
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            if(rows.length===0){
                alert("Usuario y/o Contraseña invalidos")}
                else{

                    if(pass===rows[0].contraseña){
                        alert("Bienvenido");
                        //aca hay que poner un if es gerente o no pa saber pa donde ir
                        if(user==="palmas.gerente@avante.com.mx"){
                            //pendiente agregar hoja pal gerente
                            window.location.href="home-gerente.html"
                        }else{
                            localStorage.setItem("usuario",JSON.stringify(rows[0].id_usuario))
                            window.location.href="home.html";
                        }
                    }else{
                        alert("Usuario y/o Contraseña invalido(s)")
                    }
                }
        }
    })

}
