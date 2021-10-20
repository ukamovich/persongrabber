import "bootstrap/dist/css/bootstrap.css";
import PersonCard from "./PersonCard";
import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import fetchGrabber from "../_helpers/fetchGrabber";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

let port = 3001 || process.env.REACT_APP_BACKEND_PORT
let backendURL = `http://localhost:${port}/graphql`

function PersonCardContainer() {

    const [count, setCount] = React.useState(1);
    const [checked, setChecked] = React.useState(false);
    const [sort, setSort] = React.useState('undefined');
    const [optionValue, setOptionValue] = React.useState(""); // sender dette til field i query
    const [search, setSearch] = React.useState(''); 
    const [exe, setExe] = React.useState('un2ds3rf22223dssdsdds23fds223ew23233w2w23w343rgn11'); // sikrer at ikke alle persons blir loadet med en gang.
    const [currentPage, setCurrentPage] = React.useState(1);
    const [data, setData] = React.useState([{
        "_id": "",
        "first_name": "",
        "last_name": "",
        "gender": "",
        "birthdate": ""
      }])

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);   
    };

    const handleChangeEvent = (event: SelectChangeEvent) => {
        setOptionValue(event.target.value);
        console.log(event.target.value);

      };

      const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        if (checked === true) {
            setSort('asc');
        }

        else {
            setSort('desc');
        }

        console.log("Tilstand på sortering: " + sort);
      };



    useEffect(() => { //"asc", "desc", e.g. people(sort: {value: "asc", field: "first_name"})
        let queryBody = {
            query: `
                query {
                    people(page:${currentPage}, search: {value: "${exe}", field:"${optionValue}"}) {
                        _id
                        first_name
                        last_name
                        birthdate
                        gender
                    }
                }
            `
        }
        fetchGrabber(queryBody, backendURL).then(res => {
            setData(res.data.people);
            
        })
    }) 

    return(


        <div className="container">

            <div style={{ width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, bgcolor: 'red.300', borderColor: "white"}}>

                 <Box sx={{ p: 1, order: 2, bgcolor: 'white.300' }}>
                 <TextField id="outlined-basic" sx={{color: 'success.main'}} label="Search" variant="outlined" onChange={event => setSearch(event.target.value)} />
                </Box>


                <Box sx={{ p: 1, order: 2, bgcolor: 'white .300' }}>


                <FormControl sx={{minWidth: 120, color: 'third' }}>
                <InputLabel id="demo-simple-select-autowidth-label">Filter</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={optionValue}
                onChange={handleChangeEvent}
                autoWidth = {true}
                label="Age"
                
        >
                <MenuItem  value={"first_name"}>Name</MenuItem>
                 <MenuItem value={"gender"}>Gender</MenuItem>
                <MenuItem value={"age"}>Age</MenuItem>
                </Select>
                </FormControl>
                </Box>


                <Box sx={{ p: 1, order: 2, bgcolor: 'white.300' }}>
                <Checkbox checked={checked} onChange={handleChecked} inputProps={{ 'aria-label': 'controlled' }}
    />
                </Box>


                <Box sx={{ p: 1, order: 2, bgcolor: 'white.300' }}>
                    <Button variant="contained" onClick = {event => setExe(search)}>Search</Button>
                </Box>



                        </Box>
                             </div>



            <div className="row">

                {data.length > 1 && data.map(el => {
                    return <PersonCard name= {el.first_name + " " + el.last_name} birthdate = {el.birthdate} gender={el.gender} key={el._id}></PersonCard>
                    
                })}

                <br/>

                {/*TODO: Remember to set mac pages to actual value */}
                {/* Also style for better experience */}


            </div>  




            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, bgcolor: 'red.300', borderColor: "white"}}>
                <Box sx={{ p: 5, order: 2, bgcolor: 'white.300' }}>
                    <Stack spacing={4}>
                     <Pagination count={count} page={currentPage} onChange={handleChange} variant="outlined" shape="rounded" size= "large" color="secondary"/>
                         </Stack>
                    
                </Box>
                </Box>
            
        </div>


    );


}





export default PersonCardContainer;