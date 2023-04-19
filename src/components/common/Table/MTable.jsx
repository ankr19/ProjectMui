import { Delete } from '@mui/icons-material'
import { Box, Button, Modal } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import moment from 'moment/moment'
import React from 'react'

const MTable = ({ rows }) => {
    const [open, setOpen] = React.useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };
    const handleClick = (e, val) => {
        setOpen(true)
        console.log(val);
    }
    let colValue = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'id', headerName: 'Email', width: 200 },
        {
            field: 'addedDate', headerName: 'Dated', width: 200,
            valueGetter: (val) => {
                // console.log(moment(val.row['addedDate']).format('DD-MM-YYYY HH:MM:SS'));
                return `${moment(val.row['addedDate']).format('DD-MM-YYYY HH:MM:SS')}`
            }
        },
        { field: 'description', headerName: 'Descirption', width: 300 },
        {
            field: 'actions', headerName: 'Actions', width: 120, renderCell: (params) => {
                // const handleOpen = () => {
                //     setOpen(true);
                // };
                const handleClose = () => {
                    setOpen(false);
                };
                return (
                    <>
                    <Button
                        // onClick={(e) => handleClick(e, params.row)}
                        onClick={(e)=>handleClick(e, params.row)}
                        startIcon={<Delete />}
                        variant="contained"
                    >
                        Delete
                    </Button>
                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                  >
                    <Box sx={{ ...style, width: 400 }}>
                      <h2 id="parent-modal-title">Text in a modal</h2>
                      <p id="parent-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                      </p>
                    </Box>
                  </Modal>
                  </>
                );
            }
        },
        // { field: 'type', headerName: 'Type', width: 100 },
        // { field: '_id', headerName: 'ID', width: 100 },
    ]
    React.useEffect(() => {
        // console.log(rows);
    }, [rows])
    return (
        <Box height={400} width="100%" display={'flex'}>
            <Box flexGrow={1}>
                <DataGrid
                    rows={rows}
                    columns={colValue}
                    // pageSizeOptions={[5, 10, 25]}
                    pageSize={5}
                // checkboxSelection
                // loading={true}
                />
            </Box>
        </Box>
    )
}

export default MTable