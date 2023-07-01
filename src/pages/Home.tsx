import Helmet from "../components/Helmet/Helmet";
import React, {useEffect, useState} from "react";
import {Box, Button, Container, Grid, styled, Typography} from "@mui/material";
import hero from '../assets/images/hero-img.png'
import {theme} from "../theme/theme";
import {Link} from "react-router-dom";
import Services from "../services/Services";
import ProductsList from "../components/Ui/ProductsList";
import products, {ProductData} from "../assets/data/products";
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from "../components/Ui/Clock";

const Paragraph = styled('p')({
	color: '#0a1d37',
	lineHeight: '28px',
})

export const year = new Date().getFullYear()

const Home: React.FC = () => {
	const [trendingProducts, setTrendingProducts] = useState<ProductData[]>([])
	const [bestSalesProducts, setBestSalesProducts] = useState<ProductData[]>([])
	const [mobileProducts, setMobileProducts] = useState<ProductData[]>([])
	const [wirelessProducts, setWirelessProducts] = useState<ProductData[]>([])
	const [popularProducts, setPopularProducts] = useState<ProductData[]>([])


	useEffect(() => {
		const filteredTrendingProducts = products.filter(item => item.category === 'chair')
		const filteredBestProducts = products.filter(item => item.category === 'sofa')
		const filteredMobileProducts = products.filter(item => item.category === 'mobile')
		const filteredWirelessProducts = products.filter(item => item.category === 'wireless')
		const filteredPopularProducts = products.filter(item => item.category === 'watch')

		setTrendingProducts(filteredTrendingProducts)
		setBestSalesProducts(filteredBestProducts)
		setMobileProducts(filteredMobileProducts)
		setWirelessProducts(filteredWirelessProducts)
		setPopularProducts(filteredPopularProducts)
	}, [])

	return (
		<>
			<Box component='section'
			     sx={{backgroundColor: theme.palette.secondary.main}}
			     pt='50px'
			>
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
									            mt='20px'
									            sx={{typography: {md: 'body1'}}}
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
			</Box
			>
			<Box component='section'>
				<Services/>
			</Box>
			<Box component='section'>
				<Container maxWidth='lg'>
					<Typography variant='h2'
					            component='h2'
					            textAlign='center'
					            fontWeight={500}
					>
						Trending Products
					</Typography>
					<Grid container>
						<ProductsList data={trendingProducts}/>
					</Grid>
				</Container>
			</Box>
			<Box component='section' py='50px'>
				<Container maxWidth='lg'>
					<Typography variant='h2'
					            component='h2'
					            textAlign='center'
					            fontWeight={500}
					>
						Best Sales
					</Typography>
					<Grid container>
						<ProductsList data={bestSalesProducts}/>
					</Grid>
				</Container>
			</Box>
			<Box component='section' sx={{backgroundColor: '#0a1d37'}}>
				<Container maxWidth='lg' sx={{paddingTop: '50px'}}>
					<Typography component='h4'
					            variant='h4'
					            color='white'
					            mb='10px'
					>
						Limited offers
					</Typography>
					<Grid container>
						<Grid item lg={6} md={6}>
							<Typography component='h3'
							            variant='h3'
							            color='white'
							            mb='10px'
							>
								Quality Armchair
							</Typography>
							<Clock/>
							<Button variant='contained'
							        color='secondary'
							        sx={{marginTop: '30px'}}
							>
								<Link to='/shop'>
									Visit store
								</Link>
							</Button>
						</Grid>
						<Grid item lg={6} md={6} sx={{textAlign: 'end'}}>
							<Box component='img' src={counterImg} sx={{width: '70%', objectFit: 'contain'}}/>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box component='section' py='50px'>
				<Container maxWidth='lg'>
					<Typography variant='h2' component='h2' textAlign='center'>
						New Arrivals
					</Typography>
					<Grid container>
						<ProductsList data={mobileProducts}/>
						<ProductsList data={wirelessProducts}/>
					</Grid>
				</Container>
			</Box>
			<Box component='section' py='50px'>
				<Container maxWidth='lg'>
					<Typography variant='h2' component='h2' textAlign='center'>
						Popular in Category
					</Typography>
					<Grid container>
						<ProductsList data={popularProducts}/>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Home;