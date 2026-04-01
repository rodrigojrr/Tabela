const botao = document.getElementsByClassName('clean');
const criarMatriz = document.getElementById('create-array')
const valueArray = document.getElementById('numbers')
const tbody = document.getElementsByClassName("tbody")[0];
const saveButton = document.getElementById('save');
const loadButton = document.getElementById('load');
let opcoes = [...document.getElementsByClassName('row')]
let cells = [...document.getElementsByClassName('cell')];


criarMatriz.addEventListener('click', () => {
    const numberArray = parseInt(valueArray.value)
    let HTML = ""
    for (let i = 0; i < numberArray; i++) {
        HTML += "<div class='row'>"
        for (let j = 0; j < numberArray; j++) {
            HTML += `<div class="cell"></div>`
        }
        HTML += "</div>"
    }
    tbody.innerHTML = HTML
    updateCells()
})




botao[0].addEventListener('click', () => {
    cells.map((element) => {
        console.log(element)
        element.setAttribute("id", "")
    })
})


function updateCells() {
    cells = [...document.getElementsByClassName('cell')];
    cells.map((element) => {
        element.addEventListener('click', () => {
            const elementId = element.getAttribute("id")
            if (elementId === "clicked") {
                element.setAttribute("id", "")
            } else {
                element.setAttribute("id", "clicked")
            }
            console.log(cells)
        }
        )
    })
}

saveButton.addEventListener('click', () => saveArray())
function saveArray() {
    localStorage.setItem("Previous-Array", tbody.innerHTML)
    console.log(tbody)
}

loadButton.addEventListener('click', () => loadArray())
function loadArray() {
    const savedItem = localStorage.getItem("Previous-Array")
    tbody.innerHTML = savedItem
    updateCells(cells)
    console.log(cells)
}

opcoes.map((opcao) =>{
    opcao.addEventListener('click',() => {
        console.log(opcao.id)
    })
})