import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection";
import {Box, Button, Container, Grid, List, ListItem, styled, Tab, Tabs, Typography} from "@mui/material";
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import products from "../assets/data/products";
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import CustomTabPanel, {a11yProps} from "../components/Ui/CustomTabPanel";

const DetailsWrapper = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	height: '100%',
})

const ProductDetails: React.FC = () => {
	const [value, setValue] = useState(0);
	const {id} = useParams()

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const product = products.find((item) => item.id === id)

	if (!product) {
		return null
	}
	const {imgUrl, price, productName, avgRating, shortDesc, reviews, description} = product

	return (
		<Helmet title={productName}>
			<CommonSection title={productName}/>
			<Box component='section'>
				<Container maxWidth='lg'>
					<Grid container>
						<Grid item lg={6}>
							<Box component='img' src={imgUrl}/>
						</Grid>
						<Grid item lg={6}>
							<DetailsWrapper>
								<Box>
									<Typography variant='h2' component='h2'>
										{productName}
									</Typography>
									<Box mt='5px'>
										<StarPurple500OutlinedIcon/>
										<StarPurple500OutlinedIcon/>
										<StarPurple500OutlinedIcon/>
										<StarPurple500OutlinedIcon/>
										<StarHalfOutlinedIcon/>
									</Box>
									<Typography component='p' mt='10'>
										({avgRating} ratings)
									</Typography>
								</Box>
								<Box mt='10px'
								     component='span'
								     fontSize='1.3rem'
								     fontWeight={600}
								>
									{price} $
								</Box>
								<Typography mt='20px' component='p'>
									{shortDesc}
								</Typography>
								<Box mt='20px'>
									<Button variant='contained'>
										Add to card
									</Button>
								</Box>
							</DetailsWrapper>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box>
				<Grid container>
					<Grid item lg={12}>
						<Box sx={{display: 'flex', flexDirection: 'column'}}>
							<Box sx={{borderBottom: 1, borderColor: 'divider'}}>
								<Tabs value={value}
								      onChange={handleChange}
								>
									<Tab label="Description" {...a11yProps(0)} />
									<Tab label={`Reviews ${reviews.length}`} {...a11yProps(1)} />
								</Tabs>
							</Box>
							<CustomTabPanel value={value}
							                index={0}
							>
								{description}
							</CustomTabPanel>
							<CustomTabPanel value={value}
							                index={1}
							>
								<List>
									{
										reviews?.map((item, index) => (
											<ListItem key={index}
											          sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}
											>
												<Typography>
													Jon Does
												</Typography>
												<Typography fontWeight={600}>
													{item.rating}(rating)
												</Typography>
												<Typography color='black'>
													{item.text}
												</Typography>
											</ListItem>
										))
									}
								</List>
							</CustomTabPanel>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Helmet>
	);
};

export default ProductDetails;