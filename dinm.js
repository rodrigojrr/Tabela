const BOTAO_LIMPAR = document.getElementsByClassName('clean');
const BOTAO_CRIAR = document.getElementById('create-array')
const TAMANHO_ARRAY = document.getElementById('numbers')
const tbody = document.getElementsByClassName("tbody")[0];
const BOTAO_SALVAR = document.getElementById('save');
const BOTAO_CARREGAR = document.getElementById('load');
let OPCOES = [...document.getElementsByClassName('square')]
let CELULAS = [...document.getElementsByClassName('cell')];
let COR = "azul"

// Cria matriz dinamica
BOTAO_CRIAR.addEventListener('click', () => {
    const numberArray = parseInt(TAMANHO_ARRAY.value)
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
BOTAO_LIMPAR[0].addEventListener('click', () => {
    CELULAS.map((element) => {
        console.log(element)
        element.setAttribute("id", "")
    })
})

// Funcao que atualiza a matriz adicionando os eventListeners
function updateCells() {
    CELULAS = [...document.getElementsByClassName('cell')];
    CELULAS.map((element) => {
        element.addEventListener('click', () => paint(element))
    })
}




//Pinta a matriz
function paint(element, selectedColor) {
    if (COR !== element.id) {
        COR ? element.setAttribute("id", COR) : element.setAttribute("id", "");
    } else {
        element.setAttribute("id", "")
    }
}



//Seleciona a COR a ser utilizada para pintar a matriz
OPCOES.map((opcao) => {
    opcao.addEventListener('click', () => {
        const selectedColor = (opcao.id)
        COR = selectedColor
    })
})


// Salva matriz no local storage
BOTAO_SALVAR.addEventListener('click', () => saveArray())
function saveArray() {
    localStorage.setItem("Previous-Array", tbody.innerHTML)
}

// carrega a matriz do local storage
BOTAO_CARREGAR.addEventListener('click', () => loadArray())
function loadArray() {
    const savedItem = localStorage.getItem("Previous-Array")
    tbody.innerHTML = savedItem
    updateCells(CELULAS)
    console.log(CELULAS)
}


function defaultArray() {
    if (localStorage.getItem("Previous-Array") !== null) {
        loadArray()
        return
    }
    else {
        numberArray = TAMANHO_ARRAY.value = 3
        let HTML = ""
        for (let i = 0; i < numberArray; i++) {
            HTML += "<div class='row'>"
            for (let j = 0; j < numberArray; j++) {
                HTML += `<div class="cell"></div>`
            }
            HTML += "</div>"
        }
        BOTAO_CRIAR.click()
    }
}
window.onload = defaultArray