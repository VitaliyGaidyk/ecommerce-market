import React from "react";
import ProductsCard from "./ProductsCard";

const ProductsList: React.FC = () => {
	return (
		<>
			<ProductsCard/>
			<ProductsCard/>
			<ProductsCard/>
			<ProductsCard/>
		</>
	);
};

export default ProductsList;