import {Badge, Box, Container, List, ListItem, styled, Typography} from "@mui/material";
import logo from '../../assets/images/eco-logo.png'
import React from "react";
import {NavLink} from "react-router-dom";
import userIcon from '../../assets/images/user-icon.png'
import {motion} from "framer-motion";
import {theme} from "../../theme/theme";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const MyHeader = styled('div')({
	width: '100%',
	height: '70px',
	alignItems: 'center',
})

const Wrapper = styled('div')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	height: '100%',
})

export const Logo = styled('div')({
	display: "flex",
	alignItems: 'center',
	columnGap: '8px',
})

const ListWrapper = styled(List)({
	color: theme.palette.primary.main,
	display: 'flex',
	alignItems: 'center',
	margin: 0,
	a: {
		cursor: 'pointer',
	}
})

const NavigationIcons = styled('div')({
	display: "flex",
	alignItems: "center",
	columnGap: '1rem'
})

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

const Header: React.FC = () => {

	return (
		<Container maxWidth='lg'>
			<MyHeader>
				<Wrapper>
					<Logo>
						<Box component='img' src={logo} sx={{width: '30px'}}/>
						<Box>
							<Typography variant='h1' component='h1'>
								Market
							</Typography>
						</Box>
					</Logo>
					<Box>
						<ListWrapper>
							{navLinkPath.map(item => (
								<ListItem key={item.path}>
									<NavLink to={item.path}
									         className={(navClass) => navClass.isActive ? 'active' : undefined}
									>
										{item.display}
									</NavLink>
								</ListItem>
							))}
						</ListWrapper>
					</Box>
					<NavigationIcons>
						<Box component='span' sx={{position: 'relative'}}>
							<Badge color='primary' badgeContent='2'>
								<FavoriteBorderIcon cursor='pointer'/>
							</Badge>
						</Box>
						<Box component='span' sx={{position: 'relative'}}>
							<Badge color='primary' badgeContent='4'>
								<ShoppingBagOutlinedIcon cursor='pointer'/>
							</Badge>
						</Box>
						<Box component='span' maxWidth={30}>
							<motion.img whileTap={{scale: 1.1}} src={userIcon}/>
						</Box>
					</NavigationIcons>
					<Box>
						<Box component='span' sx={{display: "none"}}>
							<MenuOutlinedIcon/>
						</Box>
					</Box>
				</Wrapper>
			</MyHeader>
		</Container>
	);
};

export default Header;