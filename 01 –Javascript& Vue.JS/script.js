/*
1) Créer un ou plusieurs tableau(x) ou un objet JS qui stockent les datas sur les
salades. Un dédié au bases (roquette, laitue, pates...), un pour les ingrédients, un
pour les boissons. Pour les ingrédients, ils seront catégorisés (bleu ou vert). (Pour la
facilité de l’exercice, il me semble plus pertinent de découper en plusieurs tableaux ou
objets).
*/
const bases = ["roquette", "laitue", "pates" , "Mâche" , "Iceberg" , "Pousse d épinard" , "Pâtes Fusili" , "Quinoa"
    ,"Carotte" , "Pâtes complètes"];
const ingrédients = [ ["Betterave" ,"Vert"],[ "Carottes","Vert" ],[ "Champignons" ,"Bleu"],[ "Concombre","Vert" ],[ "Choux Rouges" ,"Vert" ],[ "Croûtons","Vert" ],
    [ "Emmental" ,"Vert"],[ "Jambon cru"  ,"Bleu"],[
         "Lentilles","Vert"],[ "Maïs ","Vert"],[ "Mimolette","Vert"],[ "Mozarella","Vert"],[
        "Oeuf","Vert" ],[ "Oignon Rouges" ,"Vert"],[ "Pois chiches","Bleu" ],[ "Pommes","Vert" ],[ "Poulet","Bleu" ],[ "Radis","Vert" ]
    ,[ "Saucisse (Porc)" ,"Bleu"],[
        "Surimi" ,"Bleu"],[ "Tomates" ,"Bleu"],[ "Harricots rouges" ,"Bleu" ],
    [ "oignons Frits","Vert"  ],[ "Pastèque" ,"Bleu"],[ "Petits pois" ,"Bleu"],[ "Soja","Bleu"]];

const listeBoissons = [
    "Vitamin Well Framboise (Awake) 50cl",
    "Vitamin Well Péche (Antioxidant) 50cl",
    "Coca-Cola 33CL",
    "Coca-Cola Zero 33CL",
    "Coca-Cola Zero SOCL",
    "Minute Maid Fruits Tropical 33cl",
    "Minute Maid pomme 33CL",
    "Orangina 33CL",
    "Schweppes Agrum’ 33CL",
    "Fuze Tea Péche 33CL",
    "Fuze Tea Citron Menthe 33CL",
    "MayTea Menthe 33CL",
    "MayTea Péche 33CL",
    "Pulco citronnade 50cl",
    "San Pellegrino Citron 33CL",
    "San Pellegrino SOCL",
    "Cristaline Gazeuse SOCL",
    "Nestlé Pure life SOCL",
    "Vittel SOCL"
];


/*
    2) Créer sur la partie principale un formulaire pour personnaliser sa salade. Il sera
basé sur les valeurs du tableau. Ainsi, le formulaire se découpera en plusieurs
parties. Un choix de base de salade (Requis, 1 seul choix possible), des choix
d’ingrédients (les ingrédients auront des prix variables, il faudra obligatoirement en
choisir 4), un choix unique de boisson, puis un select d’heure de livraison et les infos
de bases (nom/prénom/adresse/tel). Vous avez le choix des types d’input que vous
voulez mettre en place.
Le bouton envoyer ne sera cliquable que si le bon remplissage du form a eu lieu.*/
const base_select = document.getElementById("base-select");
const résultats = document.getElementById("résultats");
bases.forEach(function (base) {
    base_select.innerHTML += "<option value='"+base+"'>"+base+"</option>";
});
base_select.onchange = function () {

    résultats.innerHTML = "<p>Vous avez choisi la base : "+base_select.value+"</p>";
    localStorage.setItem("base",base_select.value);
    const output = document.getElementById("output");
    output.innerHTML = "<p> base : "+localStorage.getItem("base")+"</p>";
};


/* Partie sur les ingrédient */
const list_items = document.querySelector(".list-items");

ingrédients.forEach(function (ingrédient) {
    list_items.innerHTML += "<li class='item'>" +
        "<span class='checkbox'>" +
        "<i class='fa-solid fa-check check-icon'></i>" +
        "</span>" +
        "<span class='item-text'>" + ingrédient[0] + "</span>" +
        "</li>";
});


