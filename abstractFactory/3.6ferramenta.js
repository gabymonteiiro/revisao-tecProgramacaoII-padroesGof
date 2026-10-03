class Botao {
  renderizar() {}
}

class Menu {
  renderizar() {}
}

class Janela {
  renderizar() {}
}

// 

class BotaoWindows extends Botao {
  renderizar() {
    return "[Botão Windows]";
  }
}

class MenuWindows extends Menu {
  renderizar() {
    return "[Menu Windows]";
  }
}

class JanelaWindows extends Janela {
  renderizar() {
    return "[Janela Windows]";
  }
}

//

class BotaoMac extends Botao {
  renderizar() {
    return "[Botão macOS]";
  }
}

class MenuMac extends Menu {
  renderizar() {
    return "[Menu macOS]";
  }
}

class JanelaMac extends Janela {
  renderizar() {
    return "[Janela macOS]";
  }
}

//

class UIFactory {
  criarBotao() {}

  criarMenu() {}

  criarJanela() {}
}

//

class WindowsUIFactory extends UIFactory {
  criarBotao() {
    return new BotaoWindows();
  }

  criarMenu() {
    return new MenuWindows();
  }

  criarJanela() {
    return new JanelaWindows();
  }
}

class MacUIFactory extends UIFactory {
  criarBotao() {
    return new BotaoMac();
  }

  criarMenu() {
    return new MenuMac();
  }

  criarJanela() {
    return new JanelaMac();
  }
}

// 

class Aplicacao {
  constructor(factory) {
    
    this.botao = factory.criarBotao();
    this.menu = factory.criarMenu();
    this.janela = factory.criarJanela();
  }

  renderizarTela() {
    console.log(this.janela.renderizar());
    console.log(this.menu.renderizar());
    console.log(this.botao.renderizar());
    console.log("--------------------------------------------------");
  }
}

// 

console.log("=== RENDERIZANDO INTERFACE NO WINDOWS ===");
const appWindows = new Aplicacao(new WindowsUIFactory());
appWindows.renderizarTela();

console.log("=== RENDERIZANDO INTERFACE NO macOS ===");
const appMac = new Aplicacao(new MacUIFactory());
appMac.renderizarTela();