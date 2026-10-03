class Servico {
  executar() {
}
}

class Consulta extends Servico {
  executar() {
    return "Agendamento confirmado: Consulta";
  }
}

class Reparo extends Servico {
  executar() {
    return "Agendamento confirmado: Reparo técnico";
  }
}

class Entrega extends Servico {
  executar() {
    return "Agendamento confirmado: Entrega programada";
  }
}


class Agendador {
  criarServico() {}

  agendar() {
    const servico = this.criarServico(); 
    return `[Sistema de Agendamento]: ${servico.executar()}`;
  }
}



class AgendadorConsulta extends Agendador {
  criarServico() {
    return new Consulta();
  }
}

class AgendadorReparo extends Agendador {
  criarServico() {
    return new Reparo();
  }
}

class AgendadorEntrega extends Agendador {
  criarServico() {
    return new Entrega();
  }
}

//
function processarAgendamento(agendador) {
  console.log(agendador.agendar());
}

processarAgendamento(new AgendadorConsulta());
processarAgendamento(new AgendadorReparo());
processarAgendamento(new AgendadorEntrega());