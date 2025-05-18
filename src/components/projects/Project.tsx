import type React from "react"

type ProjectProps = {
    urlImg: string,
    titulo: string,
    Children?: React.ReactNode
}

export const Project = (props: ProjectProps) => {
    
    return(
        <div>
            <img src={props.urlImg} alt="" />
            <h1>{props.titulo}</h1>
            {props.Children}
        </div>
    )
}