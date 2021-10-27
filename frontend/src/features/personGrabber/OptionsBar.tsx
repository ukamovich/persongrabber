import { SelectChangeEvent } from '@mui/material/Select';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { 
    IconButton, 
    Button,
    InputLabel,
    MenuItem,
    FormControl,
    TextField,
    Select,
    Box
} from '@mui/material';
import { mainTheme } from "./styles/Themes"
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const handleSearchOptionChange = (event: SelectChangeEvent) => {
        props.setSearchOption(event.target.value);
    };
    const handleGenderOptionChange = (event: SelectChangeEvent) => {
        props.setGender(event.target.value);
    };

    const toggleSort = () => {
        props.setSort(props.sort === "asc" ? "desc" : "asc")
    }

    return (
        <div className="options-bar">
            <ThemeProvider theme={mainTheme}>
                <Box sx={{
                    display: 'flex',
                    flexFlow: "row wrap", 
                    justifyContent: 'center',
                    alignItems: 'center', 
                    gap: "10px",
                    p: 2, 
                    borderColor: "white" 
                }}>
                    <Box>
                        <TextField id="filled-basic" label="Search" variant="filled" onChange={event => props.setSearch(event.target.value)} 
                        size = {matches ? "small" : "medium"}/>
                    </Box>
                    <Box>
                        <FormControl variant="filled" sx={{color: 'third' }}>
                            <InputLabel >Search on:</InputLabel>
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
                    <Box sx={{ p: 1 }}>
                        <FormControl variant="filled">
                            <InputLabel>Set gender</InputLabel>
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
                    <Box>
                        <Button variant="contained" onClick={() => props.handleSearch(true)}
                        size = {matches ? "small" : "medium"}>
                            Search</Button>
                    </Box>

                    <Box>
                        <IconButton color="primary" aria-label="Sort decending" size="large" onClick={toggleSort}>
                            {props.sort === "desc" ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                        </IconButton>
                    </Box>

                </Box>

            </ThemeProvider>
        </div>
    );
}

export default OptionsBar;