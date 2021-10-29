import { AppBar, Link, Toolbar, Typography } from '@mui/material';
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
						<Link 
							href="/"
							color="inherit" 
							underline="none"
							variant="h4"
							sx= {{
								fontWeight: "bold"
							}}
						>
							Person grabber
						</Link>
						<Link 
							href="/add-person"
							color="inherit" 
							underline="none"
						>
							Add person
						</Link>
						<Link 
							href="/add-car"
							color="inherit" 
							underline="none"
						>
							Add car
						</Link>
					</Typography>

				</Toolbar>
			</AppBar >
		</ThemeProvider>
	);
};

export default Navbar;