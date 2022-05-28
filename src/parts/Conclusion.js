import React from 'react'
import { useParams } from 'react-router-dom'


export default function Conclusion(props){
    const {id} = useParams();

    const project = props.data.find((project) => project._id === id)

    return(
        <section class="default-section container">
        <div>
            <h2>
                Results
            </h2>
            <p>
                {project.conclusion}
            </p>
        </div>
    </section>
    );
}