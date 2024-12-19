import React from 'react'
import Image, { StaticImageData } from 'next/image';

export default function CoreConcepts(

    {
        title,
        image,
        description
    }:{
        title: string,
        image: StaticImageData, 
        description: string
    }
) {
    return (
        <li className='flex flex-col items-center justify-center'>
            <Image src={image} alt={title} className='w-32' />
            <h3 className='text-xl font-bold text-slate-100'>{title}</h3>
            <p className='p-3 mt.2 text-slate-200'>{description}</p>
        </li>
    )
}
