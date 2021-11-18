import React from 'react';
import Navheader from '../componentes/Navheader';
import Herowelcome from '../componentes/Herowelcome';
import Carrousel from '../componentes/Carousel';
import Footer from '../componentes/Footer';



export default function Home () {

    return (
        <>
        <Navheader/>
        <Herowelcome/>
        <Carrousel/>
        <Footer/>
        </>
    )
}
