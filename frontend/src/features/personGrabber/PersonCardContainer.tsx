import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.css";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import { useAppDispatch, useAppSelector } from '../../hooks'
import { setPage } from './grabberSlice'
import PersonCard from "./PersonCard";
import OptionsBar from "./OptionsBar"
import fetchGrabber, { backendURL } from "../../_helpers/fetchGrabber";
import { mainTheme } from "./styles/Themes";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const pageSize = 20

interface dateInterface {
    _id: string,
    first_name: string,
    last_name: string,
    gender: string,
    birthdate: string
}

function PersonCardContainer() {

    const dispatch = useAppDispatch()
    const page = useAppSelector((state) => state.page)

    const [pages, setPages] = useState(10);
    const [sort, setSort] = useState('desc');
    const [search, setSearch] = useState("");
    const [searchOption, setSearchOption] = useState("first_name");
    const [genders, setGenders] = useState([])
    const [gender, setGender] = useState("All")
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<dateInterface[]>()

    /**
     * Handles search requests
     * @param resetPage set page to 1 or not
     */
    const handleSearch = (resetPage = false) => {
        if (resetPage) {
            setCurrentPage(1)
            dispatch(setPage(1))
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
        fetchGrabber(queryBody, backendURL).then((res) => {
            setPages(Math.ceil(res.data.generalPeopleInfo.size / pageSize))
        })
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    // On page load
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
        fetchGrabber(query, backendURL).then((res) => {
            setGenders(res.data.generalPeopleInfo.distinct)
        })
        
    }, [])
    
    // On selected page change or sort change
    useEffect(() => {
        handleSearch()
        dispatch(setPage(currentPage))
        window.scrollTo(0,0)
    }, [currentPage, sort])

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

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
                setSort={setSort} />
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, flexFlow: 'row wrap'}}>
                {data && data.map(el => {
                    return <PersonCard _id={el._id} name={el.first_name + " " + el.last_name} birthdate={el.birthdate} gender={el.gender} key={el._id}></PersonCard>
                })}
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1}}>
                <Box>
                    <Stack spacing={4}>
                        <ThemeProvider theme={mainTheme}>
                            <Pagination count={pages} page={currentPage} onChange={handleChange} variant="outlined" shape="rounded" color="secondary"
                            size = {matches ? "large" : "small"} />
                        </ThemeProvider>
                    </Stack>
                </Box>
            </Box>

        </div>
    );
}

export default PersonCardContainer;