"use client"
import { ring } from 'ldrs'
import "../style/spinner.css"
// Default values shown

export default function Spinner() {
    ring.register()
    return (
        <div className='spi'>
        <l-ring
    size="40"
    stroke="5"
    bg-opacity="0"
    speed="2" 
    color="#fff" 
        ></l-ring>
    </div>
)}
