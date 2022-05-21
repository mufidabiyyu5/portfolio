import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import Navbar from '../parts/Navbar'
import Title from '../parts/ProjectTitle'
import ProjectsImage from '../parts/ProjectsImage'
import Overview from '../parts/OverviewSection'

import ProjectsData from '../json/Projects.json'


export default function Projects(){
    const {id} = useParams();

    return <>
        <Navbar></Navbar>
        <Title data={ProjectsData.projects}></Title>
        <ProjectsImage data={ProjectsData.projects}></ProjectsImage>
        <Overview data={ProjectsData.projects}></Overview>
    </>
        
}