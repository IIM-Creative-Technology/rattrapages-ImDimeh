import SwiftUI

struct ContentView: View {
    let ingredients = ["roquette", "laitue", "pates", "Mâche", "Iceberg", "Pousse d'épinard", "Pâtes Fusili", "Quinoa", "Carotte", "Pâtes complètes"]
    @State private var selectedIngredient = ""

    var body: some View {

        NavigationView {
            VStack {
                Text("Bonjour, Swift UI !")
                    .font(.title)
                    .foregroundColor(.blue)
                
                Form {
                    Picker("Ingrédient", selection: $selectedIngredient) {
                        ForEach(ingredients, id: \.self) { ingredient in
                            Text(ingredient)
                        }
                    }
                }
            }
            .navigationTitle("Ingrédients")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
