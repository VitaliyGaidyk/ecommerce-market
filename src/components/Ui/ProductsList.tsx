import React from "react";
import ProductsCard from "./ProductsCard";
import {ProductData} from "../../assets/data/products";

interface ProductsListProps {
	data: ProductData[]
}

const ProductsList: React.FC<ProductsListProps> = (props) => {
	const {data} = props

	return (
		<>
			{data?.map(item => (
				<ProductsCard key={item.id} item={item}/>
			))}
		</>
	);
};

export default ProductsList;