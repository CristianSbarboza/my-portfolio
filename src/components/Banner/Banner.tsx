import BannerImg from '../../assets/banner.jpeg'
import style from './Banner.module.css'

const Banner = () => {
    return(
        <div className={style.ContainerBanner}>
            <img src={BannerImg} alt="Banneer de fundo azul, mostrando as tecnlogias que o Cristian conhece" className={style.Banner}/>
            <div className={style.ContainerTitle}>
                <h1>Olá, meu nome é Cristian</h1>
                <h2>Bem vindo ao meu portifolio</h2>
            </div>
        </div>
    )
}

export default Banner