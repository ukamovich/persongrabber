import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/'>
			Person-Grabber
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