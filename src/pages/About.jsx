import React from 'react'
import { Box, Stack, Button } from '@mui/material'
import '../App.css'
import { useNavigate, useParams } from 'react-router-dom'

function About() {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            height={'100vh'}>

            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                height={'40%'}
                width={'20%'}

                className={'container'}>

                <Stack spacing={2}>

                    <h1>About</h1>
                    <p>Welcome {params.id}</p>

                    <Button variant='contained' onClick={() => navigate(-1)}>Go Back</Button>


                </Stack>


            </Box>


        </Box>
    )
}

export default About