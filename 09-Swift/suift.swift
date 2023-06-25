import SwiftUI

struct ContentView: View {
    let ingredients = ["roquette", "laitue", "pates", "Mâche", "Iceberg", "Pousse d'épinard", "Pâtes Fusili", "Quinoa", "Carotte", "Pâtes complètes"]
    @State private var ingredientChoisi = ""
    @State private var time: Date = Date()
    @State private var nom: String = ""
    @State private var prenom: String = ""
    @State private var adresse: String = ""
    @State private var phoneNumber: String = ""
    @State private var isFormFilled = false
    
    var body: some View {
        NavigationView {
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
                
                Form {
                    Section(header: Text("Ingrédient")) {
                        Picker("Ingrédient", selection: $ingredientChoisi) {
                            ForEach(ingredients, id: \.self) { ingredient in
                                Text(ingredient)
                            }
                        }
                    }
                    
                    Section(header: Text("Choisissez une heure de livraison")) {
                        DatePicker("", selection: $time, displayedComponents: .hourAndMinute)
                            .datePickerStyle(.wheel)
                            .labelsHidden()
                            .minimumDate(Date().addingTimeInterval(9 * 3600))
                            .maximumDate(Date().addingTimeInterval(18 * 3600))
                    }
                    
                    Section(header: Text("Nom")) {
                        TextField("Nom", text: $nom)
                    }
                    
                    Section(header: Text("Prénom")) {
                        TextField("Prénom", text: $prenom)
                    }
                    
                    Section(header: Text("Adresse de livraison")) {
                        TextField("Adresse", text: $adresse)
                    }
                    
                    Section(header: Text("Numéro de téléphone")) {
                        TextField("Numéro de téléphone", text: $phoneNumber)
                            .keyboardType(.phonePad)
                    }
                }
                
                Button(action: {
                    // Action du bouton "Commander"
                    print("Commande choisie : \(ingredientChoisi)")
                    print("Heure de livraison : \(time)")
                    print("Nom : \(nom)")
                    print("Prénom : \(prenom)")
                    print("Adresse de livraison : \(adresse)")
                    print("Numéro de téléphone : \(phoneNumber)")
                }) {
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
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

