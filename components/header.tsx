import React from 'react';
import Image from 'next/image';
import imagenCabecera from '@/public/images/react-core-concepts.png';


export default function Header() {
    const reactdescriptions = [
        'Cuatro conceptos fundamentales para entender React',
        'React es un framework para construir interfaces de usuario',
        'React es una biblioteca de JavaScript para construir interfaces de usuario',
        'React es un enfoque de desarrollo de interfaces de usuario',
    ];
    function getRandomDescription() {
        return reactdescriptions[Math.round(Math.random() * reactdescriptions.length)]
    }
    return (
        <header id='header' className='flex flex-col items-center justify-center'>
            <Image src={imagenCabecera} alt='Conceptos Básicos de React' className='w-32' />

            <h1 className='w-5/6 text-center text-3xl font-extrabold font-title bg-gradient-to-r from-purple-700 to-violet-300 bg-clip-text text-transparent'>
                Conceptos Básicos de React
            </h1>

            <h2 className='w-5/6 text-xl text-slate-300 text-left md:text-center'>
                {getRandomDescription()}
            </h2>
        </header>
    )
}
