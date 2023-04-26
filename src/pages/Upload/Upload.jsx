import React from 'react'
import { Box, FormControl, Grid, TextField } from '@mui/material'
import BCard from '../../components/common/Card/BCard'
import DataContext from '../../context/DataContext';

const Upload = () => {
  const [mau, setMau] = React.useState([]);
  let context = React.useContext(DataContext);
  let { allManu } = context;
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
  let collectData = async () => {
    setMau(await allManu());
  }
  React.useEffect(() => {
    collectData()
  }, [])
  return (
    <Box sx={boxStyle.box} >
      <BCard data={mau} />
      <BCard data={mau} />
      <BCard data={mau} />
    </Box>
  )
}

export default Upload