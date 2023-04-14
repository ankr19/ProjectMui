import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Box } from '@mui/material';
import DataContext from '../../../context/DataContext';

export default function Table({dataset}) {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 5,
  //   maxColumns: 6,
  // });
  // const columns = [
  //   // { field: 'id', headerName: 'ID', width: 100 },
  //   { field: 'age', headerName: 'Age', width: 100 },
  //   { field: 'idName', headerName: 'Oem Email', width: 150 },
  //   { field: 'email', headerName: 'Email', width: 200 },
  //   { field: 'added Date', headerName: 'Added Date', width: 150 },
  // ];
  
  return (
    <Box sx={{ margin: 0, width: '100%', overflowX: 'auto' }}>
      <Box sx={
        { 
          height: 350, 
          width: '100%', 
          // overflowX:"auto" 
        }
      }>
        {/* <DataGrid {...data} /> */}
      </Box>

      <Box sx={{ height: 350, width: '100%', marginTop: "20px" }}>
        {/* <DataGrid
          autoHeight
          // hideFooterPagination
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        /> */}
      </Box>
    </Box>
  );
}