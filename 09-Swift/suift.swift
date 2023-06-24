import SwiftUI

struct ContentView: View {
    let ingredients = ["roquette", "laitue", "pates", "Mâche", "Iceberg", "Pousse d'épinard", "Pâtes Fusili", "Quinoa", "Carotte", "Pâtes complètes"]
    @State private var ingrédientChoisit = ""

    var body: some View {

        NavigationView {
            VStack {
                Image("logo")
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(height: 200)
                
                Text("Mongoo")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .padding()
                    }
            VStack {
            
                Form {
                    Picker("Ingrédient", selection: $ingrédientChoisit) {
                        ForEach(ingredients, id: \.self) { ingredient in
                            Text(ingredient)
                        }
                    }
                }

                Button(action: {
                    // Action du bouton "Commander"
                    print("Commande choisit : \(ingrédientChoisit)")
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
            .onChange(of: ingrédientChoisit) { newValue in
                isFormFilled = !newValue.isEmpty
            }
            }
            .navigationTitle("Ingrédients")
        }
    }


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}


