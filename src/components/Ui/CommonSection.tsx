import React from "react";
import {Box, Container, styled, Typography} from "@mui/material";
import background from  '../../assets/images/common-section-bg.jpg'

interface CommonSectionProps {
	title: string
}
const CommonSectionWrapper = styled(Box)({
	background: `linear-gradient(rgba(0, 0, 0, 0.562), rgba(0, 0, 0, 0.562)), url(${background})no-repeat, center center`,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '100px 0',
	backgroundSize: 'cover',
})

const CommonSection: React.FC<CommonSectionProps> = (props) => {
	const {title} = props

	return (
		<CommonSectionWrapper>
			<Container maxWidth='lg'>
				<Typography variant='h2'
				            component='h2'
				            color='white'
				            fontWeight='600'
				            textAlign='center'
				>
					{title}
				</Typography>
			</Container>
		</CommonSectionWrapper>
	);
};

export default CommonSection;