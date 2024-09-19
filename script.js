let overlay = document.querySelector(".overlay")
let popupbox = document.querySelector('.popup-box')
let add = document.getElementById("add-popup")

add.addEventListener('click',function(){
    overlay.style.display="block";
    popupbox.style.display="block";

})

let cancel = document.getElementById("cancel-book")

cancel.addEventListener('click',function(event){
    event.preventDefault()
    overlay.style.display="none";
    popupbox.style.display="none";

})

let bookcontainer=document.querySelector(".container")
let addbook = document.getElementById("add-book")
let booktitle = document.getElementById("book-title")
let bookauthor = document.getElementById("book-author")
let bookdes = document.getElementById("book-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdes.value}</p>
            <button onclick="remove(event)">Drop</button>`
    bookcontainer.append(div)
    overlay.style.display="none";
    popupbox.style.display="none";
})

function remove(event){
    event.target.parentElement.remove()
}