import React from "react";
import {Box, Container, Grid, List, ListItem, Typography} from "@mui/material";
import logo from "../../assets/images/eco-logo.png";
import {Logo} from "../header/Header";
import {Link} from "react-router-dom";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import {year} from "../../pages/Home";

const Footer: React.FC = () => {
	return (
		<Box component='footer' py='50px' sx={{backgroundColor: '#0a1d37', color: 'white'}}>
			<Container maxWidth='lg'>
				<Grid container>
					<Grid item lg={4}>
						<Logo>
							<Box>
								<Typography variant='h1' component='h1'>
									Market
								</Typography>
							</Box>
						</Logo>
						<Typography component='p' mt={4} color='white'>
							Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. A, distinctio dolorem dolorum illum
							inventore laboriosam placeat quam quo rem vel.
						</Typography>
					</Grid>
					<Grid item lg={3}>
						<Typography component='h4' textAlign='center'>
							Top Category
						</Typography>
						<List>
							<ListItem>
								<Link to='#'>Mobile phones</Link>
							</ListItem>
							<ListItem>
								<Link to='#'>Modern Sofa</Link>
							</ListItem>
							<ListItem>
								<Link to='#'>Arm Chair</Link>
							</ListItem>
							<ListItem>
								<Link to='#'>Smart Watches</Link>
							</ListItem>
						</List>
					</Grid>
					<Grid item lg={2}>
						<Typography component='h4' textAlign='center'>
							Useful links
						</Typography>
						<List>
							<ListItem>
								<Link to='/shop'>Shop</Link>
							</ListItem>
							<ListItem>
								<Link to='/cart'>Cart</Link>
							</ListItem>
							<ListItem>
								<Link to='/login'>Login</Link>
							</ListItem>
							<ListItem>
								<Link to='#'>Privacy Policy</Link>
							</ListItem>
						</List>
					</Grid>
					<Grid item lg={3}>
						<Typography component='h4' textAlign='center'>
							Contact
						</Typography>
						<List>
							<ListItem sx={{display: 'flex'}}>
								<FmdGoodOutlinedIcon/>
								<Typography component='p' color='white' ml='15px'>
									SomeMockAddress 24
								</Typography>
							</ListItem>
							<ListItem sx={{display: 'flex'}}>
								<LocalPhoneOutlinedIcon/>
								<Typography component='p' color='white' ml='15px'>
									<Link to='tel:+1(23)45-67-890'>
										+1(23)45-67-890
									</Link>
								</Typography>
							</ListItem>
							<ListItem sx={{display: 'flex'}}>
								<MailOutlineOutlinedIcon/>
								<Typography component='p' color='white' ml='15px'>
									<Link to='mailto:mockemail@email.com'>
										mockemail@email.com
									</Link>
								</Typography>
							</ListItem>
						</List>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item lg={12}>
						<Typography component='p' color='white'>
							Copyrights {year}. All rights reserved.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;