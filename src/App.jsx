import {useState} from "react";
import NovaTarefa from "./components/NovaTarefa";
import Tarefa from "./components/Tarefa";

import "./App.css";


//função principal
function App() {
  //estado que guarda todas as tarefas em array
  const [tarefas, setTarefas] = useState([]);


//função que sera passada para o componente filho e adiciona uma nova tarefa
//recebe descrição(string) e periodo(manha, tarde, noite)
function adicionarTarefa(descricao, periodo){

  //cria um objeto tarefa 
  const novaTarefa = {
    id: Date.now(),//id unico
    descricao: descricao,//texto da tarefa
    periodo: periodo,
    concluida:false //estado inicial:pendente
  };
  //atualiza o estado adicionando a nova tarefa no final do array
  //função para garantir valor correto do estado anterior
  setTarefas((prev) => [...prev, novaTarefa]);
  }

  return(
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>

      {/*Componente filho que controla o input e o seletor*/ }
    <NovaTarefa onAdicionar={adicionarTarefa}/>

    {/*mapeando o estado tarefas para elementos*/ }
    <h2>Lista de tarefas</h2>
    <div className="lista-tarefas">
      
       <Tarefa tarefas ={tarefas} />
    </div>
    </div>
  )
}
export default App;

