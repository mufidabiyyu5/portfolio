import React from 'react'

import Notes from '../assets/icon/note.svg'


export default function SelectedProjects(props){
    return(
        <main className="container">
            <section className="content-section">
                <h2>
                    Selected Projects
                </h2>
                {
                    props.data.map((item, index) => {
                        return(
                            <div key={item._id} className="card-project">
                                <img src={item.image} className="card-img-top" alt="IKEA"/>
                                <div className="card-project-body">
                                    <h3>
                                        {item.titleName + " " + item.projectName}
                                    </h3>
                                    <div className="d-flex">
                                        <img src={Notes} alt="note"/>
                                        <a href={`/${item._id}`}>
                                            <span className="card-text">View Case Study</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                
            </section>
        </main>
    );
}