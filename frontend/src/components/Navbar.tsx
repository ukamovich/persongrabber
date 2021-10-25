import { AppBar, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navbarTheme } from './Themes';
import React from 'react';

import { ThemeProvider } from 'styled-components';


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
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="Open drawer"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
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

		// <Nav>
		// 	<Bars />
		// 	<NavMenu>
		// 		<NavLink to='/'>
		// 			Person-Grabber
		// 		</NavLink>
		// 		<NavLink to='/Addperson'>
		// 			Add person
		// 		</NavLink>

		// 		<NavLink to='/Addcar'>
		// 			Add car
		// 		</NavLink>
		// 	</NavMenu>
		// </Nav>
	);
};

export default Navbar;