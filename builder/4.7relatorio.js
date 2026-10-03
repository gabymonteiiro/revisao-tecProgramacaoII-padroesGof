// Produto
class Relatorio {
  constructor() {
    this.partes = [];
  }

  exibir() {
    console.log("Relatório montado:", this.partes.join(" | "));
  }
}

// Builder 
class RelatorioBuilder {
  constructor() {
    this.relatorio = new Relatorio();
  }

  comCapa(titulo) {
    this.relatorio.partes.push(`Capa: ${titulo}`);
    return this;
  }

  comSumario() {
    this.relatorio.partes.push("Sumário");
    return this;
  }

  comConteudo(texto) {
    this.relatorio.partes.push(`Conteúdo: ${texto}`);
    return this;
  }

  comGrafico(tipo) {
    this.relatorio.partes.push(`Gráfico: ${tipo}`);
    return this;
  }

  build() {
    return this.relatorio;
  }
}


class Diretor {
  static criarRelatorioCompleto(builder) {
    return builder
      .comCapa("Relatório Anual")
      .comSumario()
      .comConteudo("Dados do ano de 2026")
      .comGrafico("Pizza")
      .build();
  }
}

// 

const builder = new RelatorioBuilder();


const relatorioPronto = Diretor.criarRelatorioCompleto(builder);
relatorioPronto.exibir();


const relatorioCustom = new RelatorioBuilder()
  .comCapa("Resumo Curto")
  .comConteudo("Apenas o texto")
  .build();

relatorioCustom.exibir();