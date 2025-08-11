import React from "react";
import "./BarraProgresso.css"; // Arquivo CSS separado

// Recebe totalTarefas e tarefasConcluidas como props
function BarraProgresso({ totalTarefas, tarefasConcluidas }) {
  // Evita divisão por zero
  const progresso =
    totalTarefas > 0
      ? (tarefasConcluidas / totalTarefas) * 100
      : 0;

  // Arredonda para evitar números quebrados grandes
  const progressoFormatado = Math.round(progresso);

  return (
    <div className="barra-container">
      <p>Progresso: {progressoFormatado}%</p>
      <div className="barra-fundo">
        <div
          className="barra-preenchida"
          style={{ width: `${progresso}%` }}
        ></div>
      </div>
    </div>
  );
}

export default BarraProgresso;
