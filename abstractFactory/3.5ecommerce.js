
class ProdutoFisico {
  exibirDetalhes() {}
}

class Embalagem {
  preparar() {}
}

//
class Smartphone extends ProdutoFisico {
  exibirDetalhes() {
    return "Produto: Smartphone";
  }
}

class CaixasProtecaoAnterior extends Embalagem {
  preparar() {
    return "Embalagem: Caixa com plástico";
  }
}

// 

class CamisetaCustomizada extends ProdutoFisico {
  exibirDetalhes() {
    return "Produto: Camiseta";
  }
}

class SacolaEspecial extends Embalagem {
  preparar() {
    return "Embalagem: Sacola ecológica";
  }
}

// 
class EcommerceFactory {
  criarProduto() {}

  criarEmbalagem() {}
}

//

class EletronicosFactory extends EcommerceFactory {
  criarProduto() {
    return new Smartphone();
  }

  criarEmbalagem() {
    return new CaixasProtecaoAnterior();
  }
}

class ModaFactory extends EcommerceFactory {
  criarProduto() {
    return new CamisetaCustomizada();
  }

  criarEmbalagem() {
    return new SacolaEspecial();
  }
}

//

function processarPedido(factory) {

  const produto = factory.criarProduto();
  const embalagem = factory.criarEmbalagem();

  console.log(produto.exibirDetalhes());
  console.log(embalagem.preparar());
  console.log("--------------------------------------------------");
}


console.log("=== PROCESSANDO PEDIDO: LINHA ELETRÔNICOS ===");
processarPedido(new EletronicosFactory());

console.log("=== PROCESSANDO PEDIDO: LINHA MODA ===");
processarPedido(new ModaFactory());