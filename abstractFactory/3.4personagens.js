class Arma {
  atacar() {}
}

class Habilidade {
  usar() {}
}

//
class EspadaSagrada extends Arma {
  atacar() {
    return "dano de luz";
  }
}

class BencaoDivina extends Habilidade {
  usar() {
    return "Restaura a vida"
  }
}

//

class MachadoSombrio extends Arma {
  atacar() {
    return "dano de escuridão";
  }
}

class InvocacaoDasSombras extends Habilidade {
  usar() {
    return "Invoca monstros";
  }
}

//
class PersonagemFactory {
  criarArma() {}

  criarHabilidade() {}
}

//

class HeroiFactory extends PersonagemFactory {
  criarArma() {
    return new EspadaSagrada();
  }

  criarHabilidade() {
    return new BencaoDivina();
  }
}

class VilaoFactory extends PersonagemFactory {
  criarArma() {
    return new MachadoSombrio();
  }

  criarHabilidade() {
    return new InvocacaoDasSombras();
  }
}

//
function equiparPersonagem(factory) {
  const arma = factory.criarArma();
  const habilidade = factory.criarHabilidade();

  console.log(arma.atacar());
  console.log(habilidade.usar());
  console.log("--------------------------------------------------");
}


console.log("=== CRIANDO PERSONAGEM HERÓICO ===");
equiparPersonagem(new HeroiFactory());

console.log("=== CRIANDO PERSONAGEM VILÃO ===");
equiparPersonagem(new VilaoFactory());