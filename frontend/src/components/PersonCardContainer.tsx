import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import PersonCard from "./PersonCard";
import OptionsBar from "./OptionsBar"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import fetchGrabber from "../_helpers/fetchGrabber";
import Box from '@mui/material/Box';
import {ThemeProvider} from '@mui/material/styles';
import {paginationTheme} from "./Themes";

const port = 3001 || process.env.REACT_APP_BACKEND_PORT
const backendURL = `http://localhost:${port}/graphql`
const pageSize = 20

interface dateInterface {
    _id: string,
    first_name: string,
    last_name: string,
    gender: string,
    birthdate: string
}

function PersonCardContainer() {

    const [pages, setPages] = useState(10);
    const [sort, setSort] = useState('desc');
    const [search, setSearch] = useState("");
    const [searchOption, setSearchOption] = useState("first_name");
    const [genders, setGenders] = useState([])
    const [gender, setGender] = useState("All")
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<dateInterface[]>()

    const handleSearch = (resetPage = false) => {
        if (resetPage) {
            setCurrentPage(1)
        }
        let queryBody = {
            query: `
                query {
                    people(page:${currentPage}, search: [{value: "${search}", field:"${searchOption}"}, {value: "${gender}", field: "${gender === "All" ? "" : "gender"}"}], sort: {value: "${sort}", field: "birthdate"}) {
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

        queryBody = {
            query: `
                query {
                    generalPeopleInfo(search: [{value: "${search}", field:"${searchOption}"}]) {
                        size
                    }
                }
            `
        }
        fetchGrabber(queryBody, backendURL).then((res)=>{
            setPages(Math.ceil(res.data.generalPeopleInfo.size / pageSize))
        })
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    useEffect(() => {
        let query = {
            query: `
                query {
                    generalPeopleInfo(distinct: "gender") {
                        distinct
                    }
                }
            `
        }
        fetchGrabber(query, backendURL).then((res)=>{
            setGenders(res.data.generalPeopleInfo.distinct)
        })

    }, [])

    useEffect(() => {
        handleSearch()
    }, [currentPage, sort])

    return (


        <div className="container">

            <OptionsBar 
                setSearch={setSearch} 
                handleSearch={handleSearch}
                setSearchOption={setSearchOption}
                setGender={setGender}
                gender={gender}
                genders={genders}
                searchOption={searchOption}
                sort={sort}
                setSort={setSort}/>
            <div className="row">
                {data && data.map(el => {
                    return <PersonCard name={el.first_name + " " + el.last_name} birthdate={el.birthdate} gender={el.gender} key={el._id}></PersonCard>
                })}
            </div>


            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, bgcolor: 'red.300', borderColor: "white" }}>
                <Box sx={{ p: 5, order: 2, bgcolor: 'white.300' }}>
                    <Stack spacing={4}>
                    <ThemeProvider theme={paginationTheme}>
                        <Pagination count={pages} page={currentPage} onChange={handleChange} variant="outlined" shape="rounded" size="large" color="secondary" />
                        </ThemeProvider>
                    </Stack>
                </Box>
            </Box>

        </div>


    );


}





export default PersonCardContainer;