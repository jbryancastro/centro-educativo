const peiStorageKey = "peiForms";

function getPeiForms() {
  const savedForms = localStorage.getItem(peiStorageKey);

  if (!savedForms) {
    return [];
  }

  return JSON.parse(savedForms);
}

function savePeiForms(forms) {
  localStorage.setItem(peiStorageKey, JSON.stringify(forms));
}

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

function showMessage(messageElement, text) {
  if (!messageElement) {
    return;
  }

  messageElement.textContent = text;
}

function setupPeiForm() {
  const peiForm = document.getElementById("pei-form");
  const messageElement = document.getElementById("pei-message");

  if (!peiForm) {
    return;
  }

  peiForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(peiForm);
    const savedForms = getPeiForms();
    const newPei = createPeiItem(formData);

    savedForms.push(newPei);
    savePeiForms(savedForms);

    peiForm.reset();
    showMessage(messageElement, "El formulario PEI se guardó correctamente.");
  });
}

function renderPeiDashboard() {
  const totalElement = document.getElementById("pei-total");
  const listElement = document.getElementById("pei-list");

  if (!totalElement || !listElement) {
    return;
  }

  const savedForms = getPeiForms();
  totalElement.textContent = String(savedForms.length);

  if (savedForms.length === 0) {
    listElement.innerHTML = "<li>No hay formularios guardados todavía.</li>";
    return;
  }

  const items = savedForms.map(function (pei) {
    return "<li><strong>" + pei.estudiante + "</strong> - " + pei.fecha + " - " + pei.objetivos + "</li>";
  });

  listElement.innerHTML = items.join("");
}

setupPeiForm();
renderPeiDashboard();