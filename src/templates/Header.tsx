import { Link } from 'react-router-dom'
import styele from './Templates.module.css'

const Header = () => {
    return (
        <nav className={styele.nav}>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/contato">Contato</Link>
        </nav>
    )
}

export default Header