import React from 'react'
import { useParams } from 'react-router-dom'


export default function ProcessSection(props){
    const {id} = useParams();

    const project = props.data.find((project) => project._id === id)

    return(
        <section class="process-section container">
        <div class="wrapper">
            <h2>
                The Process
            </h2>
            <div class="d-flex process-wrapper">
                {
                    project.process.map((item, index) => {
                        if (item.link == null) {
                            return(
                                <span>
                                    {item.title}
                                </span>
                            );
                        } else {
                            return(
                                <span><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a> -</span>
                            );
                            
                        }
                    })
                }
            </div>
        </div>
    </section>
    );
}