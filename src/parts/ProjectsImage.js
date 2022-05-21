import React from 'react'
import { useParams } from 'react-router-dom'


export default function ProjectImage(props){
    const {id} = useParams();

    return(
        <section class="title-img container container-fluid">
            {
                props.data.map((item, index) => {
                    if (item._id === id) {
                        return(
                            <div class="row">
                                <img src={item.image} alt={item.image}/>
                            </div>
                        ); 
                    }
                    
                })
            }
        
    </section>
    );
}