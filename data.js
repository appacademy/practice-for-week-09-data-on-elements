// Your code hereadd
document.addEventListener("DOMContentLoaded",event=>{

    let itemName = document.getElementById('name')
    let itemClass = document.getElementById('type')
    let ul = document.getElementById('shopping-list')
    let addButton = document.getElementById('add')

    addButton.addEventListener("click",event =>{
        event.preventDefault()

        const newLi = document.createElement("li")
        newLi.innerText = itemName.value
        ul.appendChild(newLi)


        newLi.setAttribute("data-type",itemClass.value)
    })
})
