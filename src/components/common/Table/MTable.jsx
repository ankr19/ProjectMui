import { Delete } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import moment from 'moment/moment'
import React from 'react'

const MTable = ({ rows }) => {
    const handleClick = (e, val)=>{
        console.log(val);
    }
    let colValue = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'id', headerName: 'Email', width: 200 },
        { field: 'addedDate', headerName: 'Dated', width: 200,
          valueGetter: (val) => {
            // console.log(moment(val.row['addedDate']).format('DD-MM-YYYY HH:MM:SS'));
            return `${moment(val.row['addedDate']).format('DD-MM-YYYY HH:MM:SS')}`
          }
        },
        { field: 'description', headerName: 'Descirption', width: 300 },
        { field: 'actions', headerName: 'Actions', width: 120, renderCell: (params) => {
            return (
              <Button
                onClick={(e) => handleClick(e, params.row)}
                startIcon={<Delete/>}
                variant="contained"
              >
                Delete
              </Button>
            );
          } },
        // { field: 'type', headerName: 'Type', width: 100 },
        // { field: '_id', headerName: 'ID', width: 100 },
    ]
    React.useEffect(() => {
        console.log(rows);
    }, [rows])
    return (
        <Box height={400} width="130%" display={'flex'}>
            <DataGrid
                rows={rows}
                columns={colValue}
                // pageSizeOptions={[5, 10, 25]}
                pageSize={5}
                // checkboxSelection
                // loading={true}
            />
        </Box>
    )
}

export default MTable