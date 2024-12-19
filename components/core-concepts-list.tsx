import React from 'react'
import Image from 'next/image';
import CoreConcepts from './core-concepts';
import {CORE_CONCEPTS as data} from '@/data/data';

export default function CoreConceptsList() {
    return (
        <section id='conceptos'
            className='m-12 flex flex-col justify-center bg-violet-700 min-w-44'>
            <h2 className='text-2xl font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip'>
                Conceptos Básicos de React
            </h2>
            {data.length == 0 && <h2 className='text-xl text-red-600 font-bold'>No data</h2>}
            {data.length > 0 &&
            (<ul className='m-3 md:m-8 flex flex-col md:flex-row space-y-16 md:space-y-0 justify-center md:space-x-6'>
                {data.map(c => <CoreConcepts key={c.title} {...c} />)}
            </ul>)}
        </section>
    )
}