import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection";
import {
	Box,
	Button,
	Container,
	Grid,
	List,
	ListItem,
	Rating,
	styled,
	Tab,
	Tabs, TextField,
	Typography
} from "@mui/material";
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import products from "../assets/data/products";
import CustomTabPanel, {a11yProps} from "../components/Ui/CustomTabPanel";
import ProductsList from "../components/Ui/ProductsList";

const DetailsWrapper = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	height: '100%',
})

const ProductDetails: React.FC = () => {
	const [customPanel, setCustomPanel] = useState(0);
	const [star, setStar] = useState<number | null>(2);
	const [starItem, setStarItem] = useState<number | null>(4);
	const {id} = useParams()

	const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
		setCustomPanel(newValue);
	};

	const product = products.find((item) => item.id === id)

	if (!product) {
		return null
	}

	const {
		imgUrl,
		price,
		productName,
		avgRating,
		shortDesc,
		reviews,
		description,
		category
	} = product

	const relatedProducts = products.filter((item) => item.category === category)

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
										<Rating
											name="read-only"
											readOnly
											value={starItem}
											onChange={(event, newValue) => {
												setStarItem(newValue);
											}}
										/>
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
								<Tabs value={customPanel}
								      onChange={handleChangeTabs}
								>
									<Tab label="Description" {...a11yProps(0)} />
									<Tab label={`Reviews ${reviews.length}`} {...a11yProps(1)} />
								</Tabs>
							</Box>
							<CustomTabPanel value={customPanel}
							                index={0}
							>
								{description}
							</CustomTabPanel>
							<CustomTabPanel value={customPanel}
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
								<Box sx={{display: 'flex', justifyContent: 'center', pb: '50px'}}>
									<Box sx={{display: 'flex', flexDirection: 'column', minWidth: '400px'}}>
										<TextField id="outlined-basic" label="Enter you name" variant="outlined"/>
										<Rating
											name="simple-controlled"
											value={star}
											onChange={(event, newValue) => {
												setStar(newValue);
											}}
											sx={{mt: '20px'}}
										/>
										<TextField
											id="standard-multiline-static"
											label="Enter You Review"
											variant="outlined"
											multiline
											rows={4}
											sx={{mt: '20px'}}
										/>
									</Box>
								</Box>
							</CustomTabPanel>
						</Box>
					</Grid>
					<Grid item lg={12}>
						<Typography variant='h2' component='h2'>
							You might also like
						</Typography>
					</Grid>

					<ProductsList data={relatedProducts}/>
				</Grid>
			</Box>
		</Helmet>
	);
};

export default ProductDetails;