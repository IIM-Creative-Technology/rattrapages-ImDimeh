import SwiftUI

  let ingredients = ["roquette", "laitue", "pates", "Mâche", "Iceberg", "Pousse d'épinard", "Pâtes Fusili", "Quinoa", "Carotte", "Pâtes complètes"]

struct ContentView: View {
    var body: some View {
        Text("Bonjour, Swift UI !")
            .font(.title)
            .foregroundColor(.blue)
        Form {
            ForEach(ingredients, id: \.self) { ingredient in
                Text(ingredient)
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
