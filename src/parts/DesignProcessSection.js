import React from 'react'
import { useParams } from 'react-router-dom'


export default function DesignProcessSection(props){
    const {id} = useParams();

    const project = props.data.find((project) => project._id === id)

    return(
        <section className="container container-fluid">
            {
                project.designProcess.map((item, index) => {
                    return(
                        <div className="overview-section">
                            <h2 className="text-center">
                                {item.title}
                            </h2>
                            {
                                item.arrayStep.map((process) => {
                                    return(
                                        <div className="overview-content">
                                            <h3>
                                                {process.name}
                                            </h3>
                                            <p>
                                                {process.desc}
                                            </p>
                                            <div className="text-center image my-5">
                                                <img src={process.image} className="image-process img-fluid" alt={process.name}></img>
                                            </div>
                                        </div>
                                    ); 
                                })
                            }
                        </div>
                    );
                })
            }
        </section>
    );
}