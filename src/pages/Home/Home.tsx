import ImgProfile from '../../assets/img-profile.png'
import Banner from '../../components/Banner/Banner'
import { Project } from '../../components/projects/Project'
import style from '../Home/Home.module.css'


const Home = () => {
  return (
    <>
      <Banner/>
      <div className={style.HomeContainer}>
          <img src={ImgProfile} alt="imagem estilo anime, com personagem principal um jovem de 20 anos, loiro usando oculos, concentrado digitando no notbook" className={style.imgProfile}/>
          <section className={style.ParagrafoContainer}>
            <p>Sou estudante de Engenharia de Software, cursando o terceiro periodo e com previsão de formatura para 2027. Atualmente estou focado nos estudos para web front-end, desenvolvendo meus conhecimentos em React usando TypeScript. Após ter uma base solida no React.js, pretendo me especializar também na parte mobile dessa tecnologia, o React Native. Aos poucos quero me desenvolver no back-end, buscando meu maior objetivo pessoal que é ser <span>Desenvolvedor FullStack especializado em Blockchain</span></p>
          </section>

          <section className={style.ContainerProjectHome}>
            <h2>Projetos</h2>
            <div>
              <Project urlImg='' titulo=''>

              </Project>
            </div>
          </section>
      </div>
    </>
  )
}

export default Home