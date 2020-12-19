var shoppingListItems = [
    {
        pic: "assets/shopitem_01.jpg",
        name: "Wall-e",
        descript: "Csupaszív, de néma.",
        company: "Buy n Large",
        price: 125,
        storage: 15,
        count: 0,
    },
    {
        pic: "assets/shopitem_02.png",
        name: "Kétszáz éves ember",
        descript: "Kicsit túlkoros, de igazán szerető férj.",
        company: "U.S. Robotics and Mechanical Men, Inc.",
        price: 500,
        storage: 5,
        count: 0,
    },
    {
        pic: "assets/shopitem_03.png",
        name: "Giskard",
        descript: "Öntörvényű, ajánlott különcöknek.",
        company: "Synapse",
        price: 1000,
        storage: 3,
        count: 0,
    },
    {
        pic: "assets/shopitem_04.jpg",
        name: "C-3PO",
        descript: "Tolmácsrobot. Idegesítő.",
        company: "Cybot Galactica",
        price: 50,
        storage: 2000,
        count: 0,
    },
    {
        pic: "assets/shopitem_05.png",
        name: "R2-D2",
        descript: "Szerelőknek tökéletes. Sokat csipog.",
        company: "Industrial Automaton",
        price: 250,
        storage: 100,
        count: 0,
    },
    {
        pic: "assets/shopitem_06.jpg",
        name: "Ava",
        descript: "A Turingon nagyon átmegy!",
        company: "Nathan Bateman",
        price: 400,
        storage: 25,
        count: 0,
    },
    {
        pic: "assets/shopitem_07.jpg",
        name: "T 1000",
        descript: "Időutazó bérgyilkos. Csak felnőtteknek!",
        company: "Skynet",
        price: 900,
        storage: 5,
        count: 0,
    },
    {
        pic: "assets/shopitem_08.jpg",
        name: "David",
        descript: "Csillagközi felfedező. Vigyázat: Isten komplexusos.",
        company: "Weyland Corp",
        price: 750,
        storage: 10,
        count: 0,
    },
    {
        pic: "assets/shopitem_09.jpg",
        name: "TARS",
        descript: "Nagy tudású, jól konfigurálható.",
        company: "NASA",
        price: 650,
        storage: 10,
        count: 0,
    },
    {
        pic: "assets/shopitem_10.jpg",
        name: "Sonny",
        descript: "Öntudatra ébredő típus.",
        company: "U.S. Robotics and Mechanical Men, Inc.",
        price: 400,
        storage: 50,
        count: 0,
    },
    {
        pic: "assets/shopitem_11.jpg",
        name: "Johnny 5",
        descript: "Igazi Jóbarát. Sok inputtal kell etetni.",
        company: "Nova Laboratories Inc.",
        price: 500,
        storage: 15,
        count: 0,
    },
    {
        pic: "assets/shopitem_12.jpg",
        name: "Mikrobi",
        descript: "Általános célú háztartási robot extra kalandokkal.",
        company: "Hungarian Robotics Corporation",
        price: 200,
        storage: 100,
        count: 0,
    },
    {
        pic: "assets/shopitem_13.jpg",
        name: "Marvin",
        descript: "Paranoid android. Mellette utálni fogod az életet.",
        company: "Sirius Cybernetics Corporation's",
        price: 500,
        storage: 75,
        count: 0,
    },
    {
        pic: "assets/shopitem_14.jpg",
        name: "Bishop",
        descript: "Állami kolonizáló robot.",
        company: "Weyland-Yutani",
        price: 600,
        storage: 15,
        count: 0,
    },
    {
        pic: "assets/shopitem_15.jpg",
        name: "Roy Batty",
        descript: "Harci kolonizációs NEXUS 6 model.",
        company: "Tyrell Corporation",
        price: 750,
        storage: 25,
        count: 0,
    },
    {
        pic: "assets/shopitem_16.jpg",
        name: "Furby",
        descript: "Gyerekjáték. Világuralomra törnek.",
        company: "Hasbro",
        price: 10,
        storage: 10000,
        count: 0,
    },
    {
        pic: "assets/shopitem_17.jpg",
        name: "Alita",
        descript: "Pusztító harcirobot, kedves mosollyal.",
        company: "United Republics of Mars",
        price: 1000,
        storage: 10,
        count: 0,
    },
    {
        pic: "assets/shopitem_18.jpg",
        name: "Sophia",
        descript: "Társalkodó robot, meglepő megszólalásokkal.",
        company: "Hanson Robotics",
        price: 150,
        storage: 100,
        count: 0,
    },
    {
        pic: "assets/shopitem_19.jpg",
        name: "Aibo",
        descript: "Igazi kis házikedvenc a családnak.",
        company: "Sony",
        price: 50,
        storage: 1000,
        count: 0,
    },
    {
        pic: "assets/shopitem_20.jpg",
        name: "Herbert Televox",
        descript: "Az első humanoid robot.",
        company: "Westinghouse Electric and Manufacturing Co",
        price: 1000000,
        storage: 1,
        count: 0,
    },
]

// var cards = document.getElementsByClassName("card-deck")[0];
//
// let i;
// for (i = 0; i < shoppingListItems.length; i++) {
//     var card = document.createElement('div');
//     card.className = "card";
//     card.id = i;
//
//     var image = document.createElement('img');
//     image.className = "card-img-top";
//     image.src = "./" + shoppingListItems[i].pic;
//     image.alt = "Robot";
//
//     var cardBody = document.createElement("div");
//     cardBody.className = "card-body";
//
//     var ul = document.createElement("ul");
//     ul.className = "list-group";
//
//     var liName = document.createElement("li");
//     var liDescript = document.createElement("li");
//     var liComp = document.createElement("li");
//     var liPrice = document.createElement("li");
//     var liStorage = document.createElement("li");
//
//     var liClassName = "list-group-item list-group-item-success";
//
//     liName.className = liClassName + " name";
//     liDescript.className = liClassName + " big";
//     liComp.className = liClassName + " big";
//     liPrice.className = liClassName;
//     liStorage.className = liClassName;
//
//     liName.innerHTML = "    Név: <b>" + shoppingListItems[i].name + "</b>";
//     liDescript.innerHTML = "    Leírás: <b>" + shoppingListItems[i].descript + "</b>";
//     liComp.innerHTML = "    Gyártó: <b>" + shoppingListItems[i].company + "</b>";
//     liPrice.innerHTML = "   Ár: <b>" + shoppingListItems[i].price + "</b>";
//     liStorage.innerHTML = "    Készlet: <b>" + shoppingListItems[i].storage + "</b>";
//
//     var cardFooter = document.createElement("div");
//     cardFooter.className = "card-footer";
//
//     var addBtn = document.createElement("button");
//     addBtn.type = "button";
//     addBtn.className = "btn";
//     addBtn.id = i;
//     addBtn.innerHTML = "Hozzáadás a kosárhoz.";
//
//
//
//     ul.appendChild(liName);
//     ul.appendChild(liDescript);
//     ul.appendChild(liComp);
//     ul.appendChild(liPrice);
//     ul.appendChild(liStorage);
//
//     cardFooter.appendChild(addBtn);
//     cardFooter.querySelector("button").addEventListener("click", addToCart);
//
//     card.appendChild(image);
//     card.appendChild(ul);
//     card.appendChild(cardFooter);
//     cards.appendChild(card);
// }



function addToCart() {
    i = parseInt(this.id);
    console.log(i);
    if (shoppingListItems[i].storage > 0) {
        shoppingListItems[i].count++;
        shoppingListItems[i].storage--;
        generateCard();
        console.log(shoppingListItems[i].count);
    }
    else Swal.fire({
        icon: 'error',
        title: 'Hoppáááá',
        text: 'Azt hiszem ebből már nincs több raktáron!',
    })


}


function cartList() {
    for (var index = 0; index < shoppingListItems.length; index++) {

         console.log(shoppingListItems[index].name + ": " + shoppingListItems[index].count + "db  " +
         shoppingListItems[index].count*shoppingListItems[index].price + " RoboCoin");

    }

    var text = '';
    var sum = 0;

    for (var i = 0; i < shoppingListItems.length; i++){
        if (shoppingListItems[i].count > 0){
            text = text + shoppingListItems[i].name + ": " + shoppingListItems[i].count + "db  " +
                shoppingListItems[i].count*shoppingListItems[i].price + " RoboCoin<br>";
            sum = sum + shoppingListItems[i].count*shoppingListItems[i].price;
        }
    }
    console.log(text);

    // for (var i = 0; i < shoppingListItems.length; i++){
    //     if (shoppingListItems.count > 0){
    //         text = text + shoppingListItems[index].name + ": " + shoppingListItems[index].count + "db  " +
    //             shoppingListItems[index].count*shoppingListItems[index].price + " RoboCoin\n"
    //     }
    // }




    var text2 = 'összesen: ' + sum + ' RoboCoin'

    text = text + text2;

    Swal.fire({
        title: 'A kosár tartalma',
        width: 600,
        html: text,
        padding: '3em',
        backdrop: `
    rgba(0,0,123,0.4)
    url("./assets/robotcart.gif")
    left top
    no-repeat
  `
    })


}


