import ImgProfile from '../../assets/img-profile.png'


const Home = () => {
  return (
    <>
        <div>
            <img src={ImgProfile} alt="imagem estilo anime, com personagem principal um jovem de 20 anos, loiro usando oculos, concentrado digitando no notbook" className='img-profile'/>
            <h1>Olá, meu nome é Cristian</h1>
            <h2>Bem vindo ao meu portifolio😊</h2>
        </div>
    </>
  )
}

export default Home