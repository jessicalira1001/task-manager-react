import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'
import Botao from "../Botao";

const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo' ]

const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log("form foi submetido")
}

const Formulario = () => {
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha as informações para adicionar uma tarefa</h2>
                <CampoTexto  obrigatorio={true} label ="Tarefa" placeholder = "Digite a tarefa"></CampoTexto>
                <ListaSuspensa obrigatorio={true} label='Dia' itens={dias}></ListaSuspensa>
                <Botao>Criar tarefa</Botao>
            </form>
        </section>
    )
}

export default Formulario;