import React from 'react'
import '../App.css'
import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material'
import AccountIcon from '@mui/icons-material/AccountCircle'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  let name = 'no name';

  const updateName = (event) => {
    name = event.target.value;
  }

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
          <TextField variant='outlined' label='name'
            onChange={updateName}
            slotProps={{ input: { startAdornment: <InputAdornment position='start'><AccountIcon /></InputAdornment> } }}
            className={'input'}></TextField>

            <Button variant='contained' onClick={() => navigate('/about/' + name)}>Submit</Button>


        </Stack>


      </Box>


    </Box>
  )
}

export default Home