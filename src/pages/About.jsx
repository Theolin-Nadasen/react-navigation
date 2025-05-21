import React from 'react'
import { Box, Stack, Button } from '@mui/material'
import '../App.css'
import Layout from '../components/Layout';

function About() {

    return (
        <Layout page={'/'} pageName={'Home'}>
            <div className='text-2xl flex flex-col w-full h-full gap-5 pt-2 items-center'>
                <h1>Hello! I'm Theo</h1>

                <div className='text-xs md:text-xl px-5 space-y-5'>
                    <h2>a passionate and dedicated web developer focused on helping businesses and individuals like you establish a strong and effective online presence.</h2>
                    <h2>My expertise lies in transforming your ideas into tangible digital realities. I offer a comprehensive suite of web services designed to get you online seamlessly and effectively.</h2>
                </div>
            </div>
        </Layout>
    )
}

export default About