const validateString = (cad) =>{
    //ternario
    let response = (cad.length >=3) ?true :false;
    return response;
};

const validateTelefono = (cad) =>{
    let response = (cad.length >=10) ?true :false;
    return response;

}

function validarSelect() {
    var select = document.getElementById("cargo");
    if(select.value == "") {
      alert("Debes seleccionar una opción");
      return false;
    }
    return true;
}

class Validate{


    validNames(value){
        const nombresRX = /^([a-zA-Z{À-ÖØ-öø-ÿ}]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        const resp = value.match(nombresRX) ? true : false;
        return resp;
    }

    validMail(value){
        const mailRX = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        const resp = value.match(mailRX) ? true : false;
        return resp;

    }

    validCell(value){
        const cellRX = /^[0-9]{10}$/g;
        const resp = value.match(cellRX) ? true : false;
        return resp;

    }

    validMsn(value){
        const msnRX = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s\.,\?!¡¿"-]{20,50}+$/;
        const resp = value.match(msnRX) ? true : false;
        return resp;
    }


    validForm = (objeto) =>{
        const valores = Object.values(objeto);
        let resp = valores.findIndex(e => e ===false);//Si no encuentra un false va a devolver un -1
        return resp;        
    }
}

export { validateString,validateTelefono,validarSelect, Validate }