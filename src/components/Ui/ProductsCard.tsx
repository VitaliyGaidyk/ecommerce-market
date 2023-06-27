import {Box, Grid, Typography} from "@mui/material";
import productImg from '../../assets/images/arm-chair-01.jpg'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {motion} from "framer-motion";

const ProductsCard = () => {
	return (
		<Grid item lg={3} md={4}>
			<Box>
				<Box component='img' src={productImg}/>
			</Box>
			<Typography variant="h3" component='h3'>
				Modern Armchair
			</Typography>
			<Box component='span'>
				Chair
			</Box>
			<Box>
				<Box component='span'>$299</Box>
				<Box component='span'><AddOutlinedIcon/></Box>
			</Box>
		</Grid>
	);
};

export default ProductsCard;