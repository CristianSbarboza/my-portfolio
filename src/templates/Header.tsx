// import { Link } from 'react-router-dom'
import styele from './Templates.module.css'

const Header = () => {
    return (
        <nav className={styele.nav}>

            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
            <a href='/Cristian_Barboza_Curriculo_ATS.pdf' target="_blank" rel="noopener noreferrer">Currículo</a>
        </nav>
    )
}

export default Header