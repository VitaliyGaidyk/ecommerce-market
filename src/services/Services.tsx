import {Box, Container, Grid, Stack, styled, Typography} from "@mui/material";
import React from "react";
import serviceData from "../assets/data/serviceData";
import {motion} from "framer-motion";
import {theme} from "../theme/theme";

const Icon = styled('i')({
	padding: '10px',
	background: '#0a1d37',
	borderRadius: '50%',
	color: 'white',
	fontWeight: 400,
	[theme.breakpoints.down('md')]: {
		padding: '5px'
	}
})

const Card = styled('div')({
	display: 'flex',
	alignItems: 'center',
	padding: '15px',
	cursor: 'pointer',
	borderRadius: '5px',
	[theme.breakpoints.down('lg')]: {
		marginLeft: '10px',
		padding: '10px',
	},
	[theme.breakpoints.down('md')]: {
		marginTop: '10px',
		width: '100%',
	},
})

const Services: React.FC = () => {

	return (
		<Container maxWidth='lg'>
			<Grid container sx={{marginTop: '20px', marginBottom: '50px'}}>
				{
					serviceData.map((item) => (
						<Grid item lg={3}
						      md={3}
						      sm={6}
						      xs={12}
						      key={item.title}
						      sx={{width: {xs: '100%'}, display: 'flex', justifyContent: {xs: 'start', sm: 'center'}}}
						>
							<motion.div whileHover={{scale: 1.1}} style={{width: '100%'}}>
								<Stack direction='row'
								       spacing={1}
								       sx={{width: {xs: '100%'}}}
								>
									<Card style={{backgroundColor: `${item.bg}`}}>
										<Icon className={item.icon}/>
										<Box component='span' marginLeft='10px'>
											<Typography variant='h3'
											            component='h3'
											            fontSize='1.1rem'
											            fontWeight={600}
											>
												{item.title}
											</Typography>
											<Typography component='p'
											            mt='5px'
											            fontSize='.9rem'
											            color='black'
											>
												{item.subtitle}
											</Typography>
										</Box>
									</Card>
								</Stack>
							</motion.div>
						</Grid>
					))
				}
			</Grid>
		</Container>
	);
};

export default Services;