const inputBox = document.getElementById('inputBox')
const listContainer = document.getElementById('xlist')

function addTask () {
    if(inputBox.value === ''){
        alert('Please write something')
    }
    else {
        let li =document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
       

    }
     inputBox.value =''
     saveData()
}
listContainer.addEventListener(
    'click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed')
        }
        if(event.target.tagName === 'SPAN'){
            event.target.parentElement.remove()
            saveData()
        }
    }
)
function saveData () {
    localStorage.setItem('data',xlist.innerHTML)
}

function loadData () {
    xlist.innerHTML = localStorage.getItem('data')
}
loadData()