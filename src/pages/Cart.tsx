import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection";
import {
	Box,
	Container,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow, Typography
} from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useAppSelector} from "../app/hooks";
import {cartItem} from "../app/cartSlice";

const Cart: React.FC = () => {
	const cartItems = useAppSelector(cartItem)

	return <Helmet title='Cart'>
		<CommonSection title='Shoping cart'/>
		<Box component='section'>
			<Container maxWidth='lg'>
				<Grid container>
					<Grid item lg={9}>
						<TableContainer component={Paper}>
							{
								cartItems.length === 0 ?
									<Typography component='h2' variant='h2'>
										No items added
									</Typography>
									:
									<Table sx={{minWidth: '650px'}}>
										<TableHead>
											<TableRow>
												<TableCell>Image</TableCell>
												<TableCell>Title</TableCell>
												<TableCell>Price</TableCell>
												<TableCell>Qty</TableCell>
												<TableCell>Delete</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{
												cartItems.map((item) => (
													<TableRow key={item.id}>
														<TableCell width='80px' sx={{objectFit: 'cover'}}>
															<Box component='img' src={item.imgUrl}/>
														</TableCell>
														<TableCell>{item.productName}</TableCell>
														<TableCell>${item.price}</TableCell>
														<TableCell>{item.quantity}</TableCell>
														<TableCell>
															<Box sx={{cursor: 'pointer'}}>
																<DeleteOutlineOutlinedIcon/>
															</Box>
														</TableCell>
													</TableRow>
												))
											}
										</TableBody>
									</Table>
							}
						</TableContainer>
					</Grid>
					<Grid item lg={3}>

					</Grid>
				</Grid>
			</Container>
		</Box>
	</Helmet>
};

export default Cart;