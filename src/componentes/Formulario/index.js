import CampoTexto from "../CampoTexto";
import './Formulario.css'

const Formulario = () => {
    return(
        <section className="formulario">
            <form>
            <h2>Preencha as informações para adicionar uma tarefa</h2>
                <CampoTexto  placeholder = "Digite a tarefa"></CampoTexto>
                <CampoTexto  placeholder = "Adicione uma imagem"></CampoTexto>

            </form>
        </section>
    )
}

export default Formulario;