class Transporte {
  entregar() {}
}

//subclasses de Transporte

class Caminhao extends Transporte {
  entregar() {
    return "Entrega realizada por caminhao.";
  }
}


class Navio extends Transporte {
  entregar() {
    return "Entrega realizada por navio";
  }
}


class Drone extends Transporte {
  entregar() {
    return "Entrega realizada por drone";
  }
}

class Logistica {
  criarTransporte(tipo) {
    if (tipo === "caminhao") return new Caminhao();
    if (tipo === "navio") return new Navio();
    if (tipo === "drone") return new Drone();
  }
}

const logistica = new Logistica();

//
const transporte1 = logistica.criarTransporte("caminhao");
console.log(transporte1.entregar());