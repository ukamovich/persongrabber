import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom"
import { navbarTheme } from './personGrabber/styles/Themes';
import React from 'react';

import { ThemeProvider } from 'styled-components';

/**
 * Navbar element with page routing
 * @returns 
 */
const Navbar = () => {
	return (
		<ThemeProvider theme={navbarTheme}>
			<AppBar 
				position="static"
				sx= {{
					bgcolor: "#63D471",
					display: "flex",
					flexFlow: "row wrap"
				}}	
			>
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ 
							flexGrow: 1, 
							display: "flex",
							flexFlow: "row wrap",
							justifyContent: "flex-start",
							alignItems: "flex-end",
							gap: "20px",
						}}
						
					>
						<Link to="/" style={{ textDecoration: 'none', color: "white", fontWeight: "bold", fontSize: "24px" }}>Person grabber</Link>
						<Link to="/add-person" style={{ textDecoration: 'none', color: "white", fontSize: "20px"}}>Add person</Link>
						<Link to="/add-car" style={{ textDecoration: 'none', color: "white", fontSize: "20px"}}>Add car</Link>

					</Typography>

				</Toolbar>
			</AppBar >
		</ThemeProvider>
	);
};

export default Navbar;