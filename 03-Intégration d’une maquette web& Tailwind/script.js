/*
1) Créer un ou plusieurs tableau(x) ou un objet JS qui stockent les datas sur les
salades. Un dédié au bases (roquette, laitue, pates...), un pour les ingrédients, un
pour les boissons. Pour les ingrédients, ils seront catégorisés (bleu ou vert). (Pour la
facilité de l’exercice, il me semble plus pertinent de découper en plusieurs tableaux ou
objets).
*/
const bases = ["roquette", "laitue", "pates" , "Mâche" , "Iceberg" , "Pousse d'épinard" , "Pâtes Fusili" , "Quinoa"
,"Carotte" , "Pâtes complètes"];
const ingrédients = [ ["Betterave" ,"Vert"],[ "Carottes","Vert" ],[ "Champignons" ,"Bleu"],[ "Concombre","Vert" ],[ "Choux Rouges" ,"Vert" ],[ "Croûtons","Vert" ],
    [ "Emmental" ,"Vert"],[ "Jambon cru"  ,"Bleu"],[
, "Lentilles","Vert"],[ "Maïs ","Vert"],[ "Mimolette","Vert"],[ "Mozarella","Vert"],[
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

ingrédients.forEach(function (ingrédient) {
    console.log( ingrédient[1]);
});
/*
    2) Créer sur la partie principale un formulaire pour personnaliser sa salade. Il sera
basé sur les valeurs du tableau. Ainsi, le formulaire se découpera en plusieurs
parties. Un choix de base de salade (Requis, 1 seul choix possible), des choix
d’ingrédients (les ingrédients auront des prix variables, il faudra obligatoirement en
choisir 4), un choix unique de boisson, puis un select d’heure de livraison et les infos
de bases (nom/prénom/adresse/tel). Vous avez le choix des types d’input que vous
voulez mettre en place.
Le bouton envoyer ne sera cliquable que si le bon remplissage du form a eu lieu.

3) Au clic sur envoyer, stocker les datas en localstorage ou en dans le store si vous
êtes en Vue.JS, vider le formulaire par la suite.

4) Sur la partie sidebar, afficher les détails de la dernière commande. Si aucune
commande, afficher “aucune commande existante”
 */