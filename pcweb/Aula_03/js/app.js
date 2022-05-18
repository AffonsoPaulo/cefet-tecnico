const todoList = document.querySelector("#todoList")
const addItem = document.querySelector("#addItem")

/** 
 * Função para recuperar o valor digitado no input
 * @param 
 * @returns - String task
 */
const getTask = () => {
    const item = document.querySelector("#item")
    return (item.value) ? item.value : false
}
/**
 * criar um li
 */
const createLi = task => {
    const itemList = document.createElement("li")
    const contentItemList = document.createTextNode(task)
    const spanItemList = document.createElement("span")
    spanItemList.appendChild(contentItemList)
    itemList.appendChild(spanItemList)
    return itemList
}
/**
 *  criar link de remoção
 */

const createLink = (className, labelText, parentHTML) => {
    const link = document.createElement("a")
    link.classList.add(className)
    const linkText = document.createTextNode(labelText)
    link.appendChild(linkText)
    link.setAttribute("href", "#")
    return link
}

const editLi = (itemList) => {
    console.log(itemList.firstChild)
    let taskName = itemList.firstChild.textContent
    let sizeTask = taskName.length
    taskName = taskName.substr(0, sizeTask - 13)
    const inputEdit = document.createElement("input")
    inputEdit.setAttribute("value", taskName)
    itemList.appendChild(inputEdit)

    const concludeEdit = document.createElement("button")
    const labelEdit = document.createTextNode("Concluir")
    concludeEdit.appendChild(labelEdit)
    itemList.appendChild(concludeEdit)

    itemList.childNodes[1].classList.remove("edit")
    console.log(itemList.childNodes[1])
}
/**  
 * Função para adicionar itens
 * @param String task
 * @returns none
*/
const addItemList = task => {
    const itemList = createLi(task)
    const linkRemove = createLink("remove", "Remover")
    const linkEdit = createLink("edit", "Editar")

    itemList.appendChild(linkEdit)
    itemList.appendChild(linkRemove)

    //adicionar o li na lista "todoList"
    todoList.appendChild(itemList)
}

// criar uma função para o clique do botão
addItem.addEventListener("click", () => {
    const task = getTask()
    if (task)
        addItemList(task)
})

todoList.addEventListener("click", (evento) => {
    //se o clique não for no a, saia
    if (evento.target.nodeName == "A") {
        // caso contrário, siga em frente
        const activeLink = evento.target
        const liParent = activeLink.parentNode
        console.log(activeLink)
        if (activeLink.className == "edit") {
            editLi(liParent)
        } else if (activeLink.className == "remove") {
            todoList.removeChild(liParent)
        }
    } else if(evento.target.nodeName == "BUTTON") {

    }
})

todoList.addEventListener("keyup", (evento) => {
    if (evento.target.nodeName != "INPUT") return false
    const inputEdit = evento.target
    const newValueTask = inputEdit.value
    const liParent = inputEdit.parentNode
    const spanChild = liParent.firstChild
    spanChild.textContent = newValueTask
})