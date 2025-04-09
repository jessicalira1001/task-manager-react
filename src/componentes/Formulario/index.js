import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'

const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo' ]


const Formulario = () => {
    return(
        <section className="formulario">
            <form>
            <h2>Preencha as informações para adicionar uma tarefa</h2>
                <CampoTexto  obrigatorio={true} label ="Tarefa" placeholder = "Digite a tarefa"></CampoTexto>
                <ListaSuspensa obrigatorio={true} label='Dia' itens={dias}></ListaSuspensa>

            </form>
        </section>
    )
}

export default Formulario;