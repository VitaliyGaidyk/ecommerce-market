import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection";
import {
	Box,
	Container,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography
} from "@mui/material";
import SearchBar from "../components/search/Search";
import React, {useState} from "react";
import products, {ProductsItems} from "../assets/data/products";
import ProductsList from "../components/Ui/ProductsList";

const Shop: React.FC = () => {
	const [productsData, setProductsData] = useState(products)
	const [selectedCategory, setSelectedCategory] = useState("");

	const handleFilter = (event: SelectChangeEvent) => {
		const filterValue = event.target.value as string

		if (filterValue === ProductsItems.SOFA) {
			const filteredProducts = products
				.filter((item) => item.category === ProductsItems.SOFA);
			setProductsData(filteredProducts);
		}

		if (filterValue === ProductsItems.CHAIR) {
			const filteredProducts = products
				.filter((item) => item.category === ProductsItems.CHAIR);
			setProductsData(filteredProducts);
		}

		if (filterValue === ProductsItems.MOBILE) {
			const filteredProducts = products
				.filter((item) => item.category === ProductsItems.MOBILE);

			setProductsData(filteredProducts);
		}

		if (filterValue === ProductsItems.WATCH) {
			const filteredProducts = products
				.filter((item) => item.category === ProductsItems.WATCH);

			setProductsData(filteredProducts);
		}
		if (filterValue === ProductsItems.WIRELESS) {
			const filteredProducts = products
				.filter((item) => item.category === ProductsItems.WIRELESS);

			setProductsData(filteredProducts);
		}
		setSelectedCategory(filterValue)
	}

	const handleSearch = (event: SelectChangeEvent) => {
		const searchTerm = event.target.value as string

		const searchProducts = products
			.filter((item)=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
		setProductsData(searchProducts)
	}

	return (
		<Helmet title='Shop'>
			<CommonSection title='Products'/>
			<Box mt='20px'>
				<Grid container sx={{display: 'flex', justifyContent: 'center'}}>
					<Grid item lg={2} md={3} sm={3} xs={3}>
						<FormControl fullWidth size="small">
							<InputLabel id="first-select">
								Select by category
							</InputLabel>
							<Select id="first-select"
							        value={selectedCategory}
							        onChange={handleFilter}
							        label="Select by category"
							>
								<MenuItem value='sofa'>Sofa</MenuItem>
								<MenuItem value='mobile'>Mobile</MenuItem>
								<MenuItem value='chair'>Chair</MenuItem>
								<MenuItem value='watch'>Watch</MenuItem>
								<MenuItem value='wireless'>Wireless</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item lg={2} md={3} sm={3} xs={3}>
						<FormControl fullWidth size="small">
							<InputLabel id="second-select">Sort by</InputLabel>
							<Select id="second-label">
								<MenuItem value='ascending'>Ascending</MenuItem>
								<MenuItem value='descending'>Descending</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item lg={6} md={6} sm={6} xs={6}>
						<FormControl fullWidth size="small">
							<SearchBar handleSearch={handleSearch}/>
						</FormControl>
					</Grid>
				</Grid>
			</Box>
			<Box component='section' py='20px'>
				<Container maxWidth={"lg"}>
					<Grid container>
						{
							productsData.length === 0 ?
								<Typography variant='h2' component='h2'>
									Products not found
								</Typography>
								:
								<ProductsList data={productsData}/>
						}
					</Grid>
				</Container>
			</Box>
		</Helmet>
	);
};

export default Shop;