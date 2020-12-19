var cards = document.getElementsByClassName("card-deck")[0];

let i;

function generateCard() {
    cards.innerHTML = "";
    for (i = 0; i < shoppingListItems.length; i++) {
        var card = document.createElement('div');
        card.className = "card";
        card.id = i;

        var image = document.createElement('img');
        image.className = "card-img-top";
        image.src = "./" + shoppingListItems[i].pic;
        image.alt = "Robot";

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var ul = document.createElement("ul");
        ul.className = "list-group";

        var liName = document.createElement("li");
        var liDescript = document.createElement("li");
        var liComp = document.createElement("li");
        var liPrice = document.createElement("li");
        var liStorage = document.createElement("li");

        var liClassName = "list-group-item list-group-item-success";

        liName.className = liClassName + " name";
        liDescript.className = liClassName + " big";
        liComp.className = liClassName + " big";
        liPrice.className = liClassName;
        liStorage.className = liClassName;

        liName.innerHTML = "    Név: <b>" + shoppingListItems[i].name + "</b>";
        liDescript.innerHTML = "    Leírás: <b>" + shoppingListItems[i].descript + "</b>";
        liComp.innerHTML = "    Gyártó: <b>" + shoppingListItems[i].company + "</b>";
        liPrice.innerHTML = "   Ár: <b>" + shoppingListItems[i].price + "</b>";
        liStorage.innerHTML = "    Készlet: <b>" + shoppingListItems[i].storage + "</b>";

        var cardFooter = document.createElement("div");
        cardFooter.className = "card-footer";

        var addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = "btn";
        addBtn.id = i;
        addBtn.innerHTML = "Hozzáadás a kosárhoz.";


        ul.appendChild(liName);
        ul.appendChild(liDescript);
        ul.appendChild(liComp);
        ul.appendChild(liPrice);
        ul.appendChild(liStorage);

        cardFooter.appendChild(addBtn);
        cardFooter.querySelector("button").addEventListener("click", addToCart);

        card.appendChild(image);
        card.appendChild(ul);
        card.appendChild(cardFooter);
        cards.appendChild(card);
    }
}
generateCard();

