const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const cardsMaestros = document.querySelector("#cardsMaestros");

const addStudent = (cargo, name, lastName, mail, tele, msn) =>{
    let person = {
        pcargo: cargo,
        pname: name,
        plastName: lastName,
        pmail: mail,
        ptele: tele,
        pmsn: msn,
    }

    let text = `¿Esta segur@ ${person.pname} ${person.plastName} de enviar la peticion?`;
    modalAlert(text,"aceptar",person);

}

function modalAlert(cadena, tipo, persona){
    const alerta = document.createElement("div");
    const texto = document.createElement("p");
    const btnCerrar = document.createElement("input");
    alerta.setAttribute("id", "alerta");
    alerta.setAttribute("class", "alerta");
    texto.setAttribute("class", "textAlert");
    texto.innerHTML = `<strong>${cadena}</strong>`;
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "Cerrar");
    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);

    if(tipo==="aceptar"){
        const btnEnviar = document.createElement("input");
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);
        btnEnviar.onclick = function(){
            paintCard(persona, "Estudiante");
            paintCard(persona, "Maestro");
            document.getElementById("alerta").remove();
        }
    }else{
        document.body.appendChild(alerta);
    }

    btnCerrar.onclick = function(){
        document.getElementById("alerta").remove();
    }
}

const paintCard = (datos, tipo) =>{
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const temEstudiante = document.getElementById('templateEstudiante').content;
    const temMaestro = document.getElementById('templateMaestro').content;
    if(tipo==="Estudiante"){
        let tempTemplate = temEstudiante.cloneNode(true);
        tempTemplate.querySelector('.title-card').innerHTML = `DATOS DEL PQR <hr>`;
        tempTemplate.querySelector('.data-carg').innerHTML = `Cargo: ${datos.pcargo}`;
        tempTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        tempTemplate.querySelector('.text-mail').innerHTML = `Correo Electronico: ${datos.pmail}`;
        tempTemplate.querySelector('.text-telefono').innerHTML = `Telefono: ${datos.ptele}`;
        tempTemplate.querySelector('.text-msn').innerHTML = `Mensaje: ${datos.pmsn}`;
        fragmento.appendChild(tempTemplate);
        cardsEstudiantes.appendChild(fragmento);

    }else if(tipo==="Maestro"){
        let tempTemplate = temMaestro.cloneNode(true);
        tempTemplate.querySelector('.title-card').innerHTML = `DATOS DEL PQR <hr>`;
        tempTemplate.querySelector('.data-carg').innerHTML = `Cargo: ${datos.pcargo}`;
        tempTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        tempTemplate.querySelector('.text-mail').innerHTML = `Correo Electronico: ${datos.pmail}`;
        tempTemplate.querySelector('.text-telefono').innerHTML = `Telefono: ${datos.ptele}`;
        tempTemplate.querySelector('.text-msn').innerHTML = `Mensaje: ${datos.pmsn}`;
        fragmento.appendChild(tempTemplate);
        cardsMaestros.appendChild(fragmento);

    }
    FormData.reset();
  
}

export {addStudent,modalAlert}