const peiStorageKey = "peiForms"; // Define la constante peiStorageKey
//Guarda el nombre de la clave del localStorage

// Obtiene del almacenamiento de todos los formularios PEI guardados.
function getPeiForms() {
  //Usa localStorage para buscar datos guardados con una clave (peiStorageKey)
  const savedForms = localStorage.getItem(peiStorageKey);
  
  if (!savedForms) {
    return [];// si no hay datos guardados devuelve un arreglo vacío
  }
  //transforma el string en un objeto real de JavaScript
  return JSON.parse(savedForms);//devuelve es un string
}

// Guarda la lista completa de formularios PEI en almacenamiento local.
function savePeiForms(forms) { // Recibe los datos del formulario
  localStorage.setItem(peiStorageKey, JSON.stringify(forms));
} // Extrae cada dato del formulario

// Toma los datos del formulario PEI y los Crea.
function createPeiItem(formData) {
  return {
    estudiante: formData.get("estudiante"),
    objetivos: formData.get("objetivos"),
    estrategias: formData.get("estrategias"),
    observaciones: formData.get("observaciones"),
    avance: formData.get("avance"),
    fecha: new Date().toLocaleDateString("es-CR")
  };
}

// Muestra un mensaje en pantalla si el elemento de destino existe.
function showMessage(messageElement, text) {
  if (!messageElement) {
    return; // Si el elemento no existe, la función se detiene.
  }

  messageElement.textContent = text; // Muestra el mensaje
}

// Configura el envio del formulario PEI y guarda los datos.
function setupPeiForm() { // captura los datos
  //Busca elementos en el HTML
  const peiForm = document.getElementById("pei-form"); // el formulario
  const messageElement = document.getElementById("pei-message"); //se mostrará un mensaje

  if (!peiForm) {// si el formulario no existe la funcion se detiene
    return;
  }

  peiForm.addEventListener("submit", function (event) { //Se activa cuando el usuario da clic en Enviar
    event.preventDefault();

    const formData = new FormData(peiForm); //Obtiene los datos del formulario
    const savedForms = getPeiForms(); // Obtiene datos ya guardados
    const newPei = createPeiItem(formData);//Crea un nuevo objeto PEI
           // Guarda el nuevo formulario
    savedForms.push(newPei);//agrega el nuevo dato
    savePeiForms(savedForms); //guarda todo

    peiForm.reset(); // Limpia el formulario
    showMessage(messageElement, "El formulario PEI se guardó correctamente.");
  });
}

// Muestra muestra en pantalla (dashboard) cuántos formularios PEI hay guardados y lo lista.
function renderPeiDashboard() { // Busca elementos en el HTML
  const totalElement = document.getElementById("pei-total"); //se mostrará el número total
  const listElement = document.getElementById("pei-list"); //se mostrará la lista de formularios

  if (!totalElement || !listElement) {
    return;
  }

  const savedForms = getPeiForms(); // Obtiene los formularios guardados
  totalElement.textContent = String(savedForms.length); // Muestra el total

  if (savedForms.length === 0) { // Si no hay datos
    listElement.innerHTML = "<li>No hay formularios guardados todavía.</li>";
    return;
  }

  const items = savedForms.map(function (pei) { //Crea la lista con el map recorre la lista
    return "<li><strong>" + pei.estudiante + "</strong> - " + pei.fecha + " - " + pei.objetivos + "</li>";
  });

  listElement.innerHTML = items.join("");
}

setupPeiForm();
renderPeiDashboard();