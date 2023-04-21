import React from 'react'
import { Box, FormControl, Grid, TextField } from '@mui/material'
import BCard from '../../components/common/Card/BCard'

const Upload = () => {
  const boxStyle = {
    box: {
      // width: 600,
      // height: 400,
      backgroundColor: "#7BB5FF",
      m: 2,
      p: 2,
      '& > :not(style)': { m: 1 },
    }
  }
  return (
    <Box sx={boxStyle.box} >
      <BCard/>
      <BCard/>
      <BCard/>
      {/* <FormControl variant="standard"> */}
        {/* <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        /> */}
      {/* </FormControl> */}
    </Box>
  )
}

export default Upload