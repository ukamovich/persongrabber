import React, { useState } from "react"

import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton } from '@mui/material';
import {textfieldTheme, whiteTheme} from "./Themes";
import {ThemeProvider} from '@mui/material/styles';
import {withTheme} from '@mui/material/styles';

interface OptionProps {
    setSearch: (value: string) => void,
    handleSearch: (resetPage?: boolean) => void,
    setSearchOption: (value: string) => void,
    searchOption: string,
    setGender: (value: string) => void,
    genders: string[],
    gender: string,
    setSort: (value: string) => void,
    sort: string
}

function OptionsBar(props: OptionProps) {
    
    const handleSearchOptionChange = (event: SelectChangeEvent) => {
        props.setSearchOption(event.target.value);
    };    
    const handleGenderOptionChange = (event: SelectChangeEvent) => {
        props.setGender(event.target.value);
    };

    const toggleSort = () => {
        props.setSort(props.sort === "asc" ? "desc" : "asc")
    }

    return(



        <div style={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, bgcolor: 'red.300', borderColor: "white" }}>

            <Box sx={{ p: 1, order: 2, bgcolor: 'white.300' }}>

            <ThemeProvider theme={textfieldTheme}>
                <TextField id="outlined-basic" sx={{ color: 'success.main' }} label="Search" variant="outlined" onChange={event => props.setSearch(event.target.value)} />
            </ThemeProvider>
            </Box>

            <Box sx={{ p: 1, order: 2, bgcolor: 'white .300' }}>

                <FormControl sx={{ minWidth: 120, color: 'third' }}>

                <InputLabel id="demo-simple-select-autowidth-label">Search on:</InputLabel> 
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={props.searchOption}
                        onChange={handleSearchOptionChange}
                        autoWidth={true}
                        label="Age"
                    >
                        <MenuItem value={"first_name"}>First name</MenuItem>
                        <MenuItem value={"last_name"}>Last name</MenuItem>
                    </Select>
                </FormControl>


            </Box>
            <Box sx={{ p: 1, order: 2, bgcolor: 'white .300' }}>

                <FormControl sx={{ minWidth: 120, color: 'third' }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Gender:</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={props.gender}
                        onChange={handleGenderOptionChange}
                        autoWidth={true}
                        label="Age"
                    >   
                        <MenuItem value="All">All genders</MenuItem>
                        {props.genders && props.genders.map((element: string) => {
                            return <MenuItem value={element} key={element}>{element}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>

            {/* <Box sx={{ p: 1, order: 2, bgcolor: 'white.300' }}>
                <Checkbox checked={checked} onChange={handleChecked} inputProps={{ 'aria-label': 'controlled' }}/>
            </Box> */}

            

            <Box sx={{ p: 1, order: 2, bgcolor: 'white.300' }}>
                <Button variant="contained" onClick={() => props.handleSearch(true)}>Search</Button>
            </Box>

            <Box sx={{ p: 1, order: 2, bgcolor: 'white.300' }}>
                <IconButton color="primary" aria-label="Sort decending" size="large" onClick={toggleSort}>
                    {props.sort === "desc" ? <ArrowDownwardIcon/> : <ArrowUpwardIcon/>}
                </IconButton>
            </Box>

        </Box>
    </div>
    );
}

export default OptionsBar;