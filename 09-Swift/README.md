

# Rattrapage SwuiftUI
En utilisant vos connaissances de cours, vous expliquerez dans un document et dans votre vidéo avec un maximum de détails + des snippets de code (sans forcément les compiler, simplement écrit à la volée sans testing) les différentes étapes à suivre pour concevoir une interface de commande côté fron


[lien youtube](https://youtu.be/6ozBj61eBnA)

[google drive ](https://drive.google.com/drive/folders/1s6tK-YvGq7gn9BGSvKJAZhI891wYIesJ)

# explication du code 

## "header"
je met tout ces élément dans un Vstack afin de les aligner verticalement afin de crrer une sorte de header 
```
 VStack {
                HStack {
                    Image("logo")
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(height: 200)
                    
                    Text("Mongoo")
                        .font(.largeTitle)
                        .fontWeight(.bold)
                        .padding()
                }

```

## input des ingrédiants 
Le picker nous permet de gerer dynamiquement les choix pour les ingrédiants 
```

Section(header: Text("Ingrédient")) {
                        Picker("Ingrédient", selection: $ingredientChoisi) {
                            ForEach(ingredients, id: \.self) { ingredient in
                                Text(ingredient)
                            }
                        }
                    }
```

## vérification des donné du formulaire 
ici le boutton commander est désactiver tant que les donné ne sont pas remplie .
tous ceci grace a la ligne  .disabled(!isFormFilled) qui verifie la condition .

```

Text("Commander")
                        .font(.title2)
                        .fontWeight(.bold)
                        .foregroundColor(.white)
                        .padding()
                        .background(isFormFilled ? Color.blue : Color.gray)
                        .cornerRadius(10)
                }
                .disabled(!isFormFilled)
                .padding()
            }
            .navigationTitle("Ingrédients")
            .onChange(of: ingredientChoisi) { newValue in
                isFormFilled = !newValue.isEmpty && !nom.isEmpty && !prenom.isEmpty && !adresse.isEmpty && !phoneNumber.isEmpty
            }

``` 

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![Langage](https://img.shields.io/badge/langage-Swuift-orange)](https://choosealicense.com/licenses/mit/)


[![Langage](https://img.shields.io/badge/editeur-VSCODE-blue)](https://choosealicense.com/licenses/mit/)


## Authors

- [@ImDimeh](https://github.com/ImDimeh)

