import React from 'react'
import { useParams } from 'react-router-dom'


export default function DefaultSection(props){
    const {id} = useParams();

    const project = props.data.find((project) => project._id === id)

    return(
        <section className="container">
            {
                project.arrayOverview.map((item, index) => {
                    return(
                        <div className="default-section">
                            <h2>
                                {item.title}
                            </h2>
                            <p>
                                {item.desc}
                            </p>
                        </div>
                    );
                })
            }
            
        </section>
    );
}