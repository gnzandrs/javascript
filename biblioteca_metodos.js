// Valida que sean solo numeros ingresados
    
 function validar_numeros(e)
 {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==8) return true;
    patron = /\d/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
} 
 
 
// Valida que sean solo letras ingresadas
 
function validar_letras(e) 
{ 
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==8) return true;
    patron = /\D/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}
 
// Verifica si el rut ingresado es valido 
 
function validar_rut()
{
    var rut = document.getElementById('rut_b');
    var digito = document.getElementById('dv_b');
    var numerico = rut.value.search( /[^0-9]/i );
    
    if(rut.value == "" && digito.value == "")
        return true
    if( numerico != -1 ) {
        alert("El rut contiene un caracter no numerico")
        return false
    }
    if( digito.value == ""  && rut.value != "") {
        alert("No ha ingresado el digito verificador")
        return false
    }
    if( digito.value != "K" && digito.value != "k" )
    {
        var numerico1 = digito.value.search( /[^0-9]/i );
        if( numerico1 != -1 )
        {
            alert("El digito verificador no es valido")
            return false
        }
    }
    var rut_aux = rut.value;
    var i = 0;
    var suma = 0;
    var mult = 2;
    var c = 0;
    var modulo11 = 0;
    var largo = rut_aux.length;
    for( i = largo - 1; i >= 0; i-- )
    {
        suma = suma + rut_aux.charAt( i ) * mult;
        mult++;
        if( mult > 7 )
            mult = 2;
    }
    modulo11 = 11 - suma % 11;
    if( modulo11 == 10 )
        modulo11 = "K";
    if( modulo11 == 11 )
        modulo11 = "0";
    if( modulo11 != digito.value.toUpperCase() )
    {
        alert(  "Rut invalido." );
        return false;
    }
    return true;
}
