import {Box} from "@mui/material";
import React from "react";
import {Review} from "../../assets/data/products";
interface TabPanelProps {
	children?: React.ReactNode | Review[];
	index: number;
	value: number | string;
}

export const a11yProps = (index: number) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const CustomTabPanel = (props: TabPanelProps) => {
	const {children, value, index} = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
		>
			{value === index && (
				<Box padding='40px 10px 50px 10px'>
					{children as React.ReactNode}
				</Box>
			)}
		</div>
	);
}

export default CustomTabPanel