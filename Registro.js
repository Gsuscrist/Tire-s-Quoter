const conexion = require('./conexion');

const agregar=()=>{
var email=document.getElementById("txtMail");
var user= document.getElementById("txtUser");
var pass = document.getElementById("txtPass");
var rcpass = document.getElementById("txtPassR");

if(pass==rcpass){
    $query=`INSERT INTO usuario(email, user_name, contraseña) VALUES('${email}','${user}','${pass}')`;
    conexion.query($query, function(err){
        if(err){
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            alert("Registro exitoso, Inicie Sesion")
        }
    });
}

}

const consulta=()=>{

}
