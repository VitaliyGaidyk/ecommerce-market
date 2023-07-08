import {InputAdornment, TextField} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
	handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
	const {handleSearch} = props

	return (
		<TextField
			id="search"
			type="search"
			label="Search"
			onChange={handleSearch}
			sx={{width: "100%"}}
			size='small'
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<SearchIcon/>
					</InputAdornment>
				),
			}}
		/>
	);
}

export default SearchBar