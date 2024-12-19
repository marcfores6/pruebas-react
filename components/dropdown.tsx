'use client'
import React from 'react'
import { useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'


const list = [
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'Properties' },
    { href: '/properties/add', label: 'Add Property' },
]
export default function DropdownElement({ menuText }: { menuText: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='mx-auto md:mx-28 relative flex flex-col items-center w-[340px] bg-purple-700'>
            <button
                className='bg-purple-400 p-4 w-full flex intems-center justify-between font-bold text-xl 
                rounded-lg tracking-wider border-4 border-transparent active:border-white active:text-white durantion-300'
            >
                {menuText}
                {isOpen ? (<GoTriangleUp className='h-8'/>) : (<GoTriangleDown className='h-8'/>)}
            </button>

        </div>
    )
}
