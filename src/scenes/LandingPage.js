import React from 'react'

import Navbar from '../parts/Navbar'
import Header from '../parts/Header'
import Selected from '../parts/SelectedProjects'
import Footer from '../parts/Footer'

import SelectedData from '../json/SelectedProjects.json'

export default function LandingPage(){
    return <>
        <Navbar></Navbar>
        <Header></Header>
        <Selected data={SelectedData.selected}></Selected>
        <Footer></Footer>
    </>
}