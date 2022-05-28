import React from 'react'

import Navbar from '../parts/Navbar'
import Title from '../parts/ProjectTitle'
import ProjectsImage from '../parts/ProjectsImage'
import Overview from '../parts/OverviewSection'
import Process from '../parts/ProcessSection'
import DefaultSection from '../parts/DefaultSection'
import Conclusion from '../parts/Conclusion'
import Footer from '../parts/Footer'

import ProjectsData from '../json/Projects.json'


export default function Projects(){

    return <>
        <Navbar></Navbar>
        <Title data={ProjectsData.projects}></Title>
        <ProjectsImage data={ProjectsData.projects}></ProjectsImage>
        <Overview data={ProjectsData.projects}></Overview>
        <DefaultSection data={ProjectsData.projects}></DefaultSection>
        <Process data={ProjectsData.projects}></Process>
        <Conclusion data={ProjectsData.projects}></Conclusion>
        <Footer></Footer>
    </>;
        
}