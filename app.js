const criarCores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");

const cor = document.querySelector(".cor");

function gerarCorAleatoria() {
    return Math.floor(Math.random() * criarCores.length);
}

btn.addEventListener("click", function() {
    let novaCor = "#";

    for (let i = 0; i < 6; i++) {
        novaCor += criarCores[gerarCorAleatoria()];
        // console.log(novaCor);
    }
    // console.log(novaCor);
    document.body.style.backgroundColor = novaCor;
    cor.textContent = novaCor;
})