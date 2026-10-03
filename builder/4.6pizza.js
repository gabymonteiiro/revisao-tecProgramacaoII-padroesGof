// pizza
class Pizza {
  constructor() {
    this.ingredientes = [];
  }

  exibir() {
    console.log("Pizza com:", this.ingredientes.join(", "));
  }
}

// builder
class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }

  comMassa(tipo) {
    this.pizza.ingredientes.push(`Massa ${tipo}`);
    return this; 
  }

  comMolho(tipo) {
    this.pizza.ingredientes.push(`Molho de ${tipo}`);
    return this;
  }

  comQueijo(tipo) {
    this.pizza.ingredientes.push(`Queijo ${tipo}`);
    return this;
  }

  addIngrediente(nome) {
    this.pizza.ingredientes.push(nome);
    return this;
  }

  // 
  build() {
    return this.pizza;
  }
}



const minhaPizza = new PizzaBuilder()
  .comMassa("Fina")
  .comMolho("Tomate")
  .comQueijo("Mussarela")
  .addIngrediente("Calabresa")
  .addIngrediente("Cebola")
  .build();

minhaPizza.exibir();
