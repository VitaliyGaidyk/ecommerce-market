import React, {useEffect, useState} from "react";
import {Box, Stack, Typography} from "@mui/material";

const Clock: React.FC = () => {
	const [days, setDays] = useState<number>()
	const [hours, setHours] = useState<number>()
	const [minutes, setMinutes] = useState<number>()
	const [seconds, setSeconds] = useState<number>()

	let interval: NodeJS.Timeout

	const contDown = () => {
		const destination = new Date('Oct 10, 2023').getTime()

		interval = setInterval(() => {
			const now = new Date().getTime()
			const different = destination - now
			const days = Math.floor(different / (1000 * 60 * 60 * 24))
			const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60))
			const seconds = Math.floor(different % (1000 * 60) / (1000))

			if (destination < 0) clearInterval(interval)
			else {
				setDays(days)
				setHours(hours)
				setMinutes(minutes)
				setSeconds(seconds)
			}

		}, 1000)
	}

	useEffect(() => {
		contDown()
	},)
	return (
		<Stack direction='row'
		       gap='30px'
		>
			<Box display='flex'
			     alignItems='center'
			     justifyContent='center'
			     gap='30px'
			>
				<Box textAlign='center'>
					<Typography variant='h3'
					            component='h3'
					            color='white'
					            mb='5'
					>
						{days}
					</Typography>
					<Typography variant='h3'
					            component='h3'
					            color='white'
					            fontSize='1rem'
					>
						Days
					</Typography>
				</Box>
				<Box component='span'
				     color='white'
				     fontSize='1.3rem'
				     fontWeight='600'
				>
					:
				</Box>
			</Box>

			<Box display='flex'
			     alignItems='center'
			     justifyContent='center'
			     gap='30px'
			>
				<Box textAlign='center'>
					<Typography variant='h3'
					            component='h3'
					            color='white'
					            mb='5'
					>
						{hours}
					</Typography>
					<Typography variant='h3'
					            component='h3'
					            color='white'
					>
						Hours
					</Typography>
				</Box>
				<Box component='span'
				     color='white'
				     fontSize='1.3rem'
				     fontWeight='600'
				>
					:
				</Box>
			</Box>

			<Box display='flex'
			     alignItems='center'
			     justifyContent='center'
			     gap='30px'
			>
				<Box textAlign='center'>
					<Typography variant='h3'
					            component='h3'
					            color='white'
					            mb='5'
					>
						{minutes}
					</Typography>
					<Typography variant='h5'
					            component='h5'
					            color='white'
					            fontSize='1rem'
					>
						Minutes
					</Typography>
				</Box>
				<Box component='span'
				     color='white'
				     fontSize='1.3rem'
				     fontWeight='600'
				>
					:
				</Box>
			</Box>

			<Box display='flex'
			     alignItems='center'
			     justifyContent='center'
			     gap='30px'
			>
				<Box textAlign='center'>
					<Typography variant='h3'
					            component='h3'
					            color='white'
					            mb='5'
					>
						{seconds}
					</Typography>
					<Typography variant='h5'
					            component='h5'
					            color='white'
					            fontSize='1rem'
					>
						Seconds
					</Typography>
				</Box>
			</Box>
		</Stack>
	);
};

export default Clock;