const selectBtn = document.querySelector(".select-btn"),
    items = document.querySelectorAll(".item");
selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

let checked = document.querySelectorAll(".checked"),
    btnText = document.querySelector(".btn-text");

items.forEach(item => {
    item.addEventListener("click", () => {
        let checked = document.querySelectorAll(".checked")


        if (checked && checked.length <= 3) {
            console.log(checked.length );

           item.classList.toggle("checked");
            // je recupere les ingrédients stocker en local storage





        }
        if(checked && checked.length <= 3){


            let checked = document.querySelectorAll(".checked"),
                btnText = document.querySelector(".btn-text");
                output = document.getElementById("output");
           // console.log(checked.length + ( checked.length <= 3));
            btnText.innerText = `${checked[(checked.length)-1].innerText} Selected`;
            //console.log(checked.length <= 4);
            checked.forEach(function (ingrédient, i) {

                localStorage.setItem(("ingrédients" + i  ),ingrédient.innerText);





            });
            output.innerHTML += "<p> ingrédients : "+localStorage.getItem("ingrédients" + (checked.length -1 )  )+"</p>";
            console.log(checked)


            //console.log(localStorage.getItem("ingrédients" + checked[(checked.length)-1].innerText));


        }else if(checked && checked.length == 3) {
            btnText.innerText = `vous pouvez choisir que 4 ingrédients maximum`;
            console.log("stop");
        }








    });
})


//console.log(localStorage.getItem("ingrédients3"))



/*Partie sur les boisson*/

const boisson_select = document.getElementById("boisson-select");
const résultat_boisson = document.getElementById("résultat-boisson");
listeBoissons.forEach(function (boisson) {
    boisson_select.innerHTML += "<option value='"+boisson+"'>"+boisson+"</option>";
});
boisson_select.onchange = function () {
    if (boisson_select.value == "null"){
        résultat_boisson.innerHTML = "<p>aucune boisson choisit: </p>";
    }else{
        résultat_boisson.innerHTML = "<p>Vous avez choisi la boisson : "+ ( boisson_select.value || "  aucune boisson choisit" ) +"</p>";

    }
    localStorage.setItem("boisson",boisson_select.value);
};

/*
3) Au clic sur envoyer, stocker les datas en localstorage ou en dans le store si vous
êtes en Vue.JS, vider le formulaire par la suite.

4) Sur la partie sidebar, afficher les détails de la dernière commande. Si aucune
commande, afficher “aucune commande existante”
 */


function StoreDataInLocalStorage(){
    localStorage.setItem("Time",document.getElementById("time").value);
    console.log(localStorage.getItem("Time"));
    localStorage.setItem("Nom",document.getElementById("Nom").value);
    localStorage.setItem("prénom",document.getElementById("prénom").value);
    localStorage.setItem("adresse", document.getElementById("adresse").value);
    localStorage.setItem("numéro",document.getElementById("Phone-Number").value);
    console.log(localStorage.getItem("Time") + localStorage.getItem("Nom") + localStorage.getItem("prénom") + localStorage.getItem("adresse") + localStorage.getItem("numéro"));

    const clients_infos = document.getElementById("client_infos");

    console.log(clients_infos);
    clients_infos.innerHTML = ""
    clients_infos.innerHTML += "<li>heure de livraison : " + localStorage.getItem("Time") + "</li>";
    clients_infos.innerHTML += "<p> Nom : "+localStorage.getItem("Nom")+"</p>";
    clients_infos.innerHTML += "<li>prénom : "+localStorage.getItem("prénom")+"</li>";
    clients_infos.innerHTML += "<li>adresse : "+localStorage.getItem("adresse")+"</li>";
    clients_infos.innerHTML += "<li>numéro : "+localStorage.getItem("numéro")+"</li>";

    console.log(clients_infos);
}




output.innerHTML += "<p>Vous avez choisi la boisson : "+localStorage.getItem("boisson")+"</p>";


const form = document.querySelector("form");
const basic_message = document.querySelector(".basic_message");
console.log(basic_message);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checked.forEach(function (ingrédient, i) {
        //console.log(ingrédient.innerText);
        ingrédient.classList.remove("checked");

    });

    StoreDataInLocalStorage();
    basic_message.remove();
    form.reset();
});
