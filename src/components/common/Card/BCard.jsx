import { 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  OutlinedInput,
  Select,
 } from '@mui/material'
import React from 'react'

const BCard = () => {
  const [age, setAge] = React.useState('');
  const [vers, setVers] = React.useState("");
  const handleChange = (event) => {
    if(event.target.name==="version"){
      console.log(event.target.name,"-->", event.target.value)
      setVers(event.target.value)
    }
    else if(event.target.name==="age"){
      console.log(event.target.name,"-->", event.target.value)
      setAge(event.target.value);
    }
  };
  return (
    <Card sx={{ minWidth: 275, }}>
      <CardContent>
        Title
      </CardContent>
      <CardActions>
        <FormControl sx={{ width: "100px" }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            name='age'
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100px" }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
        <FormControl sx={{ width: "100px" }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
            onChange={(e)=>handleChange(e)}
            label="CodeVersion "
          />
        </FormControl>
        <FormControl>
          <Button variant='outlined' color='primary'>submit</Button>
        </FormControl>
      </CardActions>
    </Card>
  )
}

export default BCard