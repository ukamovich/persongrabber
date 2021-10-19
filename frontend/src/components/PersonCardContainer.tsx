import "bootstrap/dist/css/bootstrap.css";
import PersonCard from "./PersonCard";
import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import fetchGrabber from "../_helpers/fetchGrabber";

// denne skal represemtere data basert på query.
let port = 3001 || process.env.REACT_APP_BACKEND_PORT
let backendURL = `http://localhost:${port}/graphql`
function PersonCardContainer() {


    const [search, setSearch] = React.useState(''); 
    const [exe, setExe] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const [data, setData] = React.useState([{
        "_id": "dummy",
        "first_name": "dummy",
        "last_name": "dummy",
        "gender": "dummy",
        "birthdate": "dummy"
      }])
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);   
        // må nå si ifra til backend om den rangen vi vil ha data fra 
        // for enkelthetens skyld så sier vi kun 1 card per page for testing.
    };

    useEffect(() => { //"asc", "desc", e.g. people(sort: {value: "asc", field: "first_name"})
        let queryBody = {
            query: `
                query {
                    people(page:${currentPage}, search: {value: "${exe}", field:"first_name"}) {
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

            <div className="btn-group" role="group" aria-label="Basic example">
                <input type="text" className="form-control mt-3" required placeholder="Name" name="name" onChange={event => setSearch(event.target.value)}/>
                <button className="primary-btn" onClick = {event => setExe(search)} >Search </button>

            </div>

            <div className="row">

                {data && data.map(el => {
                    return <PersonCard name= {el.first_name + " " + el.last_name} birthdate = {el.birthdate} gender={el.gender} key={el._id}></PersonCard>
                    
                })}

                <br/>

                {/*TODO: Remember to set mac pages to actual value */}
                {/* Also style for better experience */}


                <Stack spacing={4}>
                    <Pagination count={100} page={currentPage} onChange={handleChange} variant="outlined" shape="rounded" size= "large" color="secondary"/>
                </Stack>



            </div>  


        </div>

       

    );


}





export default PersonCardContainer;