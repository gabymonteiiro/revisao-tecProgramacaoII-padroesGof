// grade
class GradeHoraria {
  constructor() {
    this.aulas = [];
  }

  exibir() {
    console.log("=== GRADE HORÁRIA SEMANAL ===");
    if (this.aulas.length === 0) {
      console.log("Nenhuma disciplina cadastrada.");
      return;
    }
    this.aulas.forEach(aula => {
      console.log(`- [${aula.dia} ${aula.horario}] ${aula.disciplina} (Sala: ${aula.sala})`);
    });
    
  }
}

// builder
class GradeBuilder {
  constructor() {
    this.grade = new GradeHoraria();
  }

  adicionarDisciplina(disciplina, dia, horario, sala) {
    this.grade.aulas.push({ disciplina, dia, horario, sala });
    return this; 
  }

  build() {
    return this.grade;
  }
}

// 
const gradeAluno = new GradeBuilder()
  .adicionarDisciplina("Programação Orientada a Objetos", "Segunda", "19:00", "Lab 04")
  .adicionarDisciplina("Redes de Computadores", "Terca", "20:50", "Lab 02")
  .adicionarDisciplina("Engenharia de Software", "Quarta", "19:00", "Sala 12")
  .build();

gradeAluno.exibir();