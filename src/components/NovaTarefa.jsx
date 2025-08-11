import { useState } from "react";
import "./NovaTarefa.css";

function NovaTarefa({ onAdicionar }) {
  // Estado do texto digitado
  const [descricao, setDescricao] = useState("");

  // Estado do período selecionado (valor padrão = Manhã)
  const [periodo, setPeriodo] = useState("Manhã");

  // Função executada ao clicar no botão "Adicionar"
  function adicionar() {
    // Evita adicionar tarefas vazias
    if (descricao.trim() === "") return;

    // Chama a função recebida via prop para adicionar no App.jsx
    onAdicionar(descricao.trim(), periodo);

    // Limpa o input e reseta o período
    setDescricao("");
    setPeriodo("Manhã");
  }

  return (
    <div className="nova-tarefa-container">
      {/* Campo de texto controlado */}
      <input
        type="text"
        placeholder="Descrição da Tarefa"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        aria-label="Descrição da tarefa"
        className="input-descricao"
      />

      {/* Select para escolher o período */}
      <select
        value={periodo}
        onChange={(e) => setPeriodo(e.target.value)}
        aria-label="Período"
        className="select-periodo"
      >
        <option value="Manhã">Manhã</option>
        <option value="Tarde">Tarde</option>
        <option value="Noite">Noite</option>
      </select>

      {/* Botão para adicionar a tarefa */}
      <button onClick={adicionar} className="btn-adicionar">
        Adicionar
      </button>
    </div>
  );
}

export default NovaTarefa;
