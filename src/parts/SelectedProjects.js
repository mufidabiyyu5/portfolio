import React from 'react'
import { Link } from 'react-router-dom'

import Notes from '../assets/illustration/notes.svg'


export default function SelectedProjects(props){
    return(
        <main className="container container-fluid">
        <h2>Selected Projects</h2>
        {
            props.data.map((item, index) => {
                return(
                    <div key={item._id} className="card">
                        <img src={item.image} className="card-img-top" alt="Selected Project 1"/>
                        <div className="card-body">
                            <h3>
                                {item.titleName + " " + item.projectName} 
                            </h3>
                        <Link to={`/Projects/${item._id}`}><img src={Notes} alt="Notes"/> <span>View case study</span></Link>
                        </div>
                    </div>
                );
            })
        }
        
        
    </main>
    );
}