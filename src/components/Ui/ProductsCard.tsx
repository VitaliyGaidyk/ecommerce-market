import {Box, Grid, Typography} from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import React from "react";
import {useAppDispatch} from "../../app/hooks";
import {addItem} from "../../app/cartSlice";
import {toast} from "react-toastify";

interface ProductsCardProps {
	id: string,
	productName: string,
	price: number,
	imgUrl: string,
	category?: string
}

const ProductsCard: React.FC<ProductsCardProps> = (props) => {
	const {id, productName, price, imgUrl, category} = props
	const dispatch = useAppDispatch()

	const addToCart = () => {
		dispatch(addItem({
			id,
			productName,
			price,
			imgUrl,
		}))
		toast.success('Product added')
	}

	return (
		<Grid item
		      lg={3}
		      md={3}
		      sm={3}
		      xs={6}
		      sx={{
			      cursor: 'pointer',
			      padding: '20px',
			      display: 'flex',
			      justifyContent: 'end',
			      flexDirection: 'column',
			      width: '100%'
		      }}
		>
			<Box display='flex'
			     justifyContent='center'
			>
				<motion.div whileHover={{scale: 0.9}}>
					<Box component='img' src={imgUrl} sx={{maxWidth: '200px'}}/>
				</motion.div>
			</Box>
			<Box textAlign='center'
			     display='flex'
			     alignItems='center'
			     flexDirection='column'>
				<Typography variant="h3"
				            component='h3'
				            fontSize='1.2rem'
				            fontWeight='600'
				>
					<Link to={`/shop/${id}`}>
						{productName}
					</Link>
				</Typography>
				<Box fontSize='.9rem'>
					{category}
				</Box>
			</Box>
			<Box display='flex'
			     alignItems='center'
			     justifyContent='space-between'
			     padding='5px'
			>
				<Box component='span'
				     fontSize='1.3rem'
				     fontWeight='500'
				>
					${price}
				</Box>
				<motion.div whileTap={{scale: 1.2}} onClick={addToCart}>
					<AddOutlinedIcon fontSize='medium'
					                 sx={{
						                 backgroundColor: '#0a1d37',
						                 color: 'white',
						                 padding: '5px',
						                 borderRadius: '50%'
					                 }}
					/>
				</motion.div>
			</Box>
		</Grid>
	);
};

export default ProductsCard;