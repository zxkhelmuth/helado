function recogerDatos(){

    let nombreCliente= document.getElementById("nombre_cliente").value;
    let telefonoCliente= document.getElementById("telefono_cliente").value;
    let emailCliente= document.getElementById("email_cliente").value;

    let sabor = document.getElementsByName("sabor").value;
    let recipiente = document.getElementsByName("recipiente").value;
    let extras = document.getElementsByName("extras[]").value;

 
    sabor = "";
    let saborVainilla = document.getElementById("vainilla");
    let saborChocolate = document.getElementById("chocolate");
    let saborMixto = document.getElementById("mixto");

    if (saborVainilla.checked) {
        sabor= saborVainilla.value;
        } else if (saborChocolate.checked) {
        sabor= saborChocolate.value;
        } else {
        sabor= saborMixto.value;
    }

    recipiente = "";

    let recipienteCopa= document.getElementById("copa");
    let recipienteTarrina= document.getElementById("tarrina");

    if (recipienteCopa.checked){
        recipiente = recipienteCopa.value;
    }else{
        recipiente= recipienteTarrina.value
    }

    extras = "";

    let extraCaramelo = document.getElementById("caramelo");
    let extrakitkat = document.getElementById("kitkat");
    let extraChocolate = document.getElementById("chocolateExtra");

    if (extraCaramelo.checked){ 
        extras = extraCaramelo.value;
    } else if (extrakitkat.checked) {
        extras= extrakitkat.value;
    }else{
        extras = extraChocolate.value;
    }
    
    return nombreCliente;
}

console.log(recogerDatos)