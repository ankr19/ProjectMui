import { Box, Container } from '@mui/material'
import React from 'react'
import Table from '../../components/common/Table/DTable';
import DataContext from '../../context/DataContext';
import Alert from '../../components/common/Alert/Alert';
const drawerWidth = 800;

const Dashboard = () => {
  let context = React.useContext(DataContext);
  let row = []
  let {manu, allManu} = context;
  let colValue = [
    { field: 'name', headerName: 'Name', width: 100 },
    { field: 'id', headerName: 'Email', width: 100 },
    { field: 'addedDate', headerName: 'Dated', width: 100 },
    { field: 'description', headerName: 'Descirption', width: 100 },
    { field: 'type', headerName: 'Type', width: 100 }, 
    { field: '_id', headerName: 'ID', width: 100 }, 
  ]  
  React.useEffect(()=>{
    allManu();
    row.concat(manu);
  },[]);
  return (
    <Container maxWidth="lg" sx={{margin: 0}}>
      <Box

        component="main"
        sx={{
          width: {
            sm: `${drawerWidth}px`
          },
          margin: 0,
          flexShrink: { sm: 0 },
        }}
      >
        <Alert/>
        <Table dataset={row} colValues={colValue} />
      </Box>
    </Container >
  )
}

export default Dashboard