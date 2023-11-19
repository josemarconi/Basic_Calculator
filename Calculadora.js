let display = "";
let memory = 0;

function add(value) {

  if(value === ':')
  {
    value = '/';
  }

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

function c() {
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

document.addEventListener('keydown', function (event) {
  const tecla = event.key;

  if (/['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']/.test(tecla)) {
    add(tecla);
  } else if (['+', '-', '*', ':', '.'].includes(tecla)) {
    add(tecla);
  } else if (tecla === '=') {
    igual();
  } else if (tecla === 'c') {
    c();
  } else if (tecla === 'n') {
    neg();
  } else if (tecla === 'q') {
    MC();
  } else if (tecla === 'w') {
    Madd();
  } else if (tecla === 'e') {
    Msub();
  } else if (tecla === 'r') {
    MR();
  }
});
