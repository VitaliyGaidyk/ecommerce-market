import React from "react";
import {List, ListItem, styled} from "@mui/material";
import {NavLink} from "react-router-dom";
import {theme} from "../../theme/theme";

const navLinkPath = [
	{
		path: 'home',
		display: 'Home'
	},
	{
		path: 'shop',
		display: 'Shop'
	},
	{
		path: 'cart',
		display: 'Cart'
	},
]

const ListComponent = styled(List)({
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
	}
})

const HeaderLinks: React.FC = () => {
	return (
		<ListComponent>
			{navLinkPath.map(item => (
				<ListItem key={item.path}>
					<NavLink to={item.path}
					         className={(navClass) => navClass.isActive ? 'active' : undefined}
					>
						{item.display}
					</NavLink>
				</ListItem>
			))}
		</ListComponent>
	);
};

export default HeaderLinks;