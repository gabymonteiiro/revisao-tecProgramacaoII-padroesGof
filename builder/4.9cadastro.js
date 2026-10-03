class Estudante {
  constructor() {
    this.dados = {};
  }

  exibir() {
    console.log("dados");
    console.log(this.dados);
   
  }
}

// builder
class EstudanteBuilder {
  constructor(nome, curso) {
    this.estudante = new Estudante();
    this.estudante.dados.nome = nome;
    this.estudante.dados.curso = curso;
  }

  comEndereco(endereco) {
    this.estudante.dados.endereco = endereco;
    return this; 
  }

  comEmail(email) {
    this.estudante.dados.email = email;
    return this;
  }

  comCelular(celular) {
    this.estudante.dados.celular = celular;
    return this;
  }

  comResponsaveis(responsaveis) {
    this.estudante.dados.responsaveis = responsaveis;
    return this;
  }

  build() {
    return this.estudante;
  }
}



// 
const aluno1 = new EstudanteBuilder("Ana Silva", "Desenvolvimento de Software")
  .comEndereco("Rua das Flores, 123")
  .comEmail("ana@email.com")
  .comCelular("(11) 99999-8888")
  .comResponsaveis("Maria Silva (Mãe)")
  .build();

aluno1.exibir();

// 
const aluno2 = new EstudanteBuilder("Carlos Souza", "Redes de Computadores")
  .comEmail("carlos@email.com")
  .build();

aluno2.exibir();