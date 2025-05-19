import ImgProfile from '../../assets/img-profile.png';
import Banner from '../../components/Banner/Banner';

import { Project } from '../../components/projects/Project';
import style from '../Home/Home.module.css';

import ConversorDeMedidasImg from '../../assets/capaProjects/ConversorDeMedidas.png';

import gereQrCodeImg from '../../assets/capaProjects/gereqrcode.png';

import ProjectHumsImg from '../../assets/capaProjects/projectHums.png';
import Form from '../../components/form/Form';

const Home = () => {
  return (
    <div className={style.HomeContainer}>
      <Banner />
      
      <section className={style.ParagrafoContainer} id='sobre'>
        <img
          src={ImgProfile}
          alt='imagem estilo anime, com personagem principal um jovem de 20 anos, loiro usando oculos, concentrado digitando no notbook'
          className={style.imgProfile}
        />
      
        <p>
          Sou estudante de Engenharia de Software, cursando o terceiro periodo
          e com previsão de formatura para 2027. Atualmente estou focado nos
          estudos para web front-end, desenvolvendo meus conhecimentos em
          React usando TypeScript. Após ter uma base solida no React.js,
          pretendo me especializar também na parte mobile dessa tecnologia, o
          React Native. Aos poucos quero me desenvolver no back-end, buscando
          meu maior objetivo pessoal que é ser{' '}
          <span>Desenvolvedor FullStack especializado em Blockchain</span>
        </p>
      </section>

      <section className={style.ContainerProjectHome} id='projetos'>
        <h2 className={style.titleSectionProject}>Projetos</h2>
        <div>
          <Project urlImg={ConversorDeMedidasImg} titulo='Conversor de medidas aeronalticas' link='https://fuelcalculatoraeronautics.netlify.app'/>

          <Project urlImg={gereQrCodeImg} titulo='Gere QrCode' link='https://gereqrcode.netlify.app'/>

          <Project urlImg={ProjectHumsImg} titulo='Analise Hums AW139' link='https://github.com/CristianSbarboza/projectHums'/>
          
        </div>
      </section>

      <section className={style.ContainerContactHome} id='contato'>
        <h2 className={style.TitleContainerContact}>Entre em contato</h2>
        <Form/>
      </section>
    </div>
  );
};

export default Home;
