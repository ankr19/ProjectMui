import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import React from 'react'

const BCard = ({ data }) => {
  const [batchId, setBatchId] = React.useState('');
  const [manuId, setManuId] = React.useState("");
  const [vers, setVers] = React.useState("");
  const handleChange = (event) => {
    if (event.target.name === "version") {
      console.log(event.target.name, "-->", event.target.value)
      setVers(event.target.value)
    }
    else if (event.target.name === "manuId") {
      console.log(event.target.name, "-->", event.target.value)
      setManuId(event.target.value);
    }
    else {
      setBatchId(event.target.value);
    }
  };
  React.useEffect(() => {
  }, [data])
  return (
    <Card sx={{ minWidth: 275, }}>
      <CardContent>
        Title
      </CardContent>
      <CardActions>
        <FormControl sx={{ width: "120px" }}>
          <InputLabel id="demo-simple-select-label">Manufacturer</InputLabel>
          {
            data.length !== 0 ? 
              <Select
                labelId="manuId"
                id="manuId"
                value={manuId}
                label="manuId"
                onChange={(e) => handleChange(e)}
                name='manuId'
              >
                {data.map((e, key) => {
                  return (<MenuItem key={key} value={e.name}>{e.name}</MenuItem>)
                })}
              </Select>
              : <Select
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                // value={age}
                label="Age"
              // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
              </Select>
          }
        </FormControl>
        <FormControl sx={{ width: "120px" }}>
          <InputLabel id="batchId">Batch</InputLabel>
          <Select
            labelId="batchId"
            id="batchId"
            name='batchId'
            value={batchId}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100px" }}>
          {/* <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Code Version</InputLabel>
          <OutlinedInput
            id="component-outlined"
            name='version'
            value={vers}
            onChange={(e) => handleChange(e)}
            label="CodeVersion "
          /> */}
        </FormControl>
        <FormControl>
          <Button variant='outlined' color='primary'>submit</Button>
        </FormControl>
      </CardActions>
    </Card>
  )
}

export default BCard