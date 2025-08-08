//componente respon´svel por capturar os dados da nova tarefa

import {useState} from "react";

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
        <div style={{marginBotton:16}}>
         {/*input contrlado: value vem do estado controlado 'descricao' e onchange atualiza */}
        <input type="text"
        placeholder="Descrição da Tarefa"
        value={descricao}
        onChange={(e)=> setDescricao(e.target.value)}
        aria-label="Descrição da tarefa"
        style={{padding:"8px 12px", borderRadius:8, border: "1px solid #ccc", widt:300}} />
        {/*seletor de perído:valor vem do estado 'período' */}
        <select value={periodo}
        onChange={(e)=>setPeriodo(e.target.value)}
        aria-label= "Período"
        style={{marginLeft:12, padding: "8px 10px", borderRadius:8}}>

            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>

        </select>
        {/*Botão que chama o Adicionar ao ser clicado */}
        <button
        onClick={adicionar}
        style={{marginLeft:12, padding:"8px 16px", borderRadius:12,
            backgroundColor: "blue", color: "white", cursor:"pointer",
        }}
        >
            Adicionar
        </button>

        </div>
    );
}
export default NovaTarefa;