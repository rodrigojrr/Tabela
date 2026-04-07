const botao = document.getElementsByClassName('clean');
const criarMatriz = document.getElementById('create-array')
const valueArray = document.getElementById('numbers')
const tbody = document.getElementsByClassName("tbody")[0];
const saveButton = document.getElementById('save');
const loadButton = document.getElementById('load');
let opcoes = [...document.getElementsByClassName('square')]
let cells = [...document.getElementsByClassName('cell')];

//Variavel global
let COR = ""

// Cria matriz dinamica
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



// Limpa toda a matriz
botao[0].addEventListener('click', () => {
    cells.map((element) => {
        console.log(element)
        element.setAttribute("id", "")
    })
})

// Funcao que atualiza a matriz adicionando os eventListeners
function updateCells() {
    cells = [...document.getElementsByClassName('cell')];
    cells.map((element) => {
        element.addEventListener('click', () => paint(element))
    })
}




//Pinta a matriz
function paint(element, selectedColor) {
    console.log(COR !== element.id)
    if (COR === element.id) {
        COR ? element.setAttribute("id", COR) : element.setAttribute("id", "azul");
    } else {
        element.setAttribute("id", "")
    }
}



//Seleciona a COR a ser utilizada para pintar a matriz
opcoes.map((opcao) => {
    opcao.addEventListener('click', () => {
        const selectedColor = (opcao.id)
        COR = selectedColor
    })
})


// Salva matriz no local storage
saveButton.addEventListener('click', () => saveArray())
function saveArray() {
    localStorage.setItem("Previous-Array", tbody.innerHTML)
}

// carrega a matriz do local storage
loadButton.addEventListener('click', () => loadArray())
function loadArray() {
    const savedItem = localStorage.getItem("Previous-Array")
    tbody.innerHTML = savedItem
    updateCells(cells)
    console.log(cells)
}


function defaultArray() {
    if (localStorage.getItem("Previous-Array") !== null) {
        loadArray()
        return
    }
    else {
        numberArray = valueArray.value = 3
        let HTML = ""
        for (let i = 0; i < numberArray; i++) {
            HTML += "<div class='row'>"
            for (let j = 0; j < numberArray; j++) {
                HTML += `<div class="cell"></div>`
            }
            HTML += "</div>"
        }
        criarMatriz.click()
    }
}
window.onload = defaultArray