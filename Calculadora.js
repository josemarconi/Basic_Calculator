let display = "";
let memory = 0;

function add(value) {
  display += value;
  document.getElementById("input").value = display;
}

function igual() {
  try {
    const resultado = eval(display);
    display = resultado.toString();
    document.getElementById("input").value = display;
  } catch (error) {
    display = "Erro";
    document.getElementById("input").value = display;
  }
}

function ac() {
  display = "";
  document.getElementById("input").value = display;
}

function neg() {
  if (display !== "") 
  {
    display = display * (-1);
    document.getElementById("input").value = display;
  }
}

function MC() {
  memory = 0;
}

function Madd() {
  memory += parseFloat(display);
}

function Msub() {
  memory -= parseFloat(display);
}

function MR() {
  display = memory.toString();
  document.getElementById("input").value = display;
}