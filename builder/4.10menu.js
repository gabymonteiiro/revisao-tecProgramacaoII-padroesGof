// menu
class Menu {
  constructor() {
    this.titulo = "";
    this.icone = "";
    this.atalho = "";
    this.submenus = [];
  }

  exibir(nivel = 0) {
    const identacao = "  ".repeat(nivel);
    let info = `${identacao} ${this.titulo}`;
    if (this.icone) info += ` [Ícone: ${this.icone}]`;
    if (this.atalho) info += ` (Atalho: ${this.atalho})`;
    
    console.log(info);

   
    this.submenus.forEach(sub => sub.exibir(nivel + 1));
  }
}

// builder
class MenuBuilder {
  constructor(titulo) {
    this.menu = new Menu();
    this.menu.titulo = titulo;
  }

  comIcone(icone) {
    this.menu.icone = icone;
    return this; 
  }

  comAtalho(atalho) {
    this.menu.atalho = atalho;
    return this;
  }

  comSubmenu(menuFilho) {
    
    const sub = menuFilho instanceof MenuBuilder ? menuFilho.build() : menuFilho;
    this.menu.submenus.push(sub);
    return this;
  }

  build() {
    return this.menu;
  }
}

// 
const menuArquivo = new MenuBuilder("Arquivo")
  .comIcone("folder.png")
  .comSubmenu(new MenuBuilder("Novo").comAtalho("Ctrl+N"))
  .comSubmenu(new MenuBuilder("Salvar").comAtalho("Ctrl+S").comIcone("save.png"));

const menuPrincipal = new MenuBuilder("Menu Principal")
  .comIcone("home.png")
  .comSubmenu(menuArquivo) 
  .comSubmenu(
    new MenuBuilder("Editar")
      .comIcone("edit.png")
      .comSubmenu(new MenuBuilder("Recortar").comAtalho("Ctrl+X"))
  )
  .comSubmenu(new MenuBuilder("Sair").comAtalho("Alt+F4"))
  .build();


menuPrincipal.exibir();