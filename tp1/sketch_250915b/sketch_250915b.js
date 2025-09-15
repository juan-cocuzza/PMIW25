//https://www.youtube.com/watch?v=csTynDOxBVA
//Cocuzza Alao Juan Cruz 124982/5 43798469
let refImg;
let tam = 50;
let valor;
let valorN;
let prendido = false;
let prendidoN = false;

function preload() {
  refImg = loadImage("M_18.jpg");
}

function setup() {
  createCanvas(800, 400);
  valor = color(255);
  valorN = color(0);
}

function draw() {
  background(255);
  image(refImg, 0, 0, 400, 400);
  actualizarColor();
  RecrearImagen();
}

// === Funciones ===
function DibujarCuadrado(x, y, tam, valor) {
  push();
  if ((y / tam) % 2 === 0) {
    if (esNworld(x, y, tam)) {
      NyBGrande(x, y, tam, valor, valorN);
    } else {
      ByNHorizontal(x, y, tam, valor, valorN);
    }
  } else {
    if (esNworld(x, y, tam)) {
      NyBChico(x, y, tam, valor, valorN);
    } else {
      ByNVertical(x, y, tam, valor, valorN);
    }
  }
  pop();
}

function RecrearImagen() {
  for (let y = 0; y < height; y += tam) {
    for (let x = 400; x < width; x += tam) {
      DibujarCuadrado(x, y, tam, valor, valorN);
    }
  }
}

function esNworld(x, y_, tam_) {
  return ((x / tam_) + (y_ / tam)) % 2 === 0;
}

function NyBGrande(x, y, tam, valor, valorN) {
  fill(valorN);
  noStroke();
  rect(x, y, tam, tam);
  fill(valor);
  rect(x + tam / 2, y + tam / 2, tam / 2, tam / 2);
}

function ByNHorizontal(x, y, tam, valor, valorN) {
  fill(valor);
  noStroke();
  rect(x, y, tam, tam);
  fill(valorN);
  rect(x, y + tam / 2, 5, tam / 2);
}

function NyBChico(x, y, tam, valor, valorN) {
  fill(valorN);
  noStroke();
  rect(x, y, tam, tam);
  fill(valor);
  rect(x, y, 5, 5);
}

function ByNVertical(x, y, tam, valor, valorN) {
  fill(valor);
  noStroke();
  rect(x, y, tam, tam);
  fill(valorN);
  rect(x + tam / 2, y, tam / 2, 5);
}

function mousePressed() {
  prendido = !prendido;

  if (!prendido) {
    valor = color(255);
  }
}

function keyPressed() {
  if (key === ' ') {
    prendidoN = !prendidoN;
    if (!prendidoN) {
      valorN = color(0);
    }
  }
}

function actualizarColor() {
  if (prendido) {
    valor = color(random(255), random(255), random(255));
  }
  if (prendidoN) {
    valorN = color(map(mouseX, 0, width, 0, 255),
      map(mouseY, 0, height, 0, 255),
      map(mouseX + mouseY, 0, width + height, 0, 255));
  }
}
