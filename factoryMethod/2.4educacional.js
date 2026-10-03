class Prova {
  gerarProva() {}
}

//subclasses

class ProvaObjetiva extends Prova {
  gerarProva() {
    return "Prova Objetiva";
  }
}

class ProvaDissertativa extends Prova {
  gerarProva() {
    return "Prova Dissertativa";
  }
}

class ProvaPratica extends Prova {
  gerarProva() {
    return "Prova Prática";
  }
}

class SistemaEducacional {

  criarProva(tipo) {
    if (tipo === "objetiva") return new ProvaObjetiva();
    if (tipo === "dissertativa") return new ProvaDissertativa();
    if (tipo === "pratica") return new ProvaPratica();
  }

  aplicarProva(tipo) {
    const prova = this.criarProva(tipo);
    return `[Sistema]: ${prova.gerarProva()}`;
  }
}


const sistema = new SistemaEducacional();


console.log(sistema.aplicarProva("objetiva"));
console.log(sistema.aplicarProva("dissertativa"));
console.log(sistema.aplicarProva("pratica"));