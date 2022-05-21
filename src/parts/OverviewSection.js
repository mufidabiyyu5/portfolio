import React from 'react'
import { useParams } from 'react-router-dom'


export default function OverviewSection(props){
    const {id} = useParams();

    return(
        <section className="overview-section container container-fluid">
            <h2 className="text-center">Overview</h2>
            {
                props.data.map((item, index) => {
                    if (item._id === id) {
                        item.arrayOverview.map((overview) => {
                            <div class="overview-content">
                                <h3>
                                    {overview.title}
                                </h3>
                                <p>
                                    {overview.desc}
                                </p>
                            </div>
                        })
                    }
                })
            }
        </section>
    );
}