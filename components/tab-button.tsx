'use client'
import React, { ReactNode } from 'react'


export default function TabButton(
    {
        children,
        onClick,
        isSelected,
    }: {
        children: ReactNode,
        onClick: () => void,
        isSelected: boolean
    }) {
    function handleClick() {
        onClick();
    } 
    
    let clasesTailwind= "inline-block m-2 p-3 text-slate-300 rounded-md hover:bg-slate-900 hover:text-white"
    if(isSelected) clasesTailwind += ' bg-blue-500 text-white'
    return (
        <button className={clasesTailwind}
            onClick={handleClick}>
            {children}
        </button>
    )
}
