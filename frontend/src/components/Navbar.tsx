import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/Homepage'>
			Person-Grabber
		</NavLink>
		<NavLink to='/Filter'>
			Filter
		</NavLink>

        <NavLink to='/Search'>
			Search
		</NavLink>

        <NavLink to='/Addperson'>
			Add person
		</NavLink>

        <NavLink to='/Addcar'>
			Add car
		</NavLink>
		
		
		
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;