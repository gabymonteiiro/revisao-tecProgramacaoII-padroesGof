class Motor {
  especificar() {}
}

class Roda {
  especificar() {}
}

class Freio {
  especificar() {}
}

// 

class MotorEsportivo extends Motor {
  especificar() {
    return "Motor V8 ";
  }
}

class RodaEsportiva extends Roda {
  especificar() {
    return "Rodas de Liga ";
  }
}

class FreioEsportivo extends Freio {
  especificar() {
    return "Freios de Cerâmica";
  }
}

//

class MotorPopular extends Motor {
  especificar() {
    return "Motor";
  }
}

class RodaPopular extends Roda {
  especificar() {
    return "Rodas";
  }
}

class FreioPopular extends Freio {
  especificar() {
    return "Freios";
  }
}

// 

class VeiculoFactory {
  criarMotor() {}

  criarRoda() {}

  criarFreio() {}
}

// 

class CarroEsportivoFactory extends VeiculoFactory {
  criarMotor() {
    return new MotorEsportivo();
  }

  criarRoda() {
    return new RodaEsportiva();
  }

  criarFreio() {
    return new FreioEsportivo();
  }
}

class CarroPopularFactory extends VeiculoFactory {
  criarMotor() {
    return new MotorPopular();
  }

  criarRoda() {
    return new RodaPopular();
  }

  criarFreio() {
    return new FreioPopular();
  }
}

// 

class SimuladorVeiculo {
  constructor(factory) {
    this.motor = factory.criarMotor();
    this.roda = factory.criarRoda();
    this.freio = factory.criarFreio();
  }

  exibirFichaTecnica() {
    console.log(`- Motor: ${this.motor.especificar()}`);
    console.log(`- Roda: ${this.roda.especificar()}`);
    console.log(`- Freio: ${this.freio.especificar()}`);
    console.log("--------------------------------------------------");
  }
}

// 

console.log("=== MONTAGEM DO VEÍCULO ESPORTIVO ===");
const carroEsportivo = new SimuladorVeiculo(new CarroEsportivoFactory());
carroEsportivo.exibirFichaTecnica();

console.log("=== MONTAGEM DO VEÍCULO POPULAR ===");
const carroPopular = new SimuladorVeiculo(new CarroPopularFactory());
carroPopular.exibirFichaTecnica();
