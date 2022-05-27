const tareas=[];
tareas.push([uuid.v4(), "Samso Park" ,  "Conectar a la BD"         , 1])
tareas.push([uuid.v4(), "marlo sanki",  "comprar medicamentos"     , 2])
tareas.push([uuid.v4(), "john ryte"  ,  "vender bicicleta"         , 3])
tareas.push([uuid.v4(), "dave"       ,  "presentar trabajos de TLP", 2])

let divAlert=document.querySelector( '[name="alerttarea"] '); 


listarTareas()


function listarTareas(){

   

   tablahtml= `<thead>
    <tr>
        
        <th>Acciones</th> 
        <th>Apellido y Nombre</th>                                            
        <th>Tarea</th>
        <th>Estado</th>
    </tr>
 </thead>
 <tbody>`;

tareas.forEach(tarea => {

    let estadocolor;
    let descripcionestado;

    switch (tarea[3]) {
        case 1:
            estadocolor= "badge-danger";
            descripcionestado=  "pendiente";
            break;
        case 2:
            estadocolor= "badge-warning";
            descripcionestado=  "en proceso";
           break;
        case 3:
         estadocolor= "badge-success";
        descripcionestado=  "completado";
         break;
    
        default:
            break;
    }

    tablahtml+= ` <tr>
                        <td>
                      <a href="#" onclick="console.log('editar la tarea con el ID:  ${tarea[0]}')">
                       <span  style="color: red;" id="basic-addon1">
                      <i class="fas fa-edit"></i>
                      </span>
                         </a>
                         <a href="#" onclick="console.log('eliminar la tarea con el ID:  ${tarea[0]}')">
                          <span  style="color: red;" id="basic-addon1">
                        <i class="fas fa-backspace"></i>
                       </span>
                         </a>
                        </td>
                         <td> ${tarea[1]}</td>                                            
                         <td>${tarea[2]}</td>
                          <td><label class="badge ${estadocolor}">${descripcionestado}</label></td>
                    </tr>`

});
   
  
       tablahtml+= `</tbody>`
       document.getElementById("htmltable").innerHTML=   tablahtml
       
}

function validarformulario(nombre, descripcion){

    PATRONOMBRE=/^[a-zA-Z]+\s+[a-zA-Z]+\D/
    PATRONDESCRIPCION=/^[a-zA-Z\s]{1,80}$/


    if(!PATRONOMBRE.test(nombre) || !PATRONDESCRIPCION.test(descripcion)){
            
    
        return false;
         
    }else{
     
     return true;
    }
}





function guardartareas() {


    let nombre= document.getElementById("apenom").value
    let descripcion= document.getElementById("descriptarea").value
    let estado= parseInt(document.getElementById("estado").value)

    tareas.push([uuid.v4(), nombre, descripcion, estado])

    if(!validarformulario(nombre, descripcion)){
        showAlert("error", "revise que los campos cumplan con los parametros", divAlert);
        return;
    }

    showAlert("valido", "su tarea a sido registrado", divAlert);

    

    listarTareas()

}


function showAlert(tipo, mensaje, divElemento){
    divElemento.innerHTML=mensaje;
    switch(tipo){
        case "error":
            divElemento.className= "alert alert-danger";
            break;
        case "valido":
            divElemento.className= "alert alert-success";
            break;  

    }
    divElemento.hidden=false;
    setTimeout(function(){
     divElemento.hidden=true;
    }, 3000 );
    
} 

