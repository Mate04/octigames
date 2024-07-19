"use client"
import React from 'react'
import Banner from '../components/banner';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.webp'

const LeftColumnView = ({ Md5 }) => {
    return (
        <>
            {Md5 ? <Banner keyAD={'3239b73fcf003fd2be61d27a156dabc0'} height={300} width={160} /> : null}
        </>
    )
}

export default LeftColumnView