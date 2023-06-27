import Helmet from "../components/Helmet/Helmet";
import React from "react";
import {Box, Button, Container, Grid, styled, Typography} from "@mui/material";
import hero from '../assets/images/hero-img.png'
import {theme} from "../theme/theme";
import {Link} from "react-router-dom";
import Services from "../services/Services";
import ProductsList from "../components/Ui/ProductsList";

const Paragraph = styled('p')({
	color: '#0a1d37',
	lineHeight: '28px',
})
const Home: React.FC = () => {
	const year = new Date().getFullYear()

	return (
		<>
			<Box sx={{backgroundColor: theme.palette.secondary.main}} pt='50px'>
				<Helmet title={'Home'}>
					<Container maxWidth='lg'>
						<Grid container>
							<Grid item md={6} lg={6}>
								<Box>
									<Paragraph sx={{fontWeight: 500}}>
										Trending products in {year}
									</Paragraph>
									<Typography component='h2' variant='h2'
									            color='#0a1d37'
									            fontWeight={600}
									            mt='20px'
									>
										Make your interior more Minimalistic & Modern
									</Typography>
									<Paragraph sx={{marginTop: '20px'}}>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Magni nemo optio pariatur, quae qui
										quibusdam quis quisquam reprehenderit totam unde?
									</Paragraph>
									<Button variant="outlined" sx={{marginTop: '20px'}}>
										<Link to='/shop'>
											Shop now!
										</Link>
									</Button>
								</Box>
							</Grid>
							<Grid item md={6} lg={6}>
								<Box>
									<Box component='img' src={hero}/>
								</Box>
							</Grid>

						</Grid>
					</Container>
				</Helmet>
			</Box>
			<Services/>
			<Box>
				<Container maxWidth='lg'>
					<Grid container>
						<Grid item lg={12}>
							<Typography variant='h2'
							            component='h2'
							            textAlign='center'
							            fontWeight={500}
							>
								Trending Products
							</Typography>
						</Grid>
						<ProductsList/>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Home;