let buttonAdd = document.getElementById("buttonAdd");
let inputAdd = document.getElementById("inputAdd");
let todosItems = document.getElementById("todosItems");
let itemCheckButton = document.getElementById("itemCheckButton");



buttonAdd.addEventListener("click", function(){
    var ItemsA = document.createElement("a");
    var itemDiv = document.createElement("div");
    var itemCheckButton = document.createElement("button");
    var todoTextSpan = document.createElement("span");
    var iEtiketi = document.createElement("i");
    var removeButton = document.createElement("button");

    todosItems.appendChild(ItemsA);
    ItemsA.appendChild(itemDiv);
    itemDiv.appendChild(itemCheckButton);
    itemDiv.classList.add("asdas");
    itemCheckButton.classList.add("chcbox");
    itemDiv.appendChild(todoTextSpan);
    todoTextSpan.innerText = inputAdd.value;

    ItemsA.appendChild(removeButton);
    removeButton.classList.add("removeBtn");
    removeButton.appendChild(iEtiketi);
    iEtiketi.classList.add("fas");
    iEtiketi.classList.add("fa-times");

    inputAdd.innerText = " ";

    removeButton.addEventListener("click" ,function(){
        todosItems.removeChild(ItemsA);
    })

    itemCheckButton.addEventListener("click",function(){
        itemCheckButton.style.backgroundImage = "url('images.png')";
        todoTextSpan.style.textDecoration ="line-through";
    })

    itemCheckButton.addEventListener("dblclick",function(){
        itemCheckButton.style.backgroundImage = "url('')";
        todoTextSpan.style.textDecoration ="none";
    })

    
    
})


alert("Checkbox da click ve dblclick eventleri mevcuttur.Hayrını görün :D");

