import {Badge, Box, Container, Drawer, styled, Typography} from "@mui/material";
import logo from '../../assets/images/eco-logo.png'
import React, {useEffect, useRef, useState} from "react";
import userIcon from '../../assets/images/user-icon.png'
import {motion} from "framer-motion";
import {theme} from "../../theme/theme";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HeaderLinks from "./HeaderLinks";

const MyHeader = styled('div')({
	width: '100%',
	height: '70px',
	alignItems: 'center',
	[theme.breakpoints.down('sm')]: {
		height: '60px',
	}
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

const Navigation = styled('div')({
	[theme.breakpoints.down('md')]: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.53)',
		display: 'none',
	},
})

const ListWrapper = styled('div')({
	color: theme.palette.primary.main,
	display: 'flex',
	alignItems: 'center',
	margin: 0,
	a: {
		cursor: 'pointer',
	},
})

const NavigationIcons = styled('div')({
	display: "flex",
	alignItems: "center",
	columnGap: '1rem'
})

const MobileMenu = styled('div')({
	display: 'none',
	[theme.breakpoints.down('md')]: {
		display: 'block'
	}
})

const Header: React.FC = () => {
	const headerRef = useRef<HTMLDivElement>(null)
	const menuRef = useRef<HTMLDivElement>(null)
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const stickyHeader = () => {
		window.addEventListener('scroll', () => {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				headerRef.current?.classList.add('sticky__header')
			} else {
				headerRef.current?.classList.remove('sticky__header')
			}
		})
	}

	useEffect(() => {
		stickyHeader()

		return () => window.removeEventListener('scroll', stickyHeader)
	})


	return (
		<Box component='header' ref={headerRef}>
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
						<Navigation ref={menuRef} >
							<ListWrapper>
								<HeaderLinks/>
							</ListWrapper>
						</Navigation>
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
							<MobileMenu>
								<MenuOutlinedIcon onClick={() => setIsDrawerOpen(true)}/>
							</MobileMenu>
							<Drawer open={isDrawerOpen}
							        anchor='right'
							        onClose={() => setIsDrawerOpen(false)}
							        sx={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center'}}
							>
								<HeaderLinks/>
							</Drawer>
						</NavigationIcons>
					</Wrapper>
				</MyHeader>
			</Container>
		</Box>
	);
};

export default Header;