import React from 'react'
import { useParams } from 'react-router-dom'


export default function ProjectImage(props){
    const {id} = useParams();
    const project = props.data.find((project) => project._id === id)

    return(
        <section className="title-img container container-fluid">
            <div className="row">
                <img src={project.image} alt={project.image}/>
            </div>
        </section>
    );
}