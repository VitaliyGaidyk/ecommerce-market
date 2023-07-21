import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection";
import {
	Box, Button,
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
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {cartItem, deleteItem, totalAmount} from "../app/cartSlice";
import {Link} from "react-router-dom";

const Cart: React.FC = () => {
	const cartItems = useAppSelector(cartItem)
	const totalAmountItem = useAppSelector(totalAmount)
	const dispatch = useAppDispatch()

	const deleteProduct = (id: string) => {
		dispatch(deleteItem(id))
	}

	return <Helmet title='Cart'>
		<CommonSection title='Shoping cart'/>
		<Box component='section'>
			<Container maxWidth='lg'>
				<Grid container>
					<Grid item lg={9}>
						<TableContainer component={Paper}>
							{
								cartItems.length === 0 ?
									<Typography component='h2' variant='h2' p={10}>
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
															<Box component='div'
															     sx={{cursor: 'pointer'}}
															     onClick={() => deleteProduct(item.id)}
															>
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
						<Box padding={2}>
							<Box display='flex'
							     justifyContent='space-between'
							     alignItems='center'
							     sx={{marginBottom: '20px'}}
							>
								<Typography variant='h4'
								            typography='h4'
								            textAlign='center'
								>
									Total
								</Typography>
								<Box fontWeight={600} textAlign='center'>
									$ {totalAmountItem}
								</Box>
							</Box>
							<Box>
								<Button variant="contained" sx={{marginBottom: '10px'}}>
									<Link to='/shop'>
										Continue Shopping
									</Link>
								</Button>
								<Button variant="contained">
									<Link to='/checkout'>
										Checkout
									</Link>
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	</Helmet>
};

export default Cart;