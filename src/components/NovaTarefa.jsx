//componente responsavel por capturar os dados da nova tarefa

import {useState} from "react";
import "./NovaTarefa.css";

function NovaTarefa({onAdicionar}) {

    //estado para o texto digitado no input
    const [descricao, setDescricao] = useState("")

    //estado para o período selecionado(padrão manhã)
    const [periodo, setPeriodo] = useState ("Manhã");

    //função do botão "adicionar"
    function adicionar(){
        //validação para não adicionar string vazia
        if (descricao.trim()=== "") return;

        //chama a função recebida por prop para adicionar a tarefa no App, passando a descrição e período
        onAdicionar(descricao.trim(), periodo);

        //limpa o input e reseta o seletor 
        setDescricao("");
        setPeriodo("Manhã");

    }
    return(
        <div className="nova-tarefa-container">
         {/*input contrlado: value vem do estado controlado 'descricao' e onchange atualiza */}
        <input type="text"
        placeholder="Descrição da Tarefa"
        value={descricao}
        onChange={(e)=> setDescricao(e.target.value)}
        aria-label="Descrição da tarefa"
        className="input-descricao" 
        />
        {/*seletor de perído:valor vem do estado 'período' */}
        <select value={periodo}
        onChange={(e)=>setPeriodo(e.target.value)}
        aria-label= "Período"
        className= "select-periodo"
        >
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>

        </select>
        {/*Botão que chama o Adicionar ao ser clicado */}
        <button onClick={adicionar} className="btn-adicionar">
            Adicionar
        </button>

        </div>
    );
}
export default NovaTarefa;