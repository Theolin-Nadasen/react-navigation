import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';


const Layout = ({ page, pageName, title='page', children }) => {
    const navigate = useNavigate();

    return (
        <div className='h-screen bg-amber-50 flex justify-center items-center flex-col'>
            <div className='w-3/4 h-1/2 md:w-1/4 md:h-2/3 bg-[#F1F0F0] mb-5 container flex items-center flex-col'>
                <h1 className='bg-red-500 w-full h-10 text-center pt-1 font-[exile] text-2xl rounded-t-lg'>{title}</h1>

                {children}

            </div>

            <div className='flex flex-row gap-5'>
                <Button variant="contained" onClick={() => navigate(page)}>{pageName}</Button>
                <Button onClick={() => navigate(-1)}>Back</Button>
            </div>
        </div>
    )
}

export default Layout