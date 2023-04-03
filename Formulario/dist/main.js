import { validateString,validateTelefono,validarSelect, Validate } from "./validate.js";
import { addStudent,modalAlert } from "./paint.js";
const btnEnviar = document.getElementById('btnEnviar');
const form = document.getElementById('fmContact');
//Instanciar el objeto o un objeto validate

let validator = new Validate();

//Objeto de validación
const objectValid={
    cargoObject:false,
    nameObject:false,
    lastNameObject:false,
    mailObject:false,
    teleObject:false,
    msnObject:false,
};


form.addEventListener('change' , function(event){
    const inputId = event.target.id;//target id para capturar quien fue el que genero el evento
    console.log(inputId);
    const inputValue = event.target.value;//target value para capturar el valor del evento
    console.log(inputValue);
    const inputClass = event.target.classList;//target classList para capturar la clase del evento
    console.log(inputClass);
    const validClass = () =>{
        inputClass.add("is-valid");
        inputClass.remove("is-invalid");
    }
    const invalidClass = () =>{
        inputClass.add("is-invalid");
        inputClass.remove("is-valid");
    }


    switch(inputId){
        case "cargo":
            objectValid.cargoObject = validator.validarSelect(inputValue);
            objectValid.cargoObject ? validClass() : invalidClass();//ternario
            console.log(Object.values(objectValid));
            break;
        case "name":
            objectValid.nameObject = validator.validNames(inputValue);
            objectValid.nameObject ? validClass() : invalidClass();//ternario
            console.log(Object.values(objectValid));
            break;
        case "lastName":
            objectValid.lastNameObject = validator.validNames(inputValue);
            objectValid.lastNameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case "mail":
            objectValid.mailObject = validator.validMail(inputValue);
            objectValid.mailObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case "telephone":
            objectValid.teleObject = validator.validCell(inputValue);
            objectValid.teleObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case "fm_contact":
            objectValid.msnObject = validator.validMsn(inputValue);
            objectValid.msnObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

    }


}
);

btnEnviar.addEventListener('click', (e) =>{
    e.preventDefault();
    const cargo = document.getElementById('cargo').value;
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('lastName').value;
    const correo = document.getElementById('mail').value;
    const telefono = document.getElementById('telephone').value;
    const mensaje = document.getElementById('fm_contact').value;
    if(validator.validForm(objectValid) === -1){

        addStudent(cargo, nombre, apellido, correo, telefono, mensaje);
        console.log("Enviando Formulario");
        
    }else{
        modalAlert("Error en los datos, verifiquelos");
    }
});