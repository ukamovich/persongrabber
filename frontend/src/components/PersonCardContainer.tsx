import "bootstrap/dist/css/bootstrap.css";
import PersonCard from "./PersonCard";
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import fetchGrabber from "../_helpers/fetchGrabber";


// denne skal represemtere data basert på query.
let port = 3001 || process.env.REACT_APP_BACKEND_PORT
let backendURL = `http://localhost:${port}/graphql`

interface dateInterface {
    _id: string,
    first_name: string,
    last_name: string,
    gender: string,
    birthdate: string
}
function PersonCardContainer() {

    const [currentPage, setCurrentPage] = React.useState(1);
    const [data, setData] = React.useState<dateInterface[]>()
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);   
        // må nå si ifra til backend om den rangen vi vil ha data fra 
        // for enkelthetens skyld så sier vi kun 1 card per page for testing.
    };



    useEffect(() => {
        let queryBody = {
            query: `
                query {
                    people(page:${currentPage}) {
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
            setData(res.data.people)
        })
    }) 

    return(

        <div className="container">
            <div className="row">

                {data && data.map(el => {
                    return <PersonCard name= {el.first_name + " " + el.last_name} birthdate = {el.birthdate} gender={el.gender} key={el._id}></PersonCard>
                    
                })}

                <br/>

                {/*TODO: Remember to set mac pages to actual value */}
                {/* Also style for better experience */}
                <Stack spacing={4}>
                    <Pagination count={100} page={currentPage} onChange={handleChange} variant="outlined" shape="rounded" color="secondary"/>
                </Stack>

            </div>  


        </div>

       

    );


}





export default PersonCardContainer;