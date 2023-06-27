import {Box} from "@mui/material";
import React, {ReactNode} from "react";

interface HelmetProps {
	title: string
	children?: ReactNode;
}

const Helmet: React.FC<HelmetProps> = (props) => {
	document.title = 'Multimart - ' + props.title

	return (
		<Box sx={{width: '100%'}}>
			{props.children}
		</Box>
	);
};

export default Helmet;