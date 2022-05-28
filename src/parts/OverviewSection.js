import React from 'react'
import { useParams } from 'react-router-dom'


export default function OverviewSection(props){
    const {id} = useParams();

    const project = props.data.find((project) => project._id === id)

    return(
        <section className="desc-section container">
            <p>
                {project.overview}
            </p>
        </section>
    );
}