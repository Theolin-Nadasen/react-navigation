import React from 'react'
import '../App.css'
import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material'
import AccountIcon from '@mui/icons-material/AccountCircle'
import Layout from '../components/layout'

function Home() {

  return (
    <Layout page={'/about'} pageName={'About'}>
      <h2>some text</h2>
      <h2>some text</h2>
      <h2>some text</h2>
    </Layout>
  )
}

export default Home