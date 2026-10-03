class ElementoUI {
  renderizar() {}
}

class BotaoWindows extends ElementoUI {
  renderizar() {
    return "Renderizando Botão Windows";
  }
}

class BotaoMac extends ElementoUI {
  renderizar() {
    return "Renderizando Botão macOS";
  }
}

class BotaoLinux extends ElementoUI {
  renderizar() {
    return "Renderizando Botão Linux";
  }
}
//
class UIFactory {
  criarBotao(plataforma) {
    const sistema = plataforma.toLowerCase();

    if (sistema === "windows") return new BotaoWindows();
    if (sistema === "mac" || sistema === "macos") return new BotaoMac();
    if (sistema === "linux") return new BotaoLinux();
  }


  exibirInterface(plataforma) {
    const botao = this.criarBotao(plataforma);
    console.log(botao.renderizar());
  }
}

//
const factory = new UIFactory();

factory.exibirInterface("windows");
factory.exibirInterface("mac");
factory.exibirInterface("linux");