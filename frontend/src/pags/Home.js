import React from 'react';
import Navheader from '../componentes/Navheader';
import Herowelcome from '../componentes/Herowelcome';
import Divcarousel from '../componentes/Carousel';
import Footer from '../componentes/Footer';



export default function Home () {

    return (
        <>
        <Navheader/>
        <Herowelcome/>
        <Divcarousel/>
        <Footer/>
        </>
    )
}
