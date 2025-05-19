

import style from './Project.module.css'

type ProjectProps = {
    urlImg: string,
    titulo: string,
    link: string
}

export const Project = (props: ProjectProps) => {
    
    return(
        <div className={style.containerProjectCard}>
            <img src={props.urlImg} alt="" />
            <h2>{props.titulo}</h2>
            <a href={props.link} target="_blank">Acessar site</a>
        </div>
    )
}