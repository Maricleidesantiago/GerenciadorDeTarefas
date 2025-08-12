// Importa dependências do React e os estilos globais
import { useState, useEffect } from "react";
import "./App.css";

// Importa os componentes filhos
import NovaTarefa from "./components/NovaTarefa";
import Tarefa from "./components/Tarefa";
import BarraProgresso from "./components/BarraProgresso";

function App() {
  // Estado que armazena todas as tarefas
  const [tarefas, setTarefas] = useState(() =>{
    const tarefasSalvas = localStorage.getItem("tarefas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });

  //useEffect para salvar tarefas no localStorage sempre que mudarem
  useEffect(() =>{
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]); //roda toda vez que as tarefas mudarem

  const totalTarefas = tarefas.length;
  const tarefasConcluidas = tarefas.filter((t) => t.concluida).length;

  // Função que adiciona uma nova tarefa
  function adicionarTarefa(descricao, periodo) {
    const novaTarefa = {
      id: Date.now(),
      descricao,
      periodo,
      concluida: false,
    };
    setTarefas((prev) => [...prev, novaTarefa]);
  }

  // Função para alternar o estado de concluída/não concluída
  function tarefaConcluida(id) {
    setTarefas((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }

  return (
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>

      {/* Barra de progresso */}
      <BarraProgresso
        totalTarefas={totalTarefas}
        tarefasConcluidas={tarefasConcluidas}
      />

      {/* Componente para adicionar novas tarefas */}
      <NovaTarefa onAdicionar={adicionarTarefa} />

      {/* Lista de tarefas agrupadas por período */}
      <Tarefa tarefas={tarefas} onTarefaConcluida={tarefaConcluida} />
    </div>
  );
}

export default App;
