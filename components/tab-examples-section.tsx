'use client';
import React from 'react'
import { useState } from 'react';
import { EXAMPLES } from '@/data/data'
import TabButton from '@/components/tab-button';

export default function TabExampleSection() {
    const [selected, setSelected] = useState<keyof typeof EXAMPLES | null>(null);
    const values = Object.keys(EXAMPLES) as Array<keyof typeof EXAMPLES>;

    function handleClick(entrada: keyof typeof EXAMPLES) {
        setSelected(entrada);
    }

    // const selected = values[Math.floor(Math.random() * values.length)];
    return (
        <section className='my-12 md:mx-12 mx-4 flex-col'>
            <div className="flex justify-start space-x-2">
                {values.map(v => (
                    <TabButton key={v} onClick={() => handleClick(v)} isSelected={v === selected}>
                        {EXAMPLES[v].title}
                    </TabButton>
                ))}
            </div>
            {!selected && <p className='text-slate-200 m-2 p-3'>Selecciona una pestaña para mostar el contenido</p>}
            {selected != null && <div className="bg-slate-600 text-slate-200 p-12 m-3">
                <h3 className='mb-10 text-lg'>
                    {EXAMPLES[selected].title}
                </h3>
                <p className='mb-10'>
                    {EXAMPLES[selected].description}
                </p>
                <hr />
                <pre className='mt-3 overflow-hidden'>
                    <code>
                        {EXAMPLES[selected].code}
                    </code>
                </pre>
            </div>}
        </section>
    )
}
