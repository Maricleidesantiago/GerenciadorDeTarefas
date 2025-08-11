import React from "react";
import "./Tarefa.css";

function Tarefa({tarefas}) {

    //filtros de tarefas por periodo
    const tarefasManha = tarefas.filter(t => t.periodo === "Manhã")
    const tarefasTarde = tarefas.filter(t => t.periodo === "Tarde")
    const tarefasNoite = tarefas.filter(t => t.periodo === "Noite")
//contar tarefas concluidas em um array
function contadorConcluidas(lista){
    return lista.filter(t=>t.concluida).length;
}

//mostar o texto de resumo no final de cada periodo
function resumoPeriodo(lista) {
    const concluidas = contadorConcluidas(lista);
    const total = lista.length;
return `${concluidas} de ${total} tarefas concluídas`;
}

return(
    <div className="tarefas-container">

        <div className="coluna">
            <h3>Manhã</h3>
            <ul>
                {tarefasManha.map(t=>(
                    <li key={t.id} className={t.concluida ? "concluida" : ""}>
                        {t.descricao}
                    </li>
                ))}
            </ul>
            <p className="resumo">{resumoPeriodo(tarefasManha)}</p>
        </div>

        <div className="coluna">
            <h3>Tarde</h3>
            <ul>
                {tarefasTarde.map(t=>(
                    <li key={t.id} className={t.concluida ? "concluida" : ""}>
                        {t.descricao}
                    </li>
                ))}
            </ul>
            <p className="resumo">{resumoPeriodo(tarefasTarde)}</p>
        </div>

        <div className="coluna">
            <h3>Noite</h3>
            <ul>
                {tarefasNoite.map(t=>(
                    <li key={t.id} className={t.concluida ? "concluida" : ""}>
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