import { Box, Container } from '@mui/material'
import React from 'react'
import Table from '../../components/common/Table/Table';
const drawerWidth = 800;

const Dashboard = () => {
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
        <Table />
      </Box>
    </Container >
  )
}

export default Dashboard