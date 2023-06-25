


# Rattrapage intégration de maquette 

ce projets consisste a recreer la maquette suivant et  d'en déduire une version mobile .

[lien youtube ](https://youtu.be/1lDGR7be3DI)

[google drive de la maquette ](https://drive.google.com/drive/folders/1s6tK-YvGq7gn9BGSvKJAZhI891wYIesJ)

![image](https://github.com/IIM-Creative-Technology/rattrapages-ImDimeh/assets/94788341/168cca3b-163b-49a8-a2d9-1e586f782881)


## architecture SMACSS

l'un des énoncé du projets demandait de faire le style avec une architecture SMACSS ( Scalable and Modular Architecture for CSS ) dont voici le fonctionnement 


-  Base file : Fichier CSS contenant les styles de base et de réinitialisation appliqués à l'ensemble du site.
  ```
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


   $black: #606060;
$green-base: #B2D234;


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  
  
  
}

```



*  Layout file : Fichier CSS qui définit la structure générale du site, telle que la grille, les zones de contenu principales, les barres latérales, etc.
```
nav{
...
}
footer{
...
}

```
+ Module file : Fichier CSS spécifique à un composant autonome et réutilisable du site, comme un bouton, un formulaire ou un carrousel.
je regroupe ici le boutton avec un fond vert car énroamement de leur propriété sont les meme ( les différence sont laissé au style.scss afin de  ne pas avoir le meme )
```
  section.presentation div.text_container button ,section.menu div.force button ,
 
section.form form button

 {
  background-color: base.$green-base;
    height: 60px;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 600;
    border-radius: 8px;
      border: none;
}

```
-  State file : Fichier CSS contenant les styles qui définissent des variations d'apparence basées sur l'état d'un élément, telles que survolé, actif ou désactivé , before et after .


```
section.menu div.menu_list div.menu.meilleur_vente::before {
    content: "La plus vendue !";
    
      position: absolute;
      top: -25px;
      right: 0px;
      width: 100%;
      height: 100%;
      background-color: #B2D234;
      color: white;
      font-weight: 400;
      height: 25px;
      width: 125px;
      font-size: 12px;
      text-align: center;

} 

```
* Theme file : Fichier CSS qui permet de personnaliser l'apparence du site en fonction de différents thèmes ou variations, comme un thème clair ou sombre.

# explication du code 

 ## cadrillage de la phtot :
 ![image](https://github.com/IIM-Creative-Technology/rattrapages-ImDimeh/assets/94788341/e9193f6b-66d1-47a6-b1e8-0d33326ef9e0)

 
afin de creer cette effet j'ai utiliser les pseudo élément before et after afin de creer deux bar que je peux plasser de manier a rendre comme un cadrillage 

```
section.form div.img::before {

  content: "";
    position: absolute;
    top: calc(50% - 10px);
    left: 0;
    width: 100%;
    height: 10px;
    background-color: white;
    z-index: 1;
}
section.form div.img::after {

    content: "";
      position: absolute;
      top: 0;
      left: calc(50% - 10px);
      width: 10px;
      height: 100%;
      background-color: white;
      z-index: 1;
}
```



## filtre dégradé  :
![image](https://github.com/IIM-Creative-Technology/rattrapages-ImDimeh/assets/94788341/6a64aedd-46d3-45f2-bb15-c45462667510)


afin de creer ce filtre j'ai aussi utiliser un pseudo éléments after et une opacité de 0.5 afin de pouvoir le supperpposer et creer un filtre 

```
section.main_section::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(160deg, rgba(96, 160, 216, 1) 12%, rgba(178, 210, 52, 1) 100%);
  opacity: 0.5;
  z-index: 1;
  /* Pour superposer l'élément pseudo sur l'image */
}
```

## Badges


Add badges from somewhere like: [shields.io](https://shields.io/)

[![Langage](https://img.shields.io/badge/langage-Javascript-yellow)](https://choosealicense.com/licenses/mit/)


[![Langage](https://img.shields.io/badge/langage-Css-blue)](https://choosealicense.com/licenses/mit/)

[![Langage](https://img.shields.io/badge/langage-Html-green)](https://choosealicense.com/licenses/mit/)

[![Langage](https://img.shields.io/badge/architecture-SMACSS-lightpink)](https://choosealicense.com/licenses/mit/)

[![Langage](https://img.shields.io/badge/syntaxe-SCSS-pink)](https://choosealicense.com/licenses/mit/)

## Authors

- [@ImDimeh](https://github.com/ImDimeh)

