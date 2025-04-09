import CampoTexto from "../CampoTexto";
import './Formulario.css'

const Formulario = () => {
    return(
        <section className="formulario">
            <form>
            <h2>Preencha as informações para adicionar uma tarefa</h2>
                <CampoTexto  obrigatorio={true} label ="Tarefa" placeholder = "Digite a tarefa"></CampoTexto>
                

            </form>
        </section>
    )
}

export default Formulario;