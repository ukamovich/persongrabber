import "bootstrap/dist/css/bootstrap.css";
import PersonCard from "./PersonCard";
import JSONDATA from '../data.json';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


let data = JSONDATA.data.people;
// denne skal represemtere data basert på query.

function PersonCardContainer() {

    const cardsPerPage = 20; // forslag 
    const [currentPage, setCurrentPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);   
        // må nå si ifra til backend om den rangen vi vil ha data fra 
        // for enkelthetens skyld så sier vi kun 1 card per page for testing.
    };

    return(

        <div className="container">
            <div className="row">

                {data && data.map(el => {
                    return <PersonCard name= {el.first_name + " " + el.last_name} age = {12} about={"qqwasd"} key={el._id}></PersonCard>
                    
                })}

                <br/>


        <Stack spacing={4}>
            <Typography>Page: {currentPage}</Typography>
             <Pagination count={100} page={currentPage} onChange={handleChange} />
                </Stack>

            </div>  


        </div>

       

    );


}





export default PersonCardContainer;