class Idioma {
  obterMensagemBoasVindas() {}
}

class Layout {
  formatarMoeda(valor) {}
}

class Menu {
  renderizarOpcoes() {}
}

// 

class IdiomaBrasil extends Idioma {
  obterMensagemBoasVindas() {
    return "Olá! Bem-vindo ao seu Banco Digital.";
  }
}

class LayoutBrasil extends Layout {
  formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);
  }
}

class MenuBrasil extends Menu {
  renderizarOpcoes() {
    return "Menu BR: [1] Extrato | [2] Transferência PIX | [3] Cartões";
  }
}

// 

class IdiomaEUA extends Idioma {
  obterMensagemBoasVindas() {
    return "Hello! Welcome to your Digital Bank.";
  }
}

class LayoutEUA extends Layout {
  formatarMoeda(valor) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valor);
  }
}

class MenuEUA extends Menu {
  renderizarOpcoes() {
    return "Menu US: [1] Statement | [2] Wire Transfer | [3] Cards";
  }
}

// 

class BancoLocalizacaoFactory {
  criarIdioma() {}

  criarLayout() {}

  criarMenu() {}
}

// 

class BancoBrasilFactory extends BancoLocalizacaoFactory {
  criarIdioma() {
    return new IdiomaBrasil();
  }

  criarLayout() {
    return new LayoutBrasil();
  }

  criarMenu() {
    return new MenuBrasil();
  }
}

class BancoEUAFactory extends BancoLocalizacaoFactory {
  criarIdioma() {
    return new IdiomaEUA();
  }

  criarLayout() {
    return new LayoutEUA();
  }

  criarMenu() {
    return new MenuEUA();
  }
}

// 

class SistemaBancario {
  constructor(factory) {
    this.idioma = factory.criarIdioma();
    this.layout = factory.criarLayout();
    this.menu = factory.criarMenu();
  }

  exibirPainel(saldo) {
    console.log(this.idioma.obterMensagemBoasVindas());
    console.log(`Saldo disponível: ${this.layout.formatarMoeda(saldo)}`);
    console.log(this.menu.renderizarOpcoes());
    console.log("--------------------------------------------------");
  }
}

// 
console.log("=== PAINEL DO CLIENTE NO BRASIL ===");
const bancoBR = new SistemaBancario(new BancoBrasilFactory());
bancoBR.exibirPainel(2500.50);

console.log("=== PAINEL DO CLIENTE NOS EUA ===");
const bancoUS = new SistemaBancario(new BancoEUAFactory());
bancoUS.exibirPainel(2500.50);