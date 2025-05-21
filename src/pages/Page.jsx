import React from 'react'
import '../App.css'
import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material'
import AccountIcon from '@mui/icons-material/AccountCircle'
import Layout from '../components/Layout'

function Home() {

  return (
    <Layout page={'/about'} pageName={'About'} title='Home'>

      <div className='flex flex-col justify-between w-full h-full'>

        <div>
          <div className='card text-xs md:text-2xl'>
            <h2>LANDING PAGES</h2>
          </div>

          <div className='card text-xs md:text-2xl'>
            <h2>WEB DESIGN</h2>
          </div>

          <div className='card text-xs md:text-2xl'>
            <h2>DOMAIN AND HOSTING</h2>
          </div>
        </div>

        <Button variant='contained' className='mt-auto'>contact</Button>

      </div>

    </Layout>
  )
}

export default Home