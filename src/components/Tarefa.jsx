import "./Tarefa.css";

function Tarefa({ tarefas, onTarefaConcluida }) {
  // Filtra as tarefas por período
  const tarefasManha = tarefas.filter((t) => t.periodo === "Manhã");
  const tarefasTarde = tarefas.filter((t) => t.periodo === "Tarde");
  const tarefasNoite = tarefas.filter((t) => t.periodo === "Noite");

  // Conta quantas estão concluídas em uma lista
  function contadorConcluidas(lista) {
    return lista.filter((t) => t.concluida).length;
  }

  // Gera o texto de resumo de cada período
  function resumoPeriodo(lista) {
    const concluidas = contadorConcluidas(lista);
    const total = lista.length;
    return `${concluidas} de ${total} tarefas concluídas`;
  }

  return (
    <div className="tarefas-container">
      {/* Coluna Manhã */}
      <div className="coluna">
        <h3>Manhã</h3>
        <ul>
          {tarefasManha.map((t) => (
            <li key={t.id} className={t.concluida ? "concluida" : ""}>
              <input
                type="checkbox"
                checked={t.concluida}
                onChange={() => onTarefaConcluida(t.id)}
              />
              {t.descricao}
            </li>
          ))}
        </ul>
        <p className="resumo">{resumoPeriodo(tarefasManha)}</p>
      </div>

      {/* Coluna Tarde */}
      <div className="coluna">
        <h3>Tarde</h3>
        <ul>
          {tarefasTarde.map((t) => (
            <li key={t.id} className={t.concluida ? "concluida" : ""}>
              <input
                type="checkbox"
                checked={t.concluida}
                onChange={() => onTarefaConcluida(t.id)}
              />
              {t.descricao}
            </li>
          ))}
        </ul>
        <p className="resumo">{resumoPeriodo(tarefasTarde)}</p>
      </div>

      {/* Coluna Noite */}
      <div className="coluna">
        <h3>Noite</h3>
        <ul>
          {tarefasNoite.map((t) => (
            <li key={t.id} className={t.concluida ? "concluida" : ""}>
              <input
                type="checkbox"
                checked={t.concluida}
                onChange={() => onTarefaConcluida(t.id)}
              />
              {t.descricao}
            </li>
          ))}
        </ul>
        <p className="resumo">{resumoPeriodo(tarefasNoite)}</p>
      </div>
    </div>
  );
}

export default Tarefa;
