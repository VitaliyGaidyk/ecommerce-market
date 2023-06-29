import {Box, Container, Grid, Stack, styled, Typography} from "@mui/material";
import React from "react";
import serviceData from "../assets/data/serviceData";
import {motion} from "framer-motion";

const Icon = styled('i')({
	padding: '10px',
	background: '#0a1d37',
	borderRadius: '50%',
	color: 'white',
	fontWeight: 400,
})

const Services: React.FC = () => {

	return (
		<Container maxWidth='lg'>
			<Grid container style={{marginTop: '20px', marginBottom: '50px'}}>
				{
					serviceData.map((item) => (
						<Grid item md={4} lg={3} key={item.title}>
							<motion.div whileHover={{scale: 1.1}}>
								<Stack direction='row'
								       spacing={1}
								>
									<Box style={{backgroundColor: `${item.bg}`}}
									     sx={{
										     display: 'flex',
										     alignItems: 'center',
										     padding: '15px',
										     cursor: 'pointer',
										     borderRadius: '5px',
									     }}>
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
									</Box>
